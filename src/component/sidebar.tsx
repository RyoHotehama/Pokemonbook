import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Link from 'next/link';

const data = [
  {label: 'カントー', limit: 150, offset: 0},
  {label: 'ジョウト', limit: 100, offset: 151},
];

const typeData = [
  {label: 'ノーマル'},
  {label: 'ひこう'},
]

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  return (
    <Grid item sm={2} sx={{minHeight: 750, background: '#FFFF80'}}>
      <Box sx={{background: '#ffff00'}}>
        <ListItemButton alignItems="flex-start" onClick={() => setOpen(!open)}>
          <ListItemText
            primary="エリア"
          />
        </ListItemButton>
        {open &&
          data.map((item) => (
            <ListItemButton key={item.label} sx={{background: '#fff9a6'}}>
              <Link href={{pathname: '/', query: {limit: item.limit, offset: item.offset}}} passHref>
                <ListItemText primary={item.label}></ListItemText>
              </Link>
            </ListItemButton>
          ))
        }
      </Box>
      <Box sx={{background: '#fd7e00'}}>
        <ListItemButton alignItems="flex-start" onClick={() => setTypeOpen(!typeOpen)}>
          <ListItemText
            primary="タイプ"
          />
        </ListItemButton>
        {typeOpen &&
          typeData.map((item) => (
            <ListItemButton key={item.label} sx={{background: '#FCD997'}}>
              <ListItemText primary={item.label}></ListItemText>
            </ListItemButton>
          ))
        }
      </Box>
    </Grid>
  )

}

export default Sidebar