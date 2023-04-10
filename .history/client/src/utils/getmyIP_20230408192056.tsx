import dotenv from 'dotenv';
export const getMyIPConf = (name: string)=>{
    dotenv.config();
    return process.env[name];
}

