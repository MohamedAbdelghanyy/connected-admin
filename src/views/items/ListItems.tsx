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

const ListItems = (): JSX.Element => {
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
    { key: 'price' },
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
    price: number
    image: string
  }

  const usersData: usersDataType[] = [
    {
      id: 0,
      name: 'Twin house at Almaza Bay',
      description: '4 Bedrooms, 50 Bathrooms 1000sqm',
      price: 1000,
      image:
        'https://connectedapp20200512063146.azurewebsites.net/api/connectedadmin/GetImage/b42139a8-c5ab-434d-a661-854d3784b307.jpg',
    },
    {
      id: 1,
      name: 'Porsche Macan GTS',
      description:
        'Displacement: 2.9 L/177. Horsepower: 434 @ 5700. Torque: 405 @ 1900. Acceleration: 0 - 100 km/h in 4.5 sec. Sport Chrono Package incl. mode switch. Comfort seats in front. BOSE® Surround Sound System.',
      price: 1000,
      image:
        'https://connectedapp20200512063146.azurewebsites.net/api/connectedadmin/GetImage/a578816c-ec4c-4432-8523-141da809d8db.jpg',
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
                price: (item: usersDataType) => <td>{item.price} EGP</td>,
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

export default ListItems
