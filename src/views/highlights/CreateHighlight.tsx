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

const CreateHighlight = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="idInput">Item ID</CFormLabel>
                <CFormInput type="text" id="idInput" placeholder="ID" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="fromInput">Valid From</CFormLabel>
                <CFormInput
                  type="text"
                  id="fromInput"
                  placeholder="From Date"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="toInput">Valid To</CFormLabel>
                <CFormInput type="text" id="toInput" placeholder=" To Date" />
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

export default CreateHighlight
