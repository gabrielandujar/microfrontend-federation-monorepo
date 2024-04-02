/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useUserStore from "../store/user"

export default function App() {
  const name = useUserStore(state => state.name)
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          PROFILE OF {name}
        </Typography>       
      </Box>
    </Container>
  );
}