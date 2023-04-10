import dotenv from "react-native-dotenv";

export const getMyIPConf = (name: string)=>{
    dotenv.config();
    return process.env[name];
}

