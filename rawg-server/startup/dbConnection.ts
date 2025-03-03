import { AppDataSource } from "./data-source";


const dbConnectMysql = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database", error);
        
    }
};

export default dbConnectMysql;