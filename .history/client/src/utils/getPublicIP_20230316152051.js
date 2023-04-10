import  publicIp  from "public-ip";

export const getIp = async () =>{
    const myIP= await publicIp.v4();
    return myIP;
}