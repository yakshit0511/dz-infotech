import mongoose from 'mongoose';
import Job from './models/Job.js';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dzinfotech';
  
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully.');
    
    // Seed initial careers if none exist
    const jobCount = await Job.countDocuments();
    if (jobCount === 0) {
      console.log('No careers found in database. Seeding initial positions...');
      const seedJobs = [
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
      await Job.insertMany(seedJobs);
      console.log('Successfully seeded 4 job positions.');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    console.log('Server running in fallback mode without database persistence.');
  }
};
