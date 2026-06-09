import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Custom Software', 'Mobile App', 'Workflow Automation', 'AI Solutions', 'ConTrack', 'Other'],
  },
  requirements: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);
export default Inquiry;
