import React, { Component } from 'react'

export default class MemberModal extends Component {
  render() {
    return (
      <Modal
        header='Modal Header'
        trigger={
          Welcome, {this.props.firstname} {this.props.lastname}
        }
        >
        <div class="collection">
          <a href="#!" class="collection-item">Alvin</a>
          <a href="#!" class="collection-item active">Alvin</a>
          <a href="#!" class="collection-item">Alvin</a>
          <a href="#!" class="collection-item">Alvin</a>
        </div>
      </Modal>
    )
  }
}
