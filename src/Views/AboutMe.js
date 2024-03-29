import elswordImg from '../assets/image/prev-laby-1stpath.png';
import elswordImg2 from '../assets/image/prev-noah-1stpath.png';
import bthsImg from '../assets/image/bths.png';
import githubImg from '../assets/image/github.png'
import android from '../assets/image/android.png'
import firebase from '../assets/image/firebase.png'
import react from '../assets/image/React-icon.svg.png'
import sql from '../assets/image/sql.png';
import sass from '../assets/image/sass.png';

import { useEffect } from "react";

const AboutMe = (props) => {
    useEffect(() => {
        // Main
        let input = document.querySelectorAll(".input");
        let paras = document.querySelector(".description-flex-container").children;
    
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener("click", function(){
                let t = this;
                let idx = parseInt(t.id.replaceAll("time","")) - 1;
                let matchPara = paras[idx];

                t.classList.add("active");
                matchPara.classList.add("active");

                for (let x = 0; x < input.length; x ++) {
                    if (x !== idx) {
                        input[x].classList.remove("active");
                        paras[x].classList.remove("active");
                    }
                }
            })
        }
    
    },[])

    return (
        <>
            <h1 className="nerd"> Who is this <span> Nerd</span>?</h1>
            <div className="flex-parent">
                <div className="input-flex-container">
                    <div id="time1" className="input active">
                        <span data-year="" data-info="History"></span>
                    </div>
                    <div id="time2" className="input">
                        <span data-year="" data-info="Education"></span>
                    </div>
                    <div id="time3" className="input">
                        <span data-year="" data-info="Experience"></span>
                    </div>
                    <div id="time4" className="input">
                        <span data-year="" data-info="Hobbies"></span>
                    </div>
                    <div id="time5" className="input">
                        <span data-year="" data-info="Future Plans"></span>
                    </div>

                </div>
                <div className="description-flex-container">
                    {/* History */}
                    <div className="myHistory active">
                        <h2 className="animate__animated animate__zoomIn animate__fast"> Let's go <span className="blue">Way </span> <span className="red"> Back!</span></h2>
                        <p className="animate__animated animate__zoomIn"> I was born on <i><b> August 9th 2003 </b></i>, in Macau. At the age of 6 or 7, 
                            or maybe even 8, I moved from China to New York, USA. I received my first personal Computer at 12 years of age, and was immediately addicted
                            to video games, particularly a game called <b  > <a className="red"href="https://elsword.koggames.com/" target={"_blank"}>Elsword</a></b>. 
                            This is, ultimately, my first step toward this strange field call computer Science.
                        </p>
                        <div>
                            <img src={elswordImg} alt="" className='animate__animated animate__fadeInLeft'/>
                            <img src={elswordImg2} alt="" className='animate__animated animate__fadeInRight'/>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="myEducation">
                        <h2 className="animate__animated animate__zoomIn animate__fast "> College Debt <span className='animated animate__zoomIn red'>101</span></h2>
                        <div>
                            <p className='animate__animated animate__zoomIn'> Skipping pass my Elementary and Middle school, since I enrolled into Brooklyn Technical High school, and eventually ended up majoring
                                Software Engineering. It was during that time that I started Web development and got into my first few program, <b><a href='https://allstarcode.org/' target={"_blank"} className='blue'> All-Star Code</a></b> 
                                and <b><a href='https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute' className='blue' target={'_blank'}> Google CSSI</a></b>.
                            </p>
                            <img className='animate__animated animate__slideInRight' src={bthsImg} alt="" />
                        </div>
                        <div>
                            <img className='animate__animated animate__slideInLeft' src={"https://logos-world.net/wp-content/uploads/2022/01/Boston-University-Logo.png"} alt="" />
                            <p className='animate__animated animate__zoomIn'>    
                                After that ordeal, I was accepted to Boston University's Computer Science Program. During that time, I've enrolled in several external course to boost my capability,
                                such as <b><a href='https://www.codepath.org/' className='blue'> CodePath</a></b>, <b><a href='https://mlh.io/' className='blue'>Major League Hacking Prep </a></b>, and <b><a href='https://inculture.microsoft.com/social-good/inclusion/tech-resilience/' className='blue'> Microsoft Tech Resilience</a></b>. 
                            </p>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="myExperience">
                        <h2 className='animate__animated animate__zoomIn animate__fast'> Lv. <b className='red'>1</b> <span className='blue'>(Rookie Trainer)</span></h2>
                        <div>
                            <p className='animate__animated animate__slideInUp'>
                               While I don't have much professional experience, I do dabble in random technologies hoping to learn more from it. 
                               The Image below represents the technology that I am familiar with, and confident in. From left to right it's
                               <b className='blue'> React </b>, 
                               <b className='blue'> Github </b>, 
                               <b className='blue'> Firebase </b>, 
                               <b className='blue'> Android Studio </b>, 
                               <b className='blue'> SQL </b>, 
                               <b className='blue'> Sass </b> 
                            </p>
                            <div className='animate__animated animate__fadeIn animate__fast'>
                                {/* Images */}
                                <img src={react} alt="" />
                                <img src={githubImg} alt="" />
                                <img src={firebase} alt="" />
                                <img src={android} alt="" />
                                <img src={sql} alt="" />
                                <img src={sass} alt="" />
                            </div>
                            <p className='animate__animated animate__slideInUp'>
                                Over my short career, if there was any, I learned many programming languages: 
                                <b className='blue'> JavaScript </b>,
                                <b className='blue'> Java </b>,
                                <b className='blue'> TypeScript </b>,
                                <b className='blue'> Python </b>,
                                <b className='blue'> SQL </b>,
                                <b className='blue'> Kotlin</b>.
                            </p>
                        </div>
                    </div>

                    {/* Hobbies */}
                    <div className="myHobby">
                        <h2 className='animate__animated animate__zoomIn animate__fast'> <span className='blue'> Downtime.exe</span>  <span className='red'> NOT </span>found.</h2>
                        <div>
                            <p className='animate__animated animate__lightSpeedInRight'>
                                As much as I want to say, "my hobby is coding," that is not entirely true. In what is left of my free time, I will often play
                                video games with friends as a method of relieve. I am, or at least I believe, a creative person, I love to <span className='blue'><b> take photos</b></span>, <span className='blue'><b> play instruments</b></span>, and 
                                <span className='blue'><b> draw digitally</b></span>. 
                            </p>
                            <div className='animate__animated animate__fadeIn animate__delay-1s'>

                            </div>
                            <div className='red animate__animated animate__fadeIn animate__delay-1s'> <b> Loading Passion ...</b></div>
                            <div className='animate__animated animate__fadeIn animate__delay-2s'> (Don't worry, nothing is loading :c) </div>
                        </div>
                    </div>

                    {/* Future plans */}
                    <div className="myFuture">
                        <h2 className='animate__animated animate__zoomIn animate__fast'> <span className='blue'> Future. </span> </h2>
                        <div className='animate__animated animate__zoomIn'>
                            <p>
                                <b className='red'> So</b> what am I going to do in the future? Well, <b className='red'>truthfully </b>, I have no idea! There's so much specific branch of computer science to explore;
                                I want to try most of them before I graduate (2025). Before then, I'll have to do my best to create more <b className='red'> projects</b> that I am proud of and join more <b className='red'>Hackathons</b> to learn 
                                from other people.
                            </p>
                        </div>
                        <h2 className='animate__animated animate__zoomIn animate__delay-1s'> Thats all for now.</h2>
                        <h1 className='animate__animated animate__zoomIn animate__delay-1s'>Thank you</h1>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AboutMe;