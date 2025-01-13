// Page to call service chain

import React, { useState } from 'react';
import { Button, Typography, Box } from '@material-ui/core';

export const ServiceChainCaller = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const callServiceChain = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const svc1Response = await fetch('http://localhost:8081/svc1');

      if (!svc1Response.ok) {
        throw new Error(`HTTP error! status: ${svc1Response.status}`);
      }
      const data = await svc1Response.text();

      setResponse(data);
    } catch (err) {
      console.error('Error calling service chain', err);
      setError('An error occurred while calling the services.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Call Service Chain
      </Typography>
      <Button variant="contained" color="primary" onClick={callServiceChain} disabled={loading}>
        {loading ? 'Loading...' : 'Call Services'}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      {response && <Typography variant="body1" style={{ marginTop: '20px' }}>{response}</Typography>}
    </Box>
  );
};
