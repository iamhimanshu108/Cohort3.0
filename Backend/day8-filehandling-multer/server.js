const app =  require("./src/app");

let port =  3000;


app.listen(port, (req, res) => {
    console.log(`Db Running on Port ${port}`)
})