import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'reactstrap'
import { setAuthedUser } from '../actions/authedUser'
import { handleTemplate } from '../actions/template'
import templateBootstrap from '../utils/template'

class UsersFormSelect extends Component {
  handleChange= (event) => {
    event.preventDefault()
    const { dispatch } = this.props,
      value = event.target.value
    value && dispatch(setAuthedUser(value))
    value && dispatch(handleTemplate(templateBootstrap()))
  }

  render() {
    const { users } = this.props
    return (
      <div className="usersFormSelect">
        <Input onChange={this.handleChange} type="select">
          <option value="null">Select the login</option>
          { users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
      )) }
        </Input>
      </div>
    )
  }
}
function mapToStateProps({ users }) {
  return {
    users: Object.values(users),
  }
}
export default connect(mapToStateProps)(UsersFormSelect)
