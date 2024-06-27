// import { useState, useEffect } from "react";
// import apiClient from "../Service/apiClient";
// import { CanceledError } from "axios";

import useData from "./useData"
import { Genre } from "./useGenres"
import { Platform } from "./usePlatforms"

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}
  
export interface FetchGameResponse {
    count: number
    results: Game []
}

const useGames =    (   selectedGenre: Genre | null, 
                        selectedPlatform: Platform | null
                    ) => useData<Game>('/games',    {  params:  {   genres:selectedGenre?.id, 
                                                                    parent_platforms:selectedPlatform?.id,
                                                                                                                   
                                                                }
                                                    }, 
                                                    [   selectedGenre?.id, 
                                                        selectedPlatform?.id,
                                                        
                                                    ]
                    )

export default useGames