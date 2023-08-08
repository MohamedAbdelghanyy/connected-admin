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

const ListBrands = (): JSX.Element => {
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
      _style: { width: '10%' },
    },
    {
      key: 'name',
      _style: { width: '89%' },
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
    name: string
    image: string
  }

  const usersData: usersDataType[] = [
    {
      id: 0,
      name: 'BMW',
      image:
        'https://connectedapp20200512063146.azurewebsites.net/api/connectedadmin/GetImage/8e34fdcb-abcd-4f5d-9883-415de76bc4de.png',
    },
    {
      id: 1,
      name: 'Porsche',
      image:
        'https://connectedapp20200512063146.azurewebsites.net/api/connectedadmin/GetImage/e1171c8a-fa29-4dc1-9228-81ddebca3115.jpg',
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

export default ListBrands
