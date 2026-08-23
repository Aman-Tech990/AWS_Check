import express, { json } from "express";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
    dotenv.config({});
}

const app = express();
const port = 3000;

app.get("/health", (req, res) => {
    return res.status(200).json({
        success: true,
        message: `API's working well!`
    })
});

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: `All good from ${port}. I hope you are doing well too!`
    })
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});