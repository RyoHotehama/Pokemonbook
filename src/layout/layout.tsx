import Head from 'next/head';
import Header from '@/layout/header';
import React, { ReactNode } from 'react';
import Sidebar from '@/components/sidebar';
import Grid from '@mui/material/Grid';

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title></title>
        <meta charSet='utf-8' />
      </Head>

      <Header />
      <Grid container sx={{marginTop: 10.4}}>
        <Sidebar />
        <Grid item sm={10}>{children}</Grid>
      </Grid>
    </>
  );
};

export default Layout;