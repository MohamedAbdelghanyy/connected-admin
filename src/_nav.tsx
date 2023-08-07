import React from 'react'
import {
  cilSpeedometer,
  cilPuzzle,
  cilGrid,
  cilGraph,
  cilPeople,
  cilList,
  cilPlus,
  cibWhatsapp,
  cilBarChart,
  cilColumns,
  cilJustifyCenter,
  cilHighligt,
  cil3d,
  cilBolt,
  cilTags,
  cilSpeech,
  cilAudio,
  cilAt,
  cilAsteriskCircle,
  cilSignalCellular4,
  cilSpreadsheet,
  cilHeart,
  cilThumbUp,
  cilDollar,
  cilListNumbered,
  cilBug,
  cilSave,
  cilLineWeight,
  cilCode,
  cilBorderAll,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'
import { ElementType } from 'react'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  component: string | ElementType
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  to: string
  items?: NavItem[]
}

const _nav = [
  {
    component: CNavTitle,
    name: 'Dashboard',
    to: '/',
  },
  {
    component: CNavGroup,
    name: 'Dashboard',
    to: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilBorderAll} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Statistics',
        to: '/dashboard/statistics',
        icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Customers',
    to: '/',
  },
  {
    component: CNavGroup,
    name: 'Customers',
    to: '/',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/customers',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/customers/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Activity Logs',
        to: '/customers/activity-logs',
        icon: <CIcon icon={cilJustifyCenter} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Merchants',
    to: '/',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/vendors',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/vendors/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Catalog',
    to: '/',
  },
  {
    component: CNavGroup,
    name: 'Items',
    to: '/',
    icon: <CIcon icon={cilColumns} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/items',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/items/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Categories',
    to: '/',
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/categories',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/categories/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Highlights',
    to: '/',
    icon: <CIcon icon={cilHighligt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/highlights',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/highlights/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Brands',
    to: '/',
    icon: <CIcon icon={cil3d} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/brands',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/brands/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Ads',
    to: '/',
    icon: <CIcon icon={cilBolt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/ads',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/ads/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Product Tags',
    to: '/',
    icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/tags',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/tags/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Topics',
    to: '/',
    icon: <CIcon icon={cilSpeech} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/topics',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/topics/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Marketing',
    to: '/',
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    to: '/',
    icon: <CIcon icon={cilAudio} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Push Notifications',
        to: '/notifications/push',
        icon: <CIcon icon={cilAsteriskCircle} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Email Campaigns',
        to: '/notifications/email',
        icon: <CIcon icon={cilAt} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'SMS Campaigns',
        to: '/notifications/sms',
        icon: <CIcon icon={cilSignalCellular4} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Integrations',
    to: '/',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Whatsapp',
        to: '/integrations/whatsapp',
        icon: <CIcon icon={cibWhatsapp} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Sales',
    to: '/',
  },
  {
    component: CNavGroup,
    name: 'Sales',
    to: '/',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Leads',
        to: '/sales/leads',
        icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Whatsapp',
        to: '/sales/whatsapp',
        icon: <CIcon icon={cibWhatsapp} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Reports',
    to: '/',
  },
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Top Active Customers',
        to: '/reports/top-active-customers',
        icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Most Liked Items',
        to: '/reports/most-liked-items',
        icon: <CIcon icon={cilThumbUp} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Most Wishlisted Items',
        to: '/reports/most-wishlisted-items',
        icon: <CIcon icon={cilHeart} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Internal System',
    to: '/',
  },
  {
    component: CNavGroup,
    name: 'Dashboard Users',
    to: '/',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List',
        to: '/dashboard/users',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create',
        to: '/dashboard/users/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Activity Log',
        to: '/dashboard/users/activity-logs',
        icon: <CIcon icon={cilJustifyCenter} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Developers',
    to: '/',
    icon: <CIcon icon={cilCode} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Health',
        to: '/developers/health',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Message Queue',
        to: '/developers/queue',
        icon: <CIcon icon={cilLineWeight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Logs',
        to: '/developers/logs',
        icon: <CIcon icon={cilJustifyCenter} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Cache',
        to: '/developers/cache',
        icon: <CIcon icon={cilSave} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Bugs',
        to: '/developers/bugs',
        icon: <CIcon icon={cilBug} customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
