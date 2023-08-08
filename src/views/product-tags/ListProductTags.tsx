import React, { useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CCollapse,
  CRow,
  CSmartTable,
} from '@coreui/react-pro'

const ListProductTags = (): JSX.Element => {
  const [details, setDetails] = useState<number[]>([])
  const columns: {
    key: string
    _style?: { width: string }
    label?: string
    filter?: boolean
    sorter?: boolean
  }[] = [
    {
      key: 'tag_name',
      _style: { width: '33%' },
    },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]

  const toggleDetails = (index: number): void => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  type usersDataType = {
    id: number
    tag_name: string
  }

  const usersData: usersDataType[] = [
    {
      id: 0,
      tag_name: 'Exclusive',
    },
    {
      id: 1,
      tag_name: 'Luxury',
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
              scopedColumns={{
                show_details: (item: usersDataType) => {
                  return (
                    <td className="py-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          toggleDetails(item.id)
                        }}
                      >
                        {details.includes(item.id) ? 'Hide' : 'Options'}
                      </CButton>
                    </td>
                  )
                },
                details: (item) => {
                  return (
                    <CCollapse visible={details.includes(item.id)}>
                      <CCardBody>
                        <CButton size="sm" color="info">
                          Edit
                        </CButton>
                        <CButton size="sm" color="danger" className="ml-1">
                          Delete
                        </CButton>
                      </CCardBody>
                    </CCollapse>
                  )
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListProductTags
