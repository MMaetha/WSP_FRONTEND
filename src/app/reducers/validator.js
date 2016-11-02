import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  onChangingPassword: false,
  onCreateAddress:false,
  onEditAddress : false,
  is_create_address_success : false,
  is_edit_address_success : false,
  onEditUser:false,
  is_edit_user_success : false,
  onUploadSlip : false,
  is_upload_success : false,
  onDeleteSlip : false,
  is_delete_slip_success :false
}
const validator = (state=initialState,action)=>{
  switch(action.type) {
    case 'CHANGE_PASSWORD_FAILURE':
      return Object.assign({}, state, {
          onChangingPassword : true
        })
    case 'CHANGE_PASSWORD_SUCCESS':
      return Object.assign({}, state, {
          onChangingPassword : true
        })
    case 'CREATE_ADDRESS_SUCCESS':
      return Object.assign({}, state, {
          onCreateAddress : true,
          is_create_address_success :true
        })
    case 'CREATE_ADDRESS_FAILURE':
      return Object.assign({}, state, {
          onCreateAddress : true,
          is_create_address_success:false
        })
    case 'UPDATE_ADDRESS_SUCCESS':
      return Object.assign({}, state, {
          onEditAddress : true,
          is_edit_address_success:true
        })
    case 'UPDATE_ADDRESS_FAILURE':
      return Object.assign({}, state, {
          onEditAddress : true,
          is_edit_address_success:false
        })
    case 'EDIT_USER_SUCCESS':
      return Object.assign({}, state, {
          onEditUser : true,
          is_edit_user_success:true
        })
    case 'EDIT_USER_FAILURE':
      return Object.assign({}, state, {
          onEditUser : true,
          is_edit_user_success:false
        })
    case 'DELETE_TRANSFER_SLIP_SUCCESS':
      return Object.assign({}, state, {
          onDeleteSlip : true,
          is_delete_slip_success:true
        })
    case 'DELETE_TRANSFER_SLIP_FAILURE':
      return Object.assign({}, state, {
          onDeleteSlip : true,
          is_delete_slip_success:false
        })
    case 'UPLOAD_TRANSFER_SLIP_SUCCESS':
      return Object.assign({}, state, {
          onUploadSlip : true,
          is_upload_success:true
        })
    case 'UPLOAD_TRANSFER_SLIP_FAILURE':
      return Object.assign({}, state, {
          onUploadSlip : true,
          is_upload_success:false
        })
    case 'RESET_VALIDATOR':
      return initialState
    default:
      return state;
  }
}
export default validator
