import React, { useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { auth, signInWithGoogle, logout } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'

export default function Login() {
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
    <div className="wrapper__img">
      <Container>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" />
          </div>
          <label htmlFor="password">password</label>
          <input type="password" />
          <Button>Sign In</Button>
          or
          <Button onClick={signInWithGoogle}>SignIn with Google</Button>
        </form>
      </Container>
    </div>
  )
}
