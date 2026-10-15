import express from "express";
import productModel from "../models/product.model.js";
import paymentModel from "../models/pyment.model.js";
import razorpayInstance from "../config/razorpay.js";
import config from "../config/config.js";
import {validatePaymentVerification} from "razorpay/dist/utils/razorpay-utils.js";

const router = express.Router();

router.get("/products", async (req, res) => {
    const products = await productModel.find().select("title price");
    return res.json(products);
});

/**
 * @method POST
 * @route /api/payments/:productId
 * @description Create a new payment order for a product
 */

router.post("/:productId/order", async (req, res) => {
    const { productId } = req.params;

    const product = await productModel.findById(productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const order = await razorpayInstance.orders.create({
        amount: product.price.amount * 100, // Amount in paise
        currency: product.price.currency,
        receipt: `order_rcptid_${productId}`,
        notes: {
            productId: productId,
            productTitle: product.title,
        }
    });

    const payment = await paymentModel.create({
        orderId: order.id,
        productId: productId,
        amount: order.amount,
        currency: product.price.currency,
        status: "pending",
    })
    
    return res.status(201).json({
        ...payment.toObject(),
        keyId: config.RAZORPAY_KEY_ID,
    });
})


/***
 * 
 * @method POST
 * @route /api/payments/:orderId/verify
 * @description Verify the payment signature and update the payment status
 */

router.post("/:orderId/verify", async (req, res) => {
    const { orderId } = req.params;
    const {
        razorpay_order_id: verifiedOrderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature,
    } = req.body;

    if (verifiedOrderId !== orderId || !paymentId || !signature) {
        return res.status(400).json({ message: "Invalid payment details" });
    }

    const payment = await paymentModel.findOne({ orderId, status: "pending" });

    if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
    }

    const isValid = validatePaymentVerification(
        { order_id: orderId, payment_id: paymentId },
        signature,
        config.RAZORPAY_KEY_SECRET
    );

    if (!isValid) {
        return res.status(400).json({ message: "Invalid payment signature" });
    }

    const updatedPayment = await paymentModel.findByIdAndUpdate(payment._id, {
        paymentId: paymentId,
        signature: signature,
        status: "completed"
    }, { new: true });

    return res.json({ status: "success", payment: updatedPayment });
})


export default router;