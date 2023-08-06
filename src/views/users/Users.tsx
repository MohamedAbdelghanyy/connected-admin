import React from 'react'

import avatar1 from '../../assets/images/avatars/1.jpg'
import avatar2 from '../../assets/images/avatars/2.jpg'
import avatar3 from '../../assets/images/avatars/3.jpg'
import avatar4 from '../../assets/images/avatars/4.jpg'
import avatar5 from '../../assets/images/avatars/5.jpg'
import avatar6 from '../../assets/images/avatars/6.jpg'
import {
  CAvatar,
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

import { cilPeople } from '@coreui/icons'

import CIcon from '@coreui/icons-react'

const Users = (): JSX.Element => {
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      name: 'Yiorgos Avraamu',
      email: 'test@test.com',
      phone: '01123456789',
      location: 'New Cairo',
      status: 'Activated',
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      name: 'Avram Tarasios',
      email: 'test@test.com',
      phone: '01123456789',
      location: 'New Cairo',
      status: 'Disabled',
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      name: 'Quintin Ed',
      email: 'test@test.com',
      phone: '01123456789',
      location: 'New Cairo',
      status: 'Verified',
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      name: 'Enéas Kwadwo',
      email: 'test@test.com',
      phone: '01123456789',
      location: 'New Cairo',
      status: 'Verified',
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      name: 'Agapetus Tadeáš',
      email: 'test@test.com',
      phone: '01123456789',
      location: 'New Cairo',
      status: 'Verified',
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      name: 'Friderik Dávid',
      email: 'test@test.com',
      phone: '01123456789',
      location: 'New Cairo',
      status: 'Activated',
      activity: 'Last week',
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
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Location
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Phone Number
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Status
                    </CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Options
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((user, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={user.avatar.src}
                          status={user.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{user.name}</div>
                        <div className="small text-medium-emphasis text-nowrap">
                          {user.email}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{user.phone}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{user.location}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{user.status}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">
                          Last login
                        </div>
                        <div className="fw-semibold text-nowrap">
                          {user.activity}
                        </div>
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

export default Users
