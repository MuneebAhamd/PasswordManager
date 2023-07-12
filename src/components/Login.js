import React, { useState} from 'react'
import { useHistory } from "react-router-dom";
import fire from './Fire'
import{Button, Form} from 'react-bootstrap'

function Login() {


    const[password,setPassword] = useState('')
    const[email,setEmail] = useState('')
    const[message,setMessage] = useState(null)
    const history = useHistory()
    function userLogin(e){
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(email, password)
        .then(u => {
            console.log("USER CREDENTIAL CORRECT")
            history.push('/')
        })
        .catch(err => {
            setMessage(err.message)
        })
    }

    return (
     <div style={{ justifyContent: 'center',marginTop:'10%', alignSelf: 'center' }}>
  <h1 style={{ textAlign: 'center' }}>Login Page</h1>
  {message ? <h4>{message}</h4> : null}
  <div style={{ display: 'flex', justifyContent: 'center' ,marginLeft:'25%'}}>
    <Form style={{ margin: '25px', width: '50%' }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "39%" }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "39%" }} />
      </Form.Group>
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
        <Button variant="primary" type="submit" onClick={e => userLogin(e)}> Login</Button>
      {/* </div> */}
    </Form>
  </div>
</div>

    )
}

export default Login
