import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {CART_ENDPOINT} from '../constants/endpoints'
import {loadOrderList} from './OrderAction'
import {loadItemLines} from './ItemLineAction'
// Add Item to cart
export const addItemtoCard = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: CART_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'ADD_ITEM_TO_CART_REQUEST',
          {
            type: 'ADD_ITEM_TO_CART_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadCartList(token))
                return data
              })
            }
          },
          'ADD_ITEM_TO_CART_FAILURE'
        ]
      }
    }
  )
)
//View Cart list
export const loadCartList = (token) => (
  {[CALL_API]: {
    endpoint: CART_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_CART_LIST_REQUEST', 'LOAD_CART_LIST_SUCCESS', 'LOAD_CART_LIST_FAILURE']
  }}
)


//Edit Item in cart
export const updateCart = (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: CART_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_CART_REQUEST',
          {
            type: 'UPDATE_CART_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadCartList(token))
                return data
              })
            }
          },
          'UPDATE_CART_FAILURE'
        ]
      }
    }
  )
)
// Delete item form cart
export const deleteItemInCart = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
         endpoint: CART_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'DELETE',
        types: [
          'DELETE_CART_REQUEST',
          {
            type: 'DELETE_CART_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadCartList(token))
                return data
              })
            }
          },
          'DELETE_CART_FAILURE'
        ]
      }
    }
  )
)
// export const deleteItemInCart = (id,token)=> (
//   {[CALL_API]: {
//     endpoint: CART_ENDPOINT+id+'/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization':'Token '+token
//     },
//     method: 'DELETE',
//     types: ['DELETE_CART_REQUEST', {
//       type:'DELETE_CART_SUCCESS',
//       dispatch(loadCartList(token))
//
//     }, 'DELETE_CART_FAILURE']
//   }}
// )
// Pay item in cart
export const payItemInCart = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: CART_ENDPOINT+'pay/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'PAY_CART_REQUEST',
          {
            type: 'PAY_CART_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadItemLines(token))
                dispatch(loadCartList(token))
                dispatch(loadOrderList(token))
                return data
              })
            }
          },
          'PAY_CART_FAILURE'
        ]
      }
    }
  )
)
