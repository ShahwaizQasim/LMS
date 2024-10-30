import mongoose from "mongoose";

export async function ConnectDB() {
  try {
    let connected;

    // agr system connect nahi hai
    if (connected?.connection?.readyState != -1) {
      connected = await mongoose.connect(process.env.MONGODB_URI); // tw system connect ho jaye
      console.log('DB Connected');
    }
  } catch (error) {
    console.log('Error', error);
    
  }
}
