import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className='container'>
            <h1 style={{textAlign: 'center' , marginTop: '25px' , marginBottom: '70px'} }> Home Page</h1>
            <p> This website is created by Muneeb,
                in order to use it you need to login or if you dont have an account
                you can create one real quick
            </p>
            <h3 style={{marginTop: '30px'}}>What does this website do?</h3>
            <p style={{marginTop: '15px'}}>Well, this website was created just for learning purpose  but I would be using
                it to store my own password because its SAFE!!!
                The main <strong>OBJECTIVE</strong> of the website is to let people store all
                their password at one place so they dont have to reset it again and again.

                You can fork me on GitHub if you want  https://github.com/MuneebAhamd/PasswordManager.git
                </p>
            <h3 style={{marginTop: '30px'}}>For Me!!!</h3>
            <p style={{marginTop: '15px'}}>"Our password manager simplifies your online experience by providing a seamless sign-in process, allowing you to securely access and manage your credentials with features like login, add, view, edit, and sign out."
"Experience hassle-free password management with our user-friendly password manager, enabling you to effortlessly sign in and utilize essential functionalities such as login, add, view, edit, and sign out for seamless control over your digital accounts.".
                {/* Today I flew Kite with my father */}
            </p>
        </div>
    )
}

export default Home
