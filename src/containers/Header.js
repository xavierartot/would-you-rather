import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { unAuthedUser } from '../actions/unAuthedUser'
import { withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Popover,
  PopoverHeader,
  PopoverBody,
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
    const { user, background, color } = this.props
    const { name, avatarURL, id } = user
    // console.log(user)
    return (
      <div className="Header mb-3">
        <Navbar color="light" expand="md" light>
          <NavLink className={`text-${background} navbar-brand`} tag={Link} to="/">
            Game
          </NavLink>
          <NavbarToggler onClick={this.toggle} style={{ borderColor: `${background}` }} />
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
                <NavLink className={`${color}`} onClick={this.logout} to="/">
                  <button className={`btn btn-${background}`}>logout</button>
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className={`text-${background}`} id="Popover1" onClick={this.togglePopHover}> name:
                  <span className="font-weight-bold"> {user.name}</span>
                </NavLink>
                <Popover isOpen={this.state.popoverOpen} placement="bottom" target="Popover1" toggle={this.togglePopHover}>
                  <PopoverHeader className={`bg-${background} ${color}`}>login as :{id}</PopoverHeader>
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
  // console.log(template.color )
  return {
    user,
    color: template.color,
    background: template.background,
  }
}
export default withRouter(connect(mapStateToProps)(Header))
