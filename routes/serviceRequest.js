const express = require('express');
const router = express.Router();
const ServiceRequest = require('../models/ServiceRequest');

router.post('/', async (req, res) => {
  try {
    const serviceRequest = new ServiceRequest(req.body);
    await serviceRequest.save();
    res.status(201).send(serviceRequest);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;