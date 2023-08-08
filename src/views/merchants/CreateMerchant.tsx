import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react-pro'

const CreateMerchant = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="nameInput">Merchant Name</CFormLabel>
                <CFormInput type="text" id="nameInput" placeholder="Name" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="emailInput">Email address</CFormLabel>
                <CFormInput
                  type="email"
                  id="emailInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="phoneInput">Phone</CFormLabel>
                <CFormInput
                  type="number"
                  id="phoneInput"
                  placeholder="01xxxxxxxxx"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="passwordInput">Password</CFormLabel>
                <CFormInput
                  type="password"
                  id="passwordInput"
                  placeholder="Type your passowrd"
                />
              </div>
              <div className="col-auto">
                <CButton type="submit">Create</CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CreateMerchant
