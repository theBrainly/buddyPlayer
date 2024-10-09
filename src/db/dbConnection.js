import {connect} from "mongoose"
import DB_NAME from "../constants.js";
import dotenv from "dotenv"

dotenv.config({ path: './env' });
const dbConnection=async()=>{
    try {
        const connectionInstance=await connect(`${process.env.MONGODB_URL}`);

        console.log(`Connected to the ${DB_NAME} database & ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
        
    }
}
export default dbConnection;