import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI;

(async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Define a schema
    const contactSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    }, { timestamps: true });

    const Contact = mongoose.model('Contact', contactSchema);

    // Fetch all contacts
    const contacts = await Contact.find({});
    console.log(contacts);

    // Close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
