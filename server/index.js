const express = require("express")
const colors = require("colors")
const app = express()
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT || 5000
const schema = require("./schema/schema")
const connectDB = require("./config/db")
const { graphqlHTTP } = require("express-graphql")

connectDB()

app.use(cors())
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
)

// app.get("/", (req, res) => {
//   res.send("Hello")
// })

app.listen(PORT, () => console.log(`Server is running on port on ${PORT}`))
