import React, {useState} from 'react';
import Axios from "axios";

function Email () {
    const[email,setEmail] = useState("");
    const[subject,setSubject] = useState("");
    const[text,setText] = useState("");
    const send =()=>{
        Axios.post("http://localhost:8080/email",{
            email:email,
            subject:subject,
            text:text
        }).then((response)=>{
            console.log(response);

        })
    }
    return (
        <>

            <div className="App">
                <div className="signup">

                    <h1>Send Email</h1>
                    <form>

                        <input type ="text" id ="subject" placeholder="Subject" onChange={(e)=>{
                            setSubject(e.target.value);


                        }}
                        /> <br/>
                        <input type ="email" id ="email" placeholder="Email"
                             onChange={(e)=>{
                            setEmail(e.target.value);


                        }}/> <br/>
                        <textarea name="text" id="text" cols="30" rows = "10"     onChange={(e)=>{
                            setText(e.target.value);


                        }}/> <br/>

                    </form>
                    <button type="submit" value ="Submit" onClick={send}/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

                </div>
            </div>

        </>
    );
}
export default Email;