import type { NextPage } from 'next';
import type { GetServerSideProps } from 'next';
import axios from "axios";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PokemonCard from '@/components/pokemoncard';
import Page from '@/components/page';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryPage = Number(ctx.query.page);
  const limit = Number(ctx.query.limit);
  const offset = Number(ctx.query.offset);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
  var sliceTop = 0;
  if (queryPage) {
    sliceTop = Math.ceil(queryPage - 1) * 50;
  }
  console.log(sliceTop);
  const sliceBottom = sliceTop + 50;
  const response = await axios.get(url);
  const item = response.data.results.slice(sliceTop, sliceBottom);

  return {
    props: {
      data: {
        limit: limit,
        offset: offset,
        page: queryPage,
        count: response.data.count,
        results: item,
        length: response.data.results.length,
      },
    },
  }
}

interface PokemonList {
  name: string,
  url: string,
}

const Index: NextPage = ({data}: any) => {
  return (
    <Box>
      <Container maxWidth='lg'>
        {data.limit ?
          <Typography sx={{marginTop: 3, marginBottom: 3}} variant='h5'>
          全<span style={{color: 'red'}}>{data.limit}</span>匹
        </Typography>
        :
        <Typography sx={{marginTop: 3, marginBottom: 3}} variant='h5'>
          全<span style={{color: 'red'}}>{data.count}</span>匹
        </Typography>
        }
        <Grid container>
          {data.count > 0 &&
          data.results.map((result: PokemonList) => {
            return (
              <Grid item key={result.name} sm={3} sx={{paddingBottom: 2, paddingRight:2}}>
                <PokemonCard url={result.url} />
              </Grid>
            )
          })}
        </Grid>
        {data.length > 0 &&
          <Page data={{count: data.length, page: data.page, limit: data.limit, offset: data.offset}} />
        }
      </Container>
    </Box>
  )
}

export default Index
