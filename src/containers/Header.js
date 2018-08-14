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
} from 'reactstrap'

class Header extends Component {
  logout = (event) => {
    const { dispatch } = this.props
    event.preventDefault()
    dispatch(unAuthedUser(null))// logout
  }
  render() {
    const { authedUser } = this.props
    return (
      <div className="Header">
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Game: Would You Rather</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.logout} to="/home">logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>name: { authedUser} </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(Header)
