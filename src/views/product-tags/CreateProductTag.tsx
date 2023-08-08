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

const CreateProductTag = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="nameInput">Tag Name</CFormLabel>
                <CFormInput type="text" id="nameInput" placeholder="Name" />
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

export default CreateProductTag
