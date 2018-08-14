import React from 'react'
import { connect } from 'react-redux'
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap'
import UsersFormSelect from '../components/UsersFormSelect'

class ModalExample extends React.Component {
  state = {
    modal: true,
    keyboard: false,
  }
  loginUser = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>Login to The Game</ModalHeader>
          <ModalBody>
            <p>Choose Your User</p>
            <UsersFormSelect />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
function mapToStateProps({ authedUsers }) {
  return {
    authedUsers,
  }
}
export default connect(mapToStateProps)(ModalExample)
