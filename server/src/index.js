import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import Job from './models/Job.js';
import Inquiry from './models/Inquiry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Mock static jobs list in case MongoDB fails or is offline
const fallbackJobs = [
  {
    title: 'Flutter Developer',
    department: 'Engineering',
    location: 'Bhavnagar',
    type: 'Full-time',
    description: 'We are looking for a skilled Flutter Developer to join our core engineering team in Bhavnagar. You will be building high-performance, offline-first mobile tools that empower site operations.',
    requirements: [
      '2+ years of experience in Flutter development',
      'Strong understanding of state management (Bloc/Provider/Riverpod)',
      'Experience with offline synchronization, SQLite, or Hive databases',
      'Knowledge of publishing apps on Google Play Store and Apple App Store'
    ]
  },
  {
    title: 'Backend Developer (Node.js)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking a Backend Developer (Node.js) to design, build, and optimize scalable RESTful APIs and database schemas for our next-generation enterprise solutions.',
    requirements: [
      '3+ years of experience with Node.js and Express',
      'Strong MongoDB schema design & Mongoose queries optimization',
      'Experience with REST API design, WebSockets, and JWT authentication',
      'Familiarity with cloud platforms (AWS / Google Cloud) and Docker'
    ]
  },
  {
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Bhavnagar',
    type: 'Full-time',
    description: 'Join our sales team to identify new business opportunities, engage with potential industrial clients, and present digital intelligence solutions designed to improve operations.',
    requirements: [
      '1+ years of experience in IT/Software sales',
      'Excellent written/verbal communication and negotiation skills',
      'Experience with lead generation, proposal writing, and CRM tools',
      'Ability to coordinate with engineering teams to scope requirements'
    ]
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'We are searching for a UI/UX Designer who is passionate about creating clean, modern, and beautiful user interfaces that solve complex operational challenges simply.',
    requirements: [
      '2+ years of experience using Figma or Adobe XD',
      'Strong portfolio showcasing mobile app, web app, and responsive designs',
      'Ability to build wireframes, interactive user flows, and prototypes',
      'Deep understanding of modern typography, CSS grids, and color theory'
    ]
  }
];

// Routes
// 1. GET /api/jobs - Fetch open jobs
app.get('/api/jobs', async (req, res) => {
  try {
    // If mongoose is connected (readyState === 1)
    if (Job.db.readyState === 1) {
      const jobs = await Job.find().sort({ createdAt: -1 });
      if (jobs && jobs.length > 0) {
        return res.status(200).json({ success: true, count: jobs.length, data: jobs });
      }
    }
    // Return fallback jobs
    return res.status(200).json({ success: true, count: fallbackJobs.length, data: fallbackJobs, source: 'fallback' });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return res.status(200).json({ success: true, count: fallbackJobs.length, data: fallbackJobs, source: 'fallback_error' });
  }
});

// 2. POST /api/inquiries - Submit partner form
app.post('/api/inquiries', async (req, res) => {
  const { name, company, email, phone, category, requirements } = req.body;
  
  if (!name || !email || !category || !requirements) {
    return res.status(400).json({ success: false, error: 'Please provide all required fields (name, email, category, requirements).' });
  }

  try {
    const inquiryData = { name, company, email, phone, category, requirements };
    
    // Save to Database if Mongoose is connected
    if (Inquiry.db.readyState === 1) {
      const inquiry = new Inquiry(inquiryData);
      await inquiry.save();
      console.log('Inquiry saved to MongoDB:', inquiry);
      return res.status(201).json({ success: true, message: 'Inquiry submitted successfully!', data: inquiry });
    }
    
    // Server is running without DB connection - log locally and return mock success
    console.log('MongoDB is offline. Received inquiry (logged to console):', inquiryData);
    return res.status(201).json({ 
      success: true, 
      message: 'Inquiry received successfully (offline database mode)!', 
      data: { ...inquiryData, createdAt: new Date() } 
    });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return res.status(500).json({ success: false, error: 'Internal server error. Please try again later.' });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('DZ Infotech MERN Backend API is running...');
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
