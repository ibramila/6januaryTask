import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Pricing() {
  return (
    <HelmetProvider>
    <Helmet>
      <title>Pricing</title>
    </Helmet>
  </HelmetProvider>
  )
}

export default Pricing