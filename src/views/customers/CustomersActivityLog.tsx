import React from 'react'

import { CCard, CCardBody, CCol, CRow, CSmartTable } from '@coreui/react-pro'

const CustomersActivityLog = (): JSX.Element => {
  const columns: {
    key: string
    _style?: { width: string }
    label?: string
    filter?: boolean
    sorter?: boolean
  }[] = [
    {
      key: 'user_id',
      _style: { width: '10%' },
    },
    { key: 'log_details', _style: { width: '70%' } },
    { key: 'time', _style: { width: '20%' } },
  ]

  type usersDataType = {
    id: number
    user_id: number
    log_details: string
    time: string
  }

  const usersData: usersDataType[] = [
    {
      id: 0,
      user_id: 109851,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 1,
      user_id: 25,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 2,
      user_id: 18,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 3,
      user_id: 955,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 4,
      user_id: 19263,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 5,
      user_id: 20,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 6,
      user_id: 1920,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 7,
      user_id: 372102,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 8,
      user_id: 6140,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 9,
      user_id: 15088,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 10,
      user_id: 1122,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 11,
      user_id: 9733,
      log_details: 'This is activity log details.',
      time: '2018/01/01 10:10 PM',
    },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CSmartTable
              sorterValue={{ column: 'id', state: 'desc' }}
              clickableRows
              tableProps={{
                striped: true,
                hover: true,
              }}
              activePage={3}
              footer
              items={usersData}
              columns={columns}
              columnFilter
              tableFilter
              cleaner
              itemsPerPageSelect
              itemsPerPage={5}
              columnSorter
              pagination
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CustomersActivityLog
