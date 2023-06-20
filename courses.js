import React from "react";
import { useNavigate } from "react-router-dom";
function Courses(){
    let n=useNavigate()
    let Gocourses=()=>{
        n('/courses')
    }
    return(
        <div>
            <section>
          <h1 class="heading"><center> our popular courses </center></h1>
                <div class="box-container">
                    <div class="box">
                    <img src=" data:image/png;base64,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"></img>
                        <h3 class="price">999/-</h3>
                        <div class="content">
                            <div class="stars">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                            <a href="#" class="title">Learn front end development</a>
                            <div class="info">
                                <h3><i></i> 2 hours</h3>
                                <h3><i></i> 6 months</h3>
                                <h3><i></i> 6 modules</h3>

                            </div>
                        </div>
                        </div>

                        <div class="box">
                    <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png"></img>
                        <h3 class="price">2000/-</h3>
                        <div class="content">
                            <div class="stars">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                            <a href="#" class="title">Learn Fullstack web development</a>
                            <div class="info">
                                <h3><i></i> 2 hours</h3>
                                <h3><i></i> 12 months</h3>
                                <h3><i></i> 12 modules</h3>

                            </div>
                        </div>
                        </div>


                        <div class="box">
                    <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg"></img>
                        <h3 class="price">1500/-</h3>
                        <div class="content">
                            <div class="stars">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                            <a href="#" class="title">Learn Data science</a>
                            <div class="info">
                                <h3><i></i> 3 hours</h3>
                                <h3><i></i> 8 months</h3>
                                <h3><i></i> 8 modules</h3>

                            </div>
                        </div>
                        </div>


                        <div class="box">
                    <img src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg"></img>
                        <h3 class="price">999/-</h3>
                        <div class="content">
                            <div class="stars">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                            <a href="#" class="title">Learn Machine Learning</a>
                            <div class="info">
                                <h3><i></i> 2 hours</h3>
                                <h3><i></i> 3 months</h3>
                                <h3><i></i> 6 modules</h3>

                            </div>
                        </div>
                        </div>


                        <div class="box">
                    <img src="https://www.fingent.com/wp-content/uploads/fingent-5-1024x555.jpg"></img>
                        <h3 class="price">1200/-</h3>
                        <div class="content">
                            <div class="stars">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                            <a href="#" class="title">Learn Artificial Intelligence</a>
                            <div class="info">
                                <h3><i></i> 4 hours</h3>
                                <h3><i></i> 8 months</h3>
                                <h3><i></i> 8 modules</h3>

                            </div>
                        </div>
                        </div>


                        <div class="box">
                    <img src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_51ddbe10-6b83-4d6c-b762-ab26ab3a62b9.webp"></img>
                        <h3 class="price">2000/-</h3>
                        <div class="content">
                            <div class="stars">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                            <a href="#" class="title">Learn Devops</a>
                            <div class="info">
                                <h3><i></i> 6 hours</h3>
                                <h3><i></i> 12 months</h3>
                                <h3><i></i> 12 modules</h3>

                            </div>
                        </div>
                        </div>
                </div>
                </section>

        </div>
    )
}
export default Courses;