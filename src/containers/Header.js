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
    const { authedUser, user, color } = this.props
    console.log(user)
    return (
      <div className="Header mb-3">
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Game: Would You Rather</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${color}`} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${color}`} to="/leaderboard">
                  Leader Board
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${color}`} to="/add">
                  New WYR
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={`text-${color}`} onClick={this.logout} to="/home">
                  <Button className={`btn-${color}`}>logout</Button>
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${color}`}> name:
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
function mapStateToProps({ authedUser, users, template }) {
  const user = { ...users[authedUser] }
  return {
    authedUser,
    user,
    color: template.color,
  }
}
export default connect(mapStateToProps)(Header)
