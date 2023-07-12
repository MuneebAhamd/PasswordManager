import React, { useEffect, useState , useContext} from 'react'
import {Table} from 'react-bootstrap'
import './View.css'
import firebase from 'firebase'
import {UserContext} from './UserContext'

function View() {

    const userUID = useContext(UserContext)
    const [data,setData] = useState([])
    const [counter,setCounter] = useState(1)

    useEffect(()=>{
        
        if(userUID){
            firebase.firestore().collection(userUID).onSnapshot(snap => {
                const prime = snap.docs.map(item=>({
                    id: item.id,
                    email: item.data().email,
                    password: item.data().password
                }))
                setData(prime)
            })
        }
        else{

            setCounter(counter+ 1)
        }
    }, [counter, userUID]);

    return (
        
        <div className="justify-content-center" style={{display:'flex',justifyContent:'center',}}>
            {console.log(userUID)}
            <h1 style={{marginRight:'-25%'}}> View Password</h1>
            <br></br>
            <div style={{width: '40%' , justifyContent: 'center' , alignItems: 'center',marginTop:'5%'}} >
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th style={{width: '5%'}}>#</th>
                    <th style={{width: '20%'}}>Email Address</th>
                    <th style={{width: '15%'}}>Password</th>

                    </tr>
                </thead>
                <tbody>

                   {data.map(item=> <tr key={item.id}>
                    <td></td>
                   <td>{item.email}</td>
                   <td>{item.password}</td>
                   </tr>)}
                    </tbody>
                    </Table>
            </div>
        </div>
    )
}

export default View
