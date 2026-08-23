const { default: mongoose } = require("mongoose")
const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB =  async () => {
    try{
        await mongoose.connect("");
        console.log("DB COnnected")
    } catch (e) {
        console.log("Error", e)
    }
}

module.exports = connectDB;