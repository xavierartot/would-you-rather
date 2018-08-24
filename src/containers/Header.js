import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { unAuthedUser } from '../actions/unAuthedUser'
import { withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Popover, PopoverHeader, PopoverBody,
} from 'reactstrap'

class Header extends Component {
    state = {
      isOpen: false,
      popoverOpen: false,
    }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  togglePopHover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
  }
  logout = (event) => {
    const { dispatch } = this.props
    event.preventDefault()
    dispatch(unAuthedUser(null))// logout

    console.log(this.props)
    // todo: Redirect to parent Tweet.
    this.props.history.push('/')
  }
  render() {
    const { user, color ,background } = this.props
    const { name, avatarURL, id } = user
    // console.log(user)
    return (
      <div className="Header mb-3">
        <Navbar color="light" expand="md" light>
          <NavbarBrand className={`text-${background}`} href="/">Game</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${background}`} tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${background}`} tag={Link} to="/leaderboard">
                  Leader Board
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${background}`} tag={Link} to="/add">
                  New WYR
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={`text-${background}`} onClick={this.logout} to="/">
                  <Button className={`btn-${background}`}>logout</Button>
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${background}`} id="Popover1" onClick={this.togglePopHover}> name:
                  <span className="font-weight-bold"> {user.name}</span>
                </NavLink>
                <Popover isOpen={this.state.popoverOpen} placement="bottom" target="Popover1" toggle={this.togglePopHover}>
                  <PopoverHeader>login as :{id}</PopoverHeader>
                  <PopoverBody className="popover-body d-flex justify-content-around align-items-center">
                    <img alt={id} className="rounded-circle mr-2" src={avatarURL} style={{ height: '40px', width: '40px' }} />
                    <p className="mb-0">name: {name}</p>
                  </PopoverBody>
                </Popover>
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
  console.log(template.color )
  return {
    user,
    color: template.color,
    background: template.background,
  }
}
export default withRouter(connect(mapStateToProps)(Header))
