import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout,loadUserdata} from '../../../../actions/UserAction'
import {Modal,Button} from 'react-materialize'
import MemberInfo from './MemberInfo'
import ChangePasswordPanel from './ChangePasswordPanel'
import AddressInfo from './AddressInfo'
class MemberModal extends Component {
  constructor(props){
    super(props)

    this.userdata = {
      username:"",
      first_name:"",
      last_name:"",
      email:""
    }
  }

  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    this.props.loadUserdata(localStorage.token)
    console.log('user',this.userdata);

  }
  shouldComponentUpdate(nextProps){
    return this.props.user !== nextProps.user
  }

  onLogout(){
    this.props.onLogout()
  }
  render() {
    var margin = {
      paddingRight: "15px",
      paddingLeft:"15px"
    }
    this.userdata = this.props.user.userdata===null?this.userdata:this.props.user.userdata
    return (
      <Modal
        header='User Control Panel'
        trigger={
          <span className="waves-effect waves-light" style={margin}>Welcome, {this.userdata.username}</span>
        }
        >
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header active">User Info</div>
            <div className="collapsible-body"><MemberInfo
              username={this.userdata.username}
              first_name={this.userdata.first_name}
              last_name={this.userdata.last_name}
              email={this.userdata.email}
              /></div>
          </li>
          <li>
            <div className="collapsible-header">Change Password</div>
            <div className="collapsible-body"><ChangePasswordPanel/></div>
          </li>
          <li>
            <div className="collapsible-header">Manage Address</div>
            <div className="collapsible-body"><AddressInfo/></div>
          </li>
        </ul>
        <div className="row center">
          <Button waves="light" className="modal-close" onClick={
             (e)=>this.onLogout()
           }>Logout</Button>
         <Button waves="light" >Admin</Button>
        </div>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logout())
    },
    loadUserdata:(token)=>{
      dispatch(loadUserdata(token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberModal)
