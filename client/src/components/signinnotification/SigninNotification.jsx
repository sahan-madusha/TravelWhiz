import React, { useRef, useState } from 'react'
import "./SigninNotification.css"

const SigninNotification = (props) => {

    const [tocreate , setToCreate] = useState(props.tocreate);
    
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const switchAuthModeHandler = () => {
        setToCreate((prevState) => !prevState);
    };

    const switchloginhandler=()=>{
        props.setToCreate((prestate)=>!prestate)
    };

    const closenotificationhandler = () => {
        props.setShow((prevState) => !prevState);
    };

    const submitHabdler = (event)=>{
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        let url;
        if(!tocreate){
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3Fl7A__tVkNGYJzRwfhYeVcYhTVR5lE4'
        }else{
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3Fl7A__tVkNGYJzRwfhYeVcYhTVR5lE4'
        }
        
        let valid;
        fetch(url,{
          method:'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers:{
            'Content-Type' : 'application/json'
          }        
        }).then((res) => {
            // setToCreate(false);
          if(res.ok){
            return res.json().then((data)=>{
                switchloginhandler();
                console.log(data)
            })
          }else{
            return res.json().then((data) => {
              let errorMessage = 'Authentication failed!'
              
              console.log(data);
              throw new Error(errorMessage)
            });
          }
        }).then((data)=>{
          console.log(data)
        })
        .catch((err)=>{
            alert(err.message);
        });
    };

    return (
        <div class='col-12 d-flex align-items-center flex-column'>
            <div class='container col-4 align-items-center bgcolor position-absolute text-center rounded-4'>
                <h2 class='textcolor'>
                    {!tocreate ? 'SIGN IN' : 'SIGN UP'}
                    <a href='#' class='pe-auto text-decoration-none align'><span class="close text-danger" onClick={closenotificationhandler}>&times;</span></a>
                </h2>  
                <form onSubmit={submitHabdler} class='d-flex flex-column'>
                    <div class="mt-4">
                        <input ref={emailInputRef} type="email" class="border-success-subtle border border-3 form-control borderstyle rounded-pill" id="exampleFormControlInput1" placeholder="Enter your user Email"/>
                    </div>
                    <div class="mt-3">
                        <input ref={passwordInputRef} type="password" class="border-success-subtle border border-3 form-control borderstyle rounded-pill" id="exampleFormControlInput1" placeholder="Enter your user Password"/>
                    </div>            
                    <a href='#' class='pe-auto text-decoration-none'><h6 class='mt-4 textcolor pe-auto' onClick={switchAuthModeHandler}>{!tocreate ? 'Create an Account' : 'login with existing account'}</h6></a>
                    <div>
                        <h4 class='mt-4 textcolor'>Continue with Google</h4>
                    </div>
                    <button>{!tocreate ? 'SIGN IN' : 'SIGN UP'}</button>
                </form>
            </div>
        </div>
    )
}

export default SigninNotification