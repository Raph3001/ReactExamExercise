import {useEffect, useState} from "react";
import {IFetchMovieResponse, IMovie} from "../common/models.ts";
import apiClient from "../services/api-client.ts";

const useMovies = (movieType: string, year: number, searchString: string) => {
    console.log("Use Movies: " + movieType)

    const [movies, setMovies] = useState<IMovie[]>([]);


    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<IFetchMovieResponse>('', {
            signal: controller.signal,
            params: {
                type: movieType,
                y: year,
                s: searchString
            }
        })
            .then(res => setMovies(res.data.Search))
            .catch(err => {
                console.log("An error occured: " + err)
            });

    }, [movieType, year, searchString]);

    //if (movies.length == 0) setMovies([])

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<IFetchMovieResponse>('', {
            signal: controller.signal,
            params: {
                s: "balls"
            }
        })
    }, []);

    return {movies};

}

export default useMovies;