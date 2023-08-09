import React, { ReactNode } from 'react'
import Statistics from './views/dashboard/Statistics'
import ListUsers from './views/dashboard/users/ListUsers'
import CreateUser from './views/dashboard/users/CreateUser'
import UsersActivityLog from './views/dashboard/users/UsersActivityLog'

import ListCustomers from './views/customers/ListCustomers'
import CreateCustomer from './views/customers/CreateCustomer'
import CustomersActivityLog from './views/customers/CustomersActivityLog'

import ListMerchants from './views/merchants/ListMerchants'
import CreateMerchant from './views/merchants/CreateMerchant'

import ListItems from './views/items/ListItems'
import CreateItem from './views/items/CreateItem'

import ListCategories from './views/categories/ListCategories'
import CreateCategory from './views/categories/CreateCategory'

import ListHighlights from './views/highlights/ListHighlights'
import CreateHighlight from './views/highlights/CreateHighlight'

import ListBrands from './views/brands/ListBrands'
import CreateBrand from './views/brands/CreateBrand'

import ListAds from './views/ads/ListAds'
import CreateAd from './views/ads/CreateAd'

import ListProductTags from './views/product-tags/ListProductTags'
import CreateProductTag from './views/product-tags/CreateProductTag'

import ListTopics from './views/topics/ListTopics'
import CreateTopic from './views/topics/CreateTopic'

import MostLikedItems from './views/reports/most-liked-items'
import MostWishlistedItems from './views/reports/most-wishlisted-items'

import DevLog from './views/developers/DevLog'
import TopActiveCustomers from './views/reports/top-active-customers'

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
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dashboard/statistics', name: 'Statistics', component: Statistics },
  { path: '/dashboard/users', name: 'Users', component: ListUsers },
  { path: '/dashboard/users/create', name: 'Create', component: CreateUser },
  {
    path: '/dashboard/users/activity-logs',
    name: 'Activity Log',
    component: UsersActivityLog,
  },
  { path: '/customers', name: 'Customers', component: ListCustomers },
  { path: '/customers/create', name: 'Create', component: CreateCustomer },
  {
    path: '/customers/activity-logs',
    name: 'Activity Logs',
    component: CustomersActivityLog,
  },
  { path: '/vendors', name: 'Merchants', component: ListMerchants },
  { path: '/vendors/create', name: 'Create', component: CreateMerchant },
  { path: '/items', name: 'Items', component: ListItems },
  { path: '/items/create', name: 'Create', component: CreateItem },
  { path: '/categories', name: 'Categories', component: ListCategories },
  { path: '/categories/create', name: 'Create', component: CreateCategory },
  { path: '/highlights', name: 'Highlights', component: ListHighlights },
  { path: '/highlights/create', name: 'Create', component: CreateHighlight },
  { path: '/brands', name: 'Brands', component: ListBrands },
  { path: '/brands/create', name: 'Create', component: CreateBrand },
  { path: '/ads', name: 'Ads', component: ListAds },
  { path: '/ads/create', name: 'Create', component: CreateAd },
  { path: '/tags', name: 'Product Tags', component: ListProductTags },
  { path: '/tags/create', name: 'Create', component: CreateProductTag },
  { path: '/topics', name: 'Topics', component: ListTopics },
  { path: '/topics/create', name: 'Create', component: CreateTopic },
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
    component: TopActiveCustomers,
  },
  {
    path: '/reports/most-liked-items',
    name: 'Most Liked Items',
    component: MostLikedItems,
  },
  {
    path: '/reports/most-wishlisted-items',
    name: 'Most Wishlisted Items',
    component: MostWishlistedItems,
  },
  { path: '/developers', name: 'Developers', component: Blank },
  { path: '/developers/health', name: 'Health', component: Blank },
  { path: '/developers/queue', name: 'Message Queue', component: Blank },
  { path: '/developers/logs', name: 'Logs', component: DevLog },
  { path: '/developers/cache', name: 'Cache', component: Blank },
  { path: '/developers/bugs', name: 'Bugs', component: Blank },
  { path: '/blank', name: 'Blank', component: Blank },
]

export default routes
