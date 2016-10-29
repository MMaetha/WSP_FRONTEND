import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Row,Col,Button,Table} from 'react-materialize'
// import '../../../../assets/scss/admin.scss'

class OrderItem extends Component {
  constructor(props){
    super(props)
  }

  getAddressbyID(id){
    let addresstemp = {address_number:'',country:'',distinct:'',id:'',username:'',province:'',is_active:false,road:'',sub_distinct:'',user:'',village:'',zipcode:''}
    this.props.admin.address.forEach((address)=>{
      if(address.user === id)
      addresstemp = address
    })
    return addresstemp
  }

  getPaymentbyID(id){
    let paymenttemp = {id:'',country:'',type:'',name:'',is_active:false}
    this.props.admin.method.forEach((payment)=>{
      if(payment.id === id)
      paymenttemp = payment
    })
    return paymenttemp
  }

  render() {
    let Listitem = this.props.admin.item_line.filter((itemline)=>parseInt(itemline.order)===this.props.order.id)
    let price = 0
    let quantity = 0
    Listitem.forEach((item)=>{
      quantity+=item.quantity
      price+=this.props.admin.product.find((product)=>parseInt(item.product)===product.id).price*item.quantity
    })
    return(
      <li className="white">
        <div className="collapsible-header">
            OrderID:&nbsp;&nbsp;{this.props.order.id} &nbsp;&nbsp;&nbsp;&nbsp; Name: {this.props.userorder.first_name}&nbsp;&nbsp;{this.props.userorder.last_name}
        </div>
        <div className="collapsible-body white">
          <Row>
            <Col s={12} m={12}>
              Payment Method : {this.getPaymentbyID(this.props.order.user).name}
            </Col>
          </Row>
          <Row>
            <Col s={12} m={8}>
              Address :&nbsp;&nbsp;
              {this.getAddressbyID(this.props.order.user).address_number} {this.getAddressbyID(this.props.order.user).village} {this.getAddressbyID(this.props.order.user).road} {this.getAddressbyID(this.props.order.user).sub_distinct} {this.getAddressbyID(this.props.order.user).distinct}
              {this.getAddressbyID(this.props.order.user).province} {this.getAddressbyID(this.props.order.user).country} {this.getAddressbyID(this.props.order.user).zipcode}
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              <Table className="center">
                <tr>
                  <th data-field="id">Product</th>
                  <th data-field="name">Quantity</th>
                  <th data-field="price">Price</th>
                </tr>
                <tbody>
                  {Listitem.map(
                    (item)=>(
                      <tr>
                        <td>{this.props.admin.product.find((product)=>parseInt(item.product)==product.id).name}</td>
                        <td>{item.quantity}</td>
                        <td>{(this.props.admin.product.find((product)=>parseInt(item.product)==product.id).price)*item.quantity}</td>
                      </tr>
                    )
                  )
                  }
                  <tr className="bold bold-text">
                    <td>Total</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderItem)
