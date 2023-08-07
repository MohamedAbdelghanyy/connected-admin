import React, { ReactNode } from 'react'
import Statistics from './views/dashboard/statistics/Statistics'

export type route = {
  component?: ReactNode
  name?: string
  path?: string
  routes?: route[]
}

// examples
const Dashboard = React.lazy(
  () => import('./views/dashboard/dashboard/Dashboard'),
)
const Blank = React.lazy(() => import('./views/blank/Blank'))

/**
 * See {@link https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config GitHub}.
 */
const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dashboard/statistics', name: 'Statistics', component: Statistics },
  { path: '/dashboard/users', name: 'Users', component: Blank },
  { path: '/dashboard/users/create', name: 'Create', component: Blank },
  {
    path: '/dashboard/users/activity-logs',
    name: 'Activity Log',
    component: Blank,
  },
  { path: '/customers', name: 'Customers', component: Blank },
  { path: '/customers/create', name: 'Create', component: Blank },
  { path: '/customers/activity-logs', name: 'Activity Logs', component: Blank },
  { path: '/vendors', name: 'Merchants', component: Blank },
  { path: '/vendors/create', name: 'Create', component: Blank },
  { path: '/items', name: 'Items', component: Blank },
  { path: '/items/create', name: 'Create', component: Blank },
  { path: '/categories', name: 'Categories', component: Blank },
  { path: '/categories/create', name: 'Create', component: Blank },
  { path: '/highlights', name: 'Highlights', component: Blank },
  { path: '/highlights/create', name: 'Create', component: Blank },
  { path: '/brands', name: 'Brands', component: Blank },
  { path: '/brands/create', name: 'Create', component: Blank },
  { path: '/ads', name: 'Ads', component: Blank },
  { path: '/ads/create', name: 'Create', component: Blank },
  { path: '/tags', name: 'Product Tags', component: Blank },
  { path: '/tags/create', name: 'Create', component: Blank },
  { path: '/topics', name: 'Topics', component: Blank },
  { path: '/topics/create', name: 'Create', component: Blank },
  { path: '/notifications', name: 'Notifications', component: Blank },
  {
    path: '/notifications/push',
    name: 'Push Notifications',
    component: Blank,
  },
  {
    path: '/notifications/email',
    name: 'Email Campaigns',
    component: Blank,
  },
  {
    path: '/notifications/sms',
    name: 'SMS Campaigns',
    component: Blank,
  },
  { path: '/integrations', name: 'Integrations', component: Blank },
  { path: '/integrations/whatsapp', name: 'Whatsapp', component: Blank },
  { path: '/sales', name: 'Sales', component: Blank },
  { path: '/sales/leads', name: 'Leads', component: Blank },
  { path: '/sales/whatsapp', name: 'Whatsapp', component: Blank },
  { path: '/reports', name: 'Reports', component: Blank },
  {
    path: '/reports/top-active-customers',
    name: 'Top Active Customers',
    component: Blank,
  },
  {
    path: '/reports/most-liked-items',
    name: 'Most Liked Items',
    component: Blank,
  },
  {
    path: '/reports/most-wishlisted-items',
    name: 'Most Wishlisted Items',
    component: Blank,
  },
  { path: '/developers', name: 'Developers', component: Blank },
  { path: '/developers/health', name: 'Health', component: Blank },
  { path: '/developers/queue', name: 'Message Queue', component: Blank },
  { path: '/developers/logs', name: 'Logs', component: Blank },
  { path: '/developers/cache', name: 'Cache', component: Blank },
  { path: '/developers/bugs', name: 'Bugs', component: Blank },
  { path: '/blank', name: 'Blank', component: Blank },
]

export default routes
