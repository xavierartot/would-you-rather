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
        <Modal className={this.props.className} isOpen={this.state.modal}>
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
function mapToStateProps({ users }) {
  return {
    users: Object.values(users),
  }
}
export default connect(mapToStateProps)(ModalExample)
