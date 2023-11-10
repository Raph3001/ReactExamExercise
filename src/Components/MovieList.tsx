import {SimpleGrid} from "@chakra-ui/react";
import MovieLet from "./MovieLet.tsx";
import useMovies from "../hooks/useMovies.ts";

interface MovieListProps {
    movieType: string,
    year: number,
    searchString: string
}

const MovieList = ({movieType, year, searchString}: MovieListProps) => {

    const {movies} = useMovies(movieType, year, searchString);
    console.log(movieType)

    return (
        <>
            {movies && <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding={10} spacing={10}>
              {movies.map((movie) => (
                  <MovieLet key={movie.imdbID} movie={movie}/>
              ))}
          </SimpleGrid>}
        </>
    );
};

export default MovieList;