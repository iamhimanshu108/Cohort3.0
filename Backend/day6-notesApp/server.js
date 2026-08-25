const app = require("./src/app");


let port  = 3000;

app.listen(port, () => {
    console.log(`Sever is running ${port}`)
});