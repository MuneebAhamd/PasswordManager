import React, { useState, useReducer, useContext } from 'react';
 import { Button, Form } from 'react-bootstrap';
  import firebase from 'firebase';
   import { UserContext } from './UserContext';

function Add() { let userUID = useContext(UserContext);
   const [email, setEmail] = useState(''); 
   const [password, setPassword] = useState('');

const initMessage = { text: '', type: null, };

const reducer = (state, action) =>
 { switch (action)
   { case 'success':
    return { text: 'Added Successfully'
    , type: 'success', };
     case 'null_password'
     : 
     return { text: 'Password cannot be empty', type: 'danger', };
      case 'null_email': return { text: 'Email cannot be empty', type: 'danger', };
       default: return state;
       }
       };

const [message, dispatch] = useReducer(reducer, initMessage);

function AddData(e) { e.preventDefault();

if (password && email) {
  firebase.firestore().collection(userUID).add({
    email: email,
    password: password,
  });
  setEmail('');
  setPassword('');
  dispatch('success');
}
if (password === '' && email) {
  dispatch('null_password');
}
if (email === '' && password) {
  dispatch('null_email');
}
}

return ( <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', minHeight: '100vh' }}>
   {message.type ? ( <h4 style={{ justifyContent: 'center', alignSelf: 'center', marginTop: '-45%', marginRight: '-10%' }}>{message.text}</h4> ) : null}
    <h1 style={{ textAlign: 'center', marginTop: '-1%', marginRight: '-18%' }}> Add Password</h1> 
    <div style={{ width: '50%', marginLeft: '25px', marginTop: '4%' }}> 
    <Form> 
      <Form.Group controlId="formBasicEmail"> 
      <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '40%' }} /> </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '40%' }} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => AddData(e)}>
        Submit
      </Button>
    </Form>
  </div>
</div>
); 
}
export default Add