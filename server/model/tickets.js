const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

const ticketSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
    timestamp: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

module.exports = mongoose.model('Task', ticketSchema)