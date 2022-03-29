import { Card, CardContent, Container, Typography } from "@mui/material";

import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          minHeight: "80vh",
        }}
      >
        <Typography variant="h4" align="center" marginTop={5} marginBottom={5}>
          Counter App
        </Typography>
        <Card
          raised
          color="primary"
          sx={{
            fontSize: "40px",
            padding: "15px",
          }}
        >
          <CardContent
            sx={{
              color: "secondary",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={() => setCount(count - 1)}>Deduct -</button>
            <span> {count} </span>
            <button onClick={() => setCount(count + 1)}>+ Add</button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default CounterApp;
