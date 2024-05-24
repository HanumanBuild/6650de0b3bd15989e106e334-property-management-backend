const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  propertyId: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);