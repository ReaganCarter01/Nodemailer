import React, {useState} from 'react';
import Axios from 'axios';

function SignUp() {
    const[usernameReg,setUsername] = useState("");
    const[passwordReg,setPassword] = useState("");

    const signup =()=>{
        Axios.post("http://localhost:8080/signup",{
            username:usernameReg,
            password:passwordReg
        }).then((response)=>{
            console.log(response);
            console.log(usernameReg);
        })
    }

    const validate =()=>{
        Axios.get("http://localhost:8080/signup",{
            username:usernameReg
        }).then((response)=>{
            console.log(response);
            console.log(usernameReg);
        })
    }

    return (
        <>
            <div className="App">
                <div className="signup">
                    <h1>Sign Up</h1>
                    <label>Username</label>
                    <input type="text" onChange={(e)=>{
                        setUsername(e.target.value)
                        validate();

                    }}/>
                    <label>Password</label>
                    <input type="password" onChange={(e)=>{
                        setPassword(e.target.value);

                    }}/>
                    <button onClick={signup} >Sign Up</button>
                </div>
            </div>

        </>
    );
}

export default SignUp;
