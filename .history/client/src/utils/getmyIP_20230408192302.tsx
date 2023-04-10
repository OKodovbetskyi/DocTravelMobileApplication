import load from 'expo-env'
export const getMyIPConf = (name: string)=>{
    load();
    return process.env[name];
}

