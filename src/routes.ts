import React, { ReactNode } from 'react'
import Users from './views/users/Users'
import Products from './views/products/Products'
import Categories from './views/categories/Categories'

export type route = {
  component?: ReactNode
  name?: string
  path?: string
  routes?: route[]
}

// examples
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Blank = React.lazy(() => import('./views/blank/Blank'))

/**
 * See {@link https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config GitHub}.
 */
const routes = [
  { path: '/', name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', name: 'Users', component: Users },
  { path: '/products', name: 'Products', component: Products },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/blank', name: 'Blank', component: Blank },
]

export default routes
