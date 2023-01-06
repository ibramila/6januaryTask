import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function LogIn() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      
    </HelmetProvider>
  )
}

export default LogIn