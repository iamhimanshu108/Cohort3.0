import app from "./app/app.js"


let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});