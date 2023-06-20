import React from "react";
import { useNavigate } from "react-router-dom";
import './logi.css';
function Page(){
    let n=useNavigate()
    let Gohome=()=>{
        n('/home')
    }
    let Goabout=()=>{
        n('/about')

    }

    let Gocontact=()=>{
        n('/contact')
    }
    let Gocourses=()=>{
        n('/courses')
    }
    let Gologin=()=>{
        n('/login')
    }
    return(
        <div id="div2"> 
          <div style={{paddingLeft:"1000px",paddingTop:"5px"}}> 
         <button on onClick={Gologin}>LOGOUT</button>
         </div>
         <div style={{color:"red"}}> 
         <h2> <u> welcome to home page</u></h2>
         </div>
            <header>
                <nav>
                    <ul> 
                   <span style={{color:"brown",backgroundColor:"pink"}}> <li onClick={Gohome}><u>HOME </u></li></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <span style={{color:"brown",backgroundColor:"pink"}}><u><li onClick={Goabout}>ABOUT</li></u> </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <span style={{color:"brown",backgroundColor:"pink"}}><u><li on onClick={Gocourses}>COURSES</li></u></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <span style={{color:"brown",backgroundColor:"pink"}}><u><li on onClick={Gocontact}>CONTACT</li></u></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </ul>
                  </nav>
            </header>
                  <div><center>  <img src="https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg?w=500"></img> </center></div>
                <div> <p><h1 style={{textAlign:"center"}}> Understanding eLearning Platforms</h1>
The field of electronic learning (or “eLearning”) has gained increasing popularity, and for the right reasons. Over the last few years, intuitive online learning platforms has seen leaps in offering a complete learning experience that is fun, interactive, and ultimately engaging.
<h2> What is an eLearning System?</h2>

An electronic learning platform is an integrated set of interactive online services that provide trainers, learners, and others involved in education with information, tools, and resources to support and enhance education delivery and management. One type of eLearning platform is a learning management system (LMS).

There are many eLearning companies out there that offer online learning platforms. Some of these virtual learning environment platforms allow you to host and sell online courses, allowing you to run your own business. Other platforms simply offer an interface in which users can interact with your content but might not be the best fit for your audience. So how do you decide which platform is the best to host your training courses?

In the end, you’re going to choose the eLearning platform that presents your course in an engaging way for your learners. To help you decide how to differentiate between different LMS options, we’ve created a shortlist of the most important aspects to consider when choosing the right platform.
</p>
</div> 
             
        </div>
    )
}
export default Page;