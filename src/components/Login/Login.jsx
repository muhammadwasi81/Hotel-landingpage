import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, signInWithGoogle } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Container } from 'react-bootstrap'
import './Login.scss'

export default function Login() {
  const [user, loading, error] = useAuthState(auth)
  const history = useHistory()

  useEffect(() => {
    if (loading) return
    if (user) return history.push('/home')
  }, [user, loading])

  if (error) return <pre>{error.message}</pre>

  return (
    <div className="login__wrapper">
      <Container>
        <div className="login__container">
          <button
            onClick={signInWithGoogle}
            type="button"
            class="login-with-google-btn"
          >
            Sign in with Google
          </button>
        </div>
      </Container>
    </div>
  )
}
