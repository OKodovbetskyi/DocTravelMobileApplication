import axios from "axios"
import { useEffect, useState } from "react"

const useLoad = (endpoint: string) =>{
    const [data, setData] = useState([]);

    
    return {loading, load, data}
}