import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { auth, logout, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import { query, collection, getDocs, where } from 'firebase/firestore'
import './Header.scss'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Header() {
  const [name, setName] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const history = useHistory()

  const fetchUser = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()

      setName(data?.name)
      toast.success('User Registered Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    if (loading) return
    if (!user) {
      return history.push('/')
    } else if (user) {
      toast.success('User Logged In Successfully')
    }
    fetchUser()
  }, [user, loading])

  if (error) return <pre>{error.message}</pre>

  return (
    <>
      <div className="wrapper__img">
        <ToastContainer
          position="top-right"
          closeOnClick
          theme="colored"
          limit={1}
        />
        <Navbar expand="lg" sticky="top" className="navbar__wrapper">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/assets/logo.png"
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
                <p className="text-white mt-3 m-1">{user?.email}</p>
                <div className="signout__wrapper">
                  <img
                    src={user?.photoURL}
                    alt={user?.name}
                    className="user__avatar"
                  />
                  <div className="avatar__dropdown">
                    <span onClick={logout}>Sign out</span>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
