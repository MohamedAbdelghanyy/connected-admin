import React from 'react'
import { CFooter } from '@coreui/react-pro'

const AppFooter = () => {
  return (
    <CFooter
      style={{
        justifyContent: 'center',
      }}
    >
      <div>
        <span>&copy; 2023 Connected VIP Assistant.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
