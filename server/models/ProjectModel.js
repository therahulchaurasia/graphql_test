const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  // clientId: "1",
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
})

module.exports = mongoose.model("Project", ProjectSchema)
