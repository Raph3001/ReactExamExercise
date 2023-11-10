import {IMovie} from "../common/models.ts";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";

interface MovieLetProps {
    movie: IMovie
}

const MovieLet = ({movie}: MovieLetProps) => {
    return (
        <>
          <Card borderRadius={10} overflow='hidden'>
              <Image src={movie.Poster}/>
              <CardBody>
                  <Heading fontSize='2xl'>{movie.Title}</Heading>
              </CardBody>
          </Card>
        </>
    );
};

export default MovieLet;