import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { HomePageCompanyLogo } from '@backstage/plugin-home';

export const HomePage = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={8}>
      <HomePageCompanyLogo />
    </Grid>
    
    <Grid item xs={12}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.open('http://localhost:8081/svc1', '_blank')}
      >
        Go to Service 1
      </Button>
    </Grid>
  </Grid>
);
