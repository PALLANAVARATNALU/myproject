import React from "react";
import "./form.css";

var Hello=()=>{
    var change=()=>{
        let x=document.getElementById("a").value
        let y=document.getElementById("b").value
        let z=document.getElementById("c").value
        if(x=="" && y=="" && z==""){
            alert("please enter the neccessary information")
        }
        else if(x==""){
            alert("please enter the name")
            
        }
        else if(y==""){
            alert("please enter mail or phone")
        }
        else if(z==""){
            alert("please enter the password")
        }
        
        else{
            alert("successfully logged in")
        }
    }
  

    
    return(
        
        <div class="con">
            <span class="border"></span>
           
            <form >
                <center><h1>User Login:</h1></center><br></br>
                <div class="font"></div>
               <span>Name:</span> <input  type="text" id="a" placeholder="enter name" required></input><br></br><br></br>
                <div class="font1" name=""></div>
                <span>Email or phone:</span><input  type="text" id="b" placeholder="enter mail or phone num" required></input><br></br><br></br>
                <div class="font3"></div>
             <span>  Password:</span><input  type="password" id="c" placeholder="enter password" required></input><br></br><br></br>
               <center> <button type="submit" onClick={change}>Login</button></center>
                <div class="forg">
                <a href="#" >Forgot password?</a>
            
                
            </div>
            </form>
           
            
        </div>

    )
}
export default Hello;