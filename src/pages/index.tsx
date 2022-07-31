import type { NextPage } from 'next';
import Sidebar from '@/components/sidebar';
import Grid from '@mui/material/Grid';

const Home: NextPage = () => {
  return (
    <>
      <Grid container sx={{marginTop: 10.4}}>
        <Sidebar />
      </Grid>
    </>
  )
}

export default Home
