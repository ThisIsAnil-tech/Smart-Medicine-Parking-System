import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  prescriptionRequired: {
    type: Boolean,
    default: false
  },
  stock: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: '/images/default-medicine.jpg'
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: Number,
    comment: String
  }]
}, {
  timestamps: true
});

export default mongoose.model('Medicine', medicineSchema);