import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Product from "../models/product.model.js";

const products = [
    {
        title: "Wireless Mouse",
        description: "Ergonomic wireless mouse with adjustable DPI.",
        price: { amount: 799, currency: "INR" },
    },
    {
        title: "Mechanical Keyboard",
        description: "Compact mechanical keyboard with tactile switches.",
        price: { amount: 2499, currency: "INR" },
    },
    {
        title: "USB-C Hub",
        description: "Multiport USB-C hub with HDMI and USB 3.0 ports.",
        price: { amount: 1599, currency: "INR" },
    },
    {
        title: "Bluetooth Headphones",
        description: "Over-ear Bluetooth headphones with noise isolation.",
        price: { amount: 3299, currency: "INR" },
    },
    {
        title: "Laptop Stand",
        description: "Adjustable aluminum stand for laptops up to 16 inches.",
        price: { amount: 1199, currency: "INR" },
    },
    {
        title: "Portable SSD",
        description: "Portable 1 TB solid-state drive with USB-C connectivity.",
        price: { amount: 6499, currency: "INR" },
    },
    {
        title: "Webcam",
        description: "1080p webcam with built-in microphone and privacy cover.",
        price: { amount: 2199, currency: "INR" },
    },
    {
        title: "Desk Lamp",
        description: "Dimmable LED desk lamp with adjustable color temperature.",
        price: { amount: 999, currency: "INR" },
    },
    {
        title: "Power Bank",
        description: "20,000 mAh power bank with fast charging support.",
        price: { amount: 1899, currency: "INR" },
    },
    {
        title: "USB-C Cable",
        description: "Durable 2-meter USB-C cable supporting fast charging.",
        price: { amount: 399, currency: "INR" },
    },
];

try {
    await connectDB();

    await Product.bulkWrite(
        products.map((product) => ({
            updateOne: {
                filter: { title: product.title },
                update: { $set: product },
                upsert: true,
            },
        }))
    );

    console.log(`Seeded ${products.length} sample products.`);
} finally {
    await mongoose.disconnect();
}
