import MovieList from "./Components/MovieList.tsx";
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {useState} from "react";
import Type from "./Components/Type.tsx";
import YearSelector from "./Components/YearSelector.tsx";
import {NavBar} from "./Components/NavBar.tsx";
import SearchSelector from "./Components/searchSelector.tsx";

function App() {
  //const [count, setCount] = useState(0)
    const types: string[] = ['movie', 'series', 'games'];
    const [type, setSelectedType] = useState<string>('movie');
    const [year, setSelectedYear] = useState<number>(2023);
    const [searchString, setSearchString] = useState<string>("man");

    const setType = (t: string) => {
        console.log(t)
        setSelectedType(t);
        console.log(type)
    }

  return (
    <>
        <Grid templateAreas={
            {
                base:`"nav main"`,
                lg: `"nav nav" "aside main"`
            }
        }>

            <GridItem area={'nav'}>
                <NavBar/>
            </GridItem>
            <Show above={'lg'}>
            <GridItem area={'aside'}>
                <Type types={types} onSelectType={setType}/>
                <YearSelector selectedYear={year} onYearSelect={setSelectedYear}/>
                <SearchSelector onChange={setSearchString} />
            </GridItem>
            </Show>
            <GridItem area={'main'}>
                <Type types={types} onSelectType={setType}/>
                <MovieList searchString={searchString} movieType={type} year={year}/>
            </GridItem>
        </Grid>
    </>
  )
}

export default App
