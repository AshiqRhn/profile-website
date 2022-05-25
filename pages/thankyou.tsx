import { Stack, Typography } from '@mui/material'
import React from 'react'

function ThankYouPage() {
  return (
    <div style={{marginTop: '90px'}}>
      <Stack> 
        <Typography variant='h3' align="center" marginBottom='30px'> 
          Thank You!
        </Typography>
        <Typography variant='h5'  align="center"> 
          You've successfully sent me an email.
        </Typography>
        <Typography variant='body1'  align="center" marginTop='10px'> 
          I'll reply back to you shortly. 
        </Typography>

      </Stack>
        
        </div>
  )
}

export default ThankYouPage