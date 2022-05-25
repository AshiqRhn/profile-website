import { Typography } from '@mui/material'
import React from 'react'

const thankyou = () => {
  return (
    <div style={{marginTop: '90px'}}>
      <Typography variant="h2" align="center" marginBottom={5}>
        Thank You!
      </Typography>
      <Typography variant="h5" align="center"  marginBottom={1}>
       You've successfully sent me an email.
      </Typography>
      <Typography variant="inherit" align="center">
      I'll reply back to you shortly.
      </Typography>
     
    </div>
  )
}

export default thankyou

// import React from 'react'

// function ThankYouPage() {
//   return (
//     <div style={{marginTop: '90px', textAlign: 'center', fontSize: '20px'}}>
//       <h2>Thank You! You've successfully sent me an email.</h2>
      
//       <p> I'll reply back to you shortly.</p>      
//         </div>
//   )
// }

// export default ThankYouPage