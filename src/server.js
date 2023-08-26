const express = require("express")
const { router } = require("./router")

const app = express()

app.use(express.json())
app.get("/ping", (request, response) => response.send("pong"))
app.use(router)

app.listen(80, () => console.log("Server running"))
