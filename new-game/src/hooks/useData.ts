import { useState, useEffect } from "react";
import apiClient from "../Service/apiClient";
import { CanceledError } from "axios";


  
export interface FetchResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  
  
    useEffect(() => {

        const controller = new AbortController();
        setIsLoading(true);

        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then(response => {
                setIsLoading(false);
                setData(response.data.results)
            })
            .catch(error => {
                if(error instanceof CanceledError){
                    return
                }
                setIsLoading(true);
                setError(error.message);
                setIsLoading(false);
            }
        )

        return () => controller.abort();

    }, [])

    return {data,error,isLoading}
}

export default useData