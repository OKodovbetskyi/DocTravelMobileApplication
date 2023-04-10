import axios from "axios"
import { useEffect, useState } from "react"
import { API } from "../../api/API";

export const useLoad = (endpoint: string) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState('');
    const load = () =>{
          setLoading(true)
            axios.get(API+endpoint)
              .then(response => {
                if (response.data.result.length>0){
                    setData(response.data.result);
                    setStatus('Success')
                } else {
                    setLoading(false)
                    setStatus('Could not find any data')
                }
              })
              .catch(error => {
                console.error(error);
                setStatus('Error occured during loading')
                setLoading(false)
              });
      }
    useEffect(()=>{load()},[endpoint])
    return {loading,status, load, data}
}
