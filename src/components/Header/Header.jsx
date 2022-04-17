import React, { useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { auth, logout } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  const { user, loading, error } = useAuthState(auth)
  const history = useHistory()

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) {
      history.push('/home')
    }
    console.log('user logged in successfully')
  }, [user, loading])

  if (error) return <pre>{error.message}</pre>

  return (
    <>
      <div className="wrapper__img">
        <Navbar expand="lg" sticky="top" className="navbar__wrapper">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/assets/logo.png"
                async
                alt="nav-logo"
                className="nav__logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home" className="nav__link">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="nav__link">
                  About
                </Nav.Link>
                <Nav.Link href="#link" className="nav__link">
                  Contact
                </Nav.Link>
                <Nav.Link href="#link" className="nav__link">
                  Careers
                </Nav.Link>
                <Nav.Link href="#link" className="nav__link">
                  Buy Now
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Button onClick={logout} className="signout__btn">
                  Sign Out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
