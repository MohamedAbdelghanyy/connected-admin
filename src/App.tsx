import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CSpinner } from '@coreui/react-pro'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/login/Login'))

class App extends Component {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <Suspense fallback={<CSpinner color="primary" />}>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
