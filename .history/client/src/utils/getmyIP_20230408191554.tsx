import do

export const getMyIPConf = (name: string)=>{
    dotenv.config();
    return process.env[name];
}

