import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { CSpinner } from '@coreui/react-pro'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/login/Login'))
const Page404 = React.lazy(() => import('./views/page404/Page404'))

class App extends Component {
  render(): JSX.Element {
    return (
      <HashRouter>
        <Suspense fallback={<CSpinner color="primary" />}>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/404" element={<Page404 />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
