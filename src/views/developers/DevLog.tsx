import React from 'react'

import { CCard, CCardBody, CCol, CRow, CSmartTable } from '@coreui/react-pro'

const DevLog = (): JSX.Element => {
  const columns: {
    key: string
    _style?: { width: string }
    label?: string
    filter?: boolean
    sorter?: boolean
  }[] = [
    {
      key: 'title',
      _style: { width: '10%' },
    },
    { key: 'details', _style: { width: '70%' } },
    { key: 'time', _style: { width: '20%' } },
  ]

  type usersDataType = {
    id: number
    title: string
    details: string
    time: string
  }

  const usersData: usersDataType[] = [
    {
      id: 0,
      title: 'Server',
      details: 'This is log details.',
      time: '2018/01/01 10:10 PM',
    },
    {
      id: 1,
      title: 'Server',
      details: 'This is log details.',
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

export default DevLog
