import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { unAuthedUser } from '../actions/unAuthedUser'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap'

class Header extends Component {
  logout = (event) => {
    const { dispatch } = this.props
    event.preventDefault()
    dispatch(unAuthedUser(null))// logout
  }
  render() {
    const { authedUser, user } = this.props
    console.log(user)
    return (
      <div className="Header mb-3">
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Game: Would You Rather</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.logout} to="/home">
                  <Button>logout</Button>
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink >login name:
                  <span className="font-weight-bold">{user.name}</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
function mapStateToProps({ authedUser, users }) {
  const user = { ...users[authedUser] }
  return {
    authedUser,
    user,
  }
}
export default connect(mapStateToProps)(Header)
