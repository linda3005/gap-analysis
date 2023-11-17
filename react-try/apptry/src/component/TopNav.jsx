import React from 'react';
import { Grid, Typography, Box, Avatar, Card, CardActions, CardContent } from '@mui/material';

const TopNav = () => {
  const user = {
    name: 'Linda Damayanti',
    avatarUrl: 'https://example.com/avatar.jpg', // Replace with the actual URL of the avatar
  };

  return (
    <Grid container sx={{ backgroundColor: "#95BDFF", padding: 1, paddingLeft: 0, paddingRight: 4 }}>
      <Grid item xs={6} sm={6}>
        <Box sx={{ py: 3 }}>
          <Typography
            color="#FFF"
            variant="h4"
            sx={{
              margin: 0,
              padding: 2,
              paddingY: 1,
              border: '2px solid #FFF',
              borderRadius: '4px', // Optional: Add border radius for rounded corners
              display: 'inline'
            }}
          >
            Locomotive Report
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} container justifyContent="flex-end" alignItems="center">
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <Avatar alt={user.name} src={user.avatarUrl} />
          <Typography color="#FFF" variant="h6" sx={{ marginLeft: 1 }}>
            {user.name}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopNav;
