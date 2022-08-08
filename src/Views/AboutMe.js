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
                    <div id="time1" className="input">
                        <span data-year="" data-info="History"></span>
                    </div>
                    <div id="time2" className="input">
                        <span data-year="" data-info="Education"></span>
                    </div>
                    <div id="time3" className="input active">
                        <span data-year="" data-info="Experience"></span>
                    </div>
                    <div id="time4" className="input">
                        <span data-year="" data-info="Hobbies"></span>
                    </div>
                    <div id="time5" className="input">
                        <span data-year="" data-info="leaf blower"></span>
                    </div>

                </div>
                <div className="description-flex-container">
                    <div>
                        <h2> It's me Stewie</h2>
                        <p> Potato science</p>
                    </div>
                    <p>Because every kid should get to be Tarzan for a day.</p>
                    <p className="active">And the world rejoiced.</p>
                    <p>Because building roads is inconvenient.</p>
                    <p>Ain’t nobody got time to rake.</p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;