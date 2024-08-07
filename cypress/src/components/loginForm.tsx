import React, { useState } from 'react'
import './loginForm.css'

interface LoginFormProps {
  onSubmit: (data: { username: string; password: string }) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValidCredentials = username === 'admin' && password === 'password'

    if (isValidCredentials) {
      setErrorMessage('')

      if (onSubmit) {
        onSubmit({ username, password })
      }
    } else {
      setErrorMessage('Invalid username or password. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            data-test="username"
            type="text"
            id="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            data-test="password"
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {}
        <button
          data-test="login-button"
          type="submit"
          className="submit-button"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
