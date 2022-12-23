// 🐨 you'll need to import react and createRoot from react-dom up here
import '@reach/dialog/styles.css'
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
// 🐨 you'll also need to import the Logo component from './components/logo'
import { Logo } from './components/logo'
import { Dialog } from '@reach/dialog'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.

const LoginForm = ({ onSubmit, buttonText }) => {
  const handleSubmit = event => {
    event.preventDefault()
    const [username, password] = event.target.elements
    onSubmit({ username: username.value, password: password.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username"> Username </label>
      <input id="username" />
      <br />
      <label htmlFor="password"> Password </label>
      <input id="password" type="password" />
      <br />
      <button type="submit">{buttonText}</button>
    </form>
  )
}

export const App = () => {
  const [openModal, setOpenModal] = useState('none')

  const login = formData => {
    console.log('login', formData)
  }

  const register = formData => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}> Login </button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}> Register </button>
      </div>
      <Dialog
        aria-label="login form"
        isOpen={openModal === 'login'}
        onDismiss={() => setOpenModal('none')}
      >
        <h3> Login </h3>
        <LoginForm onSubmit={login} buttonText={'Login'} />
      </Dialog>
      <Dialog
        aria-label="Registration Form"
        isOpen={openModal === 'register'}
        onDismiss={() => setOpenModal('none')}
      >
        <h3> Register </h3>
        <LoginForm onSubmit={register} buttonText={'Register'} />
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export { root }

// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
