import React from "react";
import { useNavigate } from "react-router-dom";
import './logi.css';
function Contact(){
    let n=useNavigate()
    let Gocontact=()=>{
        n('/contact')

    }
    return( 
        <div id="div4">
            <div> 
                <form>
            <h2 style={{color:"Highlight"}}><b><center><u>  contact us for more information</u> </center></b></h2>
            <div style={{color:"whitesmoke"}}>
            Phoneno:9876543210<br></br>
            email addresss:learningplatform@gmail.com<br/>
             suggestions:<input type="text" placeholder="text  here"></input>
             </div>
             </form>
             </div>
        </div>
    )
}
export default Contact;