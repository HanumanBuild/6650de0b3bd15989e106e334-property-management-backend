const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');
const serviceRequestRoutes = require('./routes/serviceRequest');
const authRoutes = require('./routes/auth');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/contact', contactRoutes);
app.use('/service-request', serviceRequestRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Property Management Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});