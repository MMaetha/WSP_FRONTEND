import React, { Component } from 'react'
import {Row,Input,Col,Button} from 'react-materialize'
import {connect} from 'react-redux'
import {editUser} from '../../../../actions/UserAction'
import {resetValidator,loadValidator} from '../../../../actions/ValidatorAction'

class MemberInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {is_edit:false};
    this.handleEdit = this.changeState.bind(this,true)
    this.handleSave = this.onSave.bind(this)
  }
  changeState(value){
    this.setState({is_edit:value})
  }
  onSave(e) {
    e.preventDefault()
    let first_name = this.refs.form.first_name.value
    let last_name = this.refs.form.last_name.value
    let email = this.refs.form.email.value
    if (email.split('@').length!=2){
      Materialize.toast('Invalid form of email', 4000,'light-blue')
    }else {
      let token = this.props.user.accessToken
      let id = this.props.user.userdata.id
      let data = {
        first_name: first_name,
        last_name: last_name,
        email : email
      }
      this.props.editUser(data,id,token)
    }
  }
  shouldComponentUpdate(nextProps){
    return this.props.user!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onEditUser){
      if (this.props.validator.is_edit_user_success){
        Materialize.toast(this.props.user.username+' is edited!', 4000,'light-blue')
        this.props.resetValidator()
        this.changeState(false)
      }else {
        Materialize.toast(this.props.user.username+' is edited failed!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  componentDidMount(){
    this.props.onChange()
    this.props.loadValidator()
  }
  render(){
    return (
      <div>
        <br/>
        <Row><Col s={12} ><span className="medium boldtext">Username : </span>{this.props.username}</Col></Row>
        <br/>
        {!this.state.is_edit　?
          <div>
            <Row>
              <Col s={12} m={6}><span className="medium boldtext">Firstname : </span>{this.props.first_name}</Col>
              <Col s={12} m={6}><span className="medium boldtext">Lastname : </span>{this.props.last_name}</Col>
            </Row>
            <br/>
            <Row>
              <Col s={12} ><span className="medium boldtext">Email : </span>{this.props.email}</Col>
            </Row>
            <br/>
            <Row className="right-align"><Col s={12}><Button waves="light" onClick={this.handleEdit}>Edit</Button></Col></Row>
            <br/>
          </div> :
          <form ref="form">
            <Row>
              <Input type="text" name="first_name" label="Firstname" defaultValue={this.props.first_name} s={12} m={6} ref="first_name"></Input>
              <Input type="text" name="last_name" label="Lastname" defaultValue={this.props.last_name} s={12} m={6} ref="last_name"></Input>
            </Row>
            <br/>
            <Row><Input type="email" name="email" label="Email" defaultValue={this.props.email} s={12} ref="email"></Input></Row>
            <br/>
            <Row className="right-align"><Col s={12}><Button waves="light" onClick={(e)=>this.onSave(e)}>Save</Button></Col></Row>
            <br/>
          </form>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (data,id,token) => {
      dispatch(editUser(data,id,token))
    },
    loadValidator:()=>{
      dispatch(loadValidator())
    },
    resetValidator:()=>{
      dispatch(resetValidator())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberInfo)
