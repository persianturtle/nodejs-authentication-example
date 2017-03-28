import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      error: false
    }
  }

  handleUsername = event => {
    this.setState({
      username: event.target.value.toLowerCase()
    })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      if (!response.ok) throw new Error('Not Authorized')
      window.location.href = '/'
    })
    .catch(() => {
      this.setState({
        error: true
      })
    })
  }

  render () {
    const {
      username,
      password,
      error
    } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        {
          error &&
          <Error>Invalid credentials</Error>
        }
        <input
          type='text'
          onChange={this.handleUsername}
          placeholder='Username'
          value={username}
        />
        <input
          type='password'
          onChange={this.handlePassword}
          placeholder='Password'
          value={password}
        />
        <button onClick={this.handleSubmit}>LOGIN</button>
      </Form>
    )
  }
}

const Form = styled.form`
  font-family: Helvetica;
  display: flex;
  ${props => props.hidden ? 'display: none;' : ''}
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > input, button {
    font-size: 20px;
    line-height: 50px;
    width: 80vw;
    max-width: 300px;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 15px;
  }

  > input {
    padding: 0 15px;
  }

  > button {
    background: #f26f2b;
    cursor: pointer;
    color: white;
    letter-spacing: 10px;
    border: none;
  }
`

const Error = styled.label`
  line-height: 40px;
  font-size: 20px;
  color: firebrick;
`

render(<Login />, document.querySelector('main'))
