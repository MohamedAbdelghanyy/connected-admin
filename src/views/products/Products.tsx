import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react-pro'

import { cilFile } from '@coreui/icons'

import CIcon from '@coreui/icons-react'

const Products = (): JSX.Element => {
  const tableExample = [
    {
      image:
        'https://connectedapp20200512063146.azurewebsites.net/api/connectedadmin/GetImage/e390d7cb-e9e4-4a55-94e6-866b63547653.jpg',
      name: 'Villa at Al Sokhna',
      price: '2500000 EGP',
      seller: 'Soha El-Hadary',
      status: 'Reserved',
      date: 'Jun 11, 2021',
    },
    {
      image:
        'https://connectedapp20200512063146.azurewebsites.net/api/connectedadmin/GetImage/a5bc6b5f-f679-4307-8ab2-41de29d273ea.jpg',
      name: 'Mercedes GLA 200',
      price: '5000000 EGP',
      seller: 'Khaled Afify',
      status: 'Available',
      date: 'Aug 28, 2022',
    },
    {
      image:
        'https://connectedapp20200512063146.azurewebsites.net/api/connectedadmin/GetImage/e390d7cb-e9e4-4a55-94e6-866b63547653.jpg',
      name: 'Villa at Al Sokhna',
      price: '2500000 EGP',
      seller: 'Soha El-Hadary',
      status: 'Reserved',
      date: 'Jun 11, 2021',
    },
    {
      image:
        'https://connectedapp20200512063146.azurewebsites.net/api/connectedadmin/GetImage/a5bc6b5f-f679-4307-8ab2-41de29d273ea.jpg',
      name: 'Mercedes GLA 200',
      price: '5000000 EGP',
      seller: 'Khaled Afify',
      status: 'Available',
      date: 'Aug 28, 2022',
    },
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilFile} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Price
                    </CTableHeaderCell>
                    <CTableHeaderCell>Seller</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Status
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Date
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Options
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <img alt={item.name} src={item.image} width="70px" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.price}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.seller}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.status}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.date}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div
                          style={{
                            justifyContent: 'space-evenly',
                            width: '100%',
                            display: 'inline-flex',
                          }}
                        >
                          <CButton color="primary" variant="outline">
                            Edit
                          </CButton>
                          <CButton color="danger" variant="outline">
                            Delete
                          </CButton>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Products
