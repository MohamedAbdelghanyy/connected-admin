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

const CreateTopic = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="nameInput">Topic Name</CFormLabel>
                <CFormInput type="text" id="nameInput" placeholder="Name" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="descInput">Description</CFormLabel>
                <CFormInput
                  type="text"
                  id="descInput"
                  placeholder="Description"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Image</CFormLabel>
                <CFormInput type="file" id="formFile" />
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

export default CreateTopic
