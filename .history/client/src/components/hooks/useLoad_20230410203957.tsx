import axios from "axios"
import { useEffect, useState } from "react"
import { API } from "../../api/API";

export const useLoad = (endpoint: string) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const load = () =>{
        useEffect(()=>{
          setLoading(true)
            axios.get(API+endpoint)
              .then(response => {
               setData(response.data.result);
               setLoading(false)
              })
              .catch(error => {
                console.error(error);
                setLoading(false)
              });
        },[])
      }

    return {loading, load, data}
}
