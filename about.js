import React from "react";
import { useNavigate } from "react-router-dom";
import './logi.css';
function About(){
    let n=useNavigate()
    let Goabout=()=>{
        n('/about')
    }
    return(
                <div id="div3">
            <div>
                <h1 style={{color:"blue"}}><u> ABOUT PAGE:</u></h1>
                <div style={{color:"whitesmoke"}}> 
                <p> <h2><center> why to learn?</center></h2>
                <h2> 
How to Choose the Best eLearning Platform</h2>
The purpose of a successful eLearning platform is that it creates a robust learning experience that feels like a classroom experience, offering the traditional classroom characteristics (like instructor-student interaction, Q&As, discussion, games, collaborative projects, quizzes, etc.) but either online or through a device (e.g. a laptop, desktop, tablet or mobile.) These important learning environments are achieved through a learning platform’s features and tools that create the level of interaction and engagement students need.
<h2> 
Learning Formats</h2>
Just as there are many learning styles for different types of learners, the online learning platform you choose should be able to host different content formats to address your learner’s specific learning styles. Some examples of content formats include articles, interviews, webinars, charts, PowerPoint presentations,  simulations and video, but these are just a select few examples of content formats that can be used in eLearning.

Learning platforms should also include content modules, learning modules, evaluation modules, and communication modules. These modules allow for your training program to incorporate a variety of teaching styles for every learner, and allows for learners to boost their performance level and knowledge-retention levels.

                </p>
                </div> 
            </div>
        </div>
    )
}
export default About;