import axios from "axios";
import {useState, useEffect} from "react";
import Typography from '@mui/material/Typography';

const Name = (props: any) => {
  const [name, setName] = useState<any>([]);

  useEffect(() => {
    PokemonData();
  }, [props]);

  const PokemonData = async () => {
    try {
      const response = await axios.get(props.url);
      setName(response.data);
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <Typography align='center' variant="h5">
      {name.id &&
      name.names[0].name}
    </Typography>
  )
}

export default Name