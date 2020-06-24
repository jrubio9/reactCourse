import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SingedInMenu from '../Menus/SingedInMenu';

class NavBar extends Component {
  state = {
    authenticated: false
  }

  // Methods

  handleSignIn = () => this.setState({authenticated: true});
  handleSignOut = () => {
    this.setState({authenticated: false});
    this.props.history.push('/');
  }

    render() {
      const {authenticated} = this.state;
      return (
                <Menu inverted fixed="top">
                  <Container>
                    <Menu.Item as={NavLink} exact to='/' header>
                      <img src="/assets/logo.png" alt="logo" />
                      Re-vents
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/events' name="Events" />
                    <Menu.Item as={NavLink} to='/people' name="People" />
                    <Menu.Item>
                      <Button 
                        as={Link} 
                        to='/createEvent' 
                        floated="right" 
                        positive 
                        inverted 
                        content="Create Event" />
                    </Menu.Item>
                    {authenticated ? 
                    (<SingedInMenu signOut={this.handleSignOut} />) 
                    : 
                    (<SignedOutMenu signIn={this.handleSignIn} />)}
                  </Container>
                </Menu>
      )
    }
}
// El withRouter el que fa és retornar component amb "Extra Powers", podent accedir als Props
export default withRouter(NavBar);