import axios from "axios"
import { useEffect, useState } from "react"

const useLoad = (endpoint: string) =>{
    const [data, setData] = useState([]);
    const load = () =>{
        useEffect(()=>{
          setLoading(true)
            axios.get(URL+endpoint)
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