import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
      <>
        <form>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <FilledInput fullWidth id='username'></FilledInput>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <FilledInput fullWidth id='password'></FilledInput>
          <Button fullWidth variant="contained" color="primary">Log In</Button>
        </form>
      </>
    );
}

export default Login