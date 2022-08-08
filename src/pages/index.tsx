import type { NextPage } from 'next';
import type { GetServerSideProps } from 'next';
import axios from "axios";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PokemonCard from '@/components/pokemoncard';

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await axios.get(url);

  return {
    props: {
      data: {
        count: response.data.count,
        results: response.data.results,
      },
    },
  }
}

interface PokemonList {
  name: string,
  url: string,
}

const Index: NextPage = ({data}: any) => {
  console.log(data.results)
  return (
    <Box>
      <Container maxWidth='lg'>
        <Typography sx={{marginTop: 3, marginBottom: 3}} variant='h5'>
          全<span style={{color: 'red'}}>{data.count}</span>匹
        </Typography>
        <Grid container>
          {data.count > 0 &&
          data.results.map((result: PokemonList) => {
            return (
              <Grid key={result.name} sm={3} sx={{paddingBottom: 2, paddingRight:2}}>
                <PokemonCard url={result.url} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default Index
