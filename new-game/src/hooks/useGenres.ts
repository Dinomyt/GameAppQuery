// import { useState, useEffect } from "react";
// import apiClient from "../Service/apiClient";
// import { CanceledError } from "axios";

export interface FetchGenreResponse {
    count: number
    results: Genre []
}

export interface Genre {
    id: number;
    name: string;
    image_background: string
}

const useGenres = () => {

    // const [genres, setGenres] = useState<Genre[]>([]);
    // const [error, setError] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
  
  
    // useEffect(() => {

        
    //     const controller = new AbortController();
    //     setIsLoading(true);

    //     apiClient.get<FetchGenreResponse>('/genres',{signal: controller.signal})
    //         .then(response => {
    //             setIsLoading(false);
    //             setGenres(response.data.results)
    //         })
    //         .catch(error => {
    //             if(error instanceof CanceledError){
    //                 return
    //             }
    //             setIsLoading(true);
    //             setError(error.message);
    //             setIsLoading(false);
    //         }
    //     )

    //     return () => controller.abort();

    // }, [])

    // return {genres,error,isLoading}
}

export default useGenres