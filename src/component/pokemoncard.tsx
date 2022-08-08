import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';
import { CardActionArea } from '@mui/material';
import axios from "axios";
import { useEffect, useState } from 'react';
import Name from '@/components/name';

const PokemonCard = (props: any) => {
  const [pokemon, setPokemon] = useState<any>([]);
  const url = props.url;

  useEffect(() => {
    PokemonData();
  }, [props]);

  const PokemonData = async () => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
    } catch(error) {
      console.log(error)
    }
  }
  console.log(pokemon)
  return (
    <>
      {pokemon.id &&
        <Card>
          <Link href={{pathname: '/'}} passHref>
            <CardActionArea component='a'>
              <CardMedia
                component='img'
                image={pokemon.sprites.other['official-artwork'].front_default}
              />
              <CardContent sx={{height: 50}}>
                <Name url={pokemon.species.url} />
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      }
    </>
  )
}

export default PokemonCard