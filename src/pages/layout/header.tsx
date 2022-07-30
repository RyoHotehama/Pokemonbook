import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Header = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>

      <AppBar position='static' elevation={0} position='fixed' sx={{background: '#F15B5B'}}>
        <Container maxWidth='lg'>
            <Toolbar disableGutters>
              <Grid container sx={{justifyContent: 'space-between'}}>
                <Grid item sx={{margin: 'auto 0'}}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                    ポケモン図鑑
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href='/'>
                    <Image src='/pokemon_logo.png' alt='ロゴ画像' width={400} height={80} />
                  </Link>
                </Grid>
                <Grid item sx={{margin: 'auto 0'}}>
                  <Grid container>
                    <Grid item>
                      <TextField id='outlined-basic' label="キーワード" variant="outlined" color='success'/>
                    </Grid>
                    <Grid item sx={{margin: 'auto 0 0 0'}}>
                      <Button variant="outlined" sx={{color: '#2b2b2b', borderColor: '#2b2b2b'}}>
                        検索
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header