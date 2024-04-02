/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Edit() {
  const handleOpenMenu = () => {
		document.dispatchEvent(new CustomEvent('OPEN_DRAWER', {detail : null}))
	}
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Editar <a href="#" onClick={handleOpenMenu}>Open menu</a>
        </Typography>       
      </Box>
    </Container>
  )
}