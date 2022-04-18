import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBmRNS1FzUoF9NgGH9ZxCwPCspHuh42-PM',
  authDomain: 'next-annovation.firebaseapp.com',
  projectId: 'next-annovation',
  storageBucket: 'next-annovation.appspot.com',
  messagingSenderId: '672460084505',
  appId: '1:672460084505:web:e8c66c1749eb92207c6188',
  measurementId: 'G-EYZWG088ZN',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
        image: user.photoURL,
      })
    }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const logout = () => {
  signOut(auth)
}

export { auth, db, signInWithGoogle, logout }
