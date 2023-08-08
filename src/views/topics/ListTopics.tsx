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

const ListTopics = (): JSX.Element => {
  const [details, setDetails] = useState<number[]>([])
  const columns: {
    key: string
    _style?: { width: string }
    label?: string
    filter?: boolean
    sorter?: boolean
  }[] = [
    {
      key: 'image',
      _style: { width: '20%' },
    },
    {
      key: 'name',
      _style: { width: '20%' },
    },
    { key: 'description' },
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
    name: string
    description: string
    image: string
  }

  const usersData: usersDataType[] = [
    {
      id: 0,
      name: "Here's why the second-hand-luxury market is booming in Egypt",
      description:
        'The Egyptian and world economy is going through turbulent times, and as economic unrest poses multiple threats, it still creates new opportunities; One of them being the increasingly growing second-hand luxury market in Egypt.',
      image: 'https://connectedapp.com/static/media/blog_0.4923c2f4.jpg',
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
                image: (item: usersDataType) => (
                  <td>
                    <img src={item.image} alt={item.name} width={'100%'} />
                  </td>
                ),
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

export default ListTopics
