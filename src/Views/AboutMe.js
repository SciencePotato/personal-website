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
                console.log(matchPara);
            })
        }
    
    },[])

    return (
        <>
            <h1>Notable inventions, <span>1910–2000</span></h1>
            <div class="flex-parent">
                <div class="input-flex-container">
                    <div id="time1" class="input">
                        <span data-year="1910" data-info="headset"></span>
                    </div>
                    <div id="time2" class="input">
                        <span data-year="1920" data-info="jungle gym"></span>
                    </div>
                    <div id="time3" class="input active">
                        <span data-year="1930" data-info="chocolate chip cookie"></span>
                    </div>
                    <div id="time4" class="input">
                        <span data-year="1940" data-info="Jeep"></span>
                    </div>
                    <div id="time5" class="input">
                        <span data-year="1950" data-info="leaf blower"></span>
                    </div>
                    <div id="time6" class="input">
                        <span data-year="1960" data-info="magnetic stripe card"></span>
                    </div>
                    <div id="time7" class="input">
                        <span data-year="1970" data-info="wireless LAN"></span>
                    </div>
                    <div id="time8" class="input">
                        <span data-year="1980" data-info="flash memory"></span>
                    </div>
                    <div id="time9" class="input">
                        <span data-year="1990" data-info="World Wide Web"></span>
                    </div>
                    <div id="time10" class="input">
                        <span data-year="2000" data-info="Google AdWords"></span>
                    </div>
                </div>
                <div class="description-flex-container">
                    <p>And future Call of Duty players would thank them.</p>
                    <p>Because every kid should get to be Tarzan for a day.</p>
                    <p class="active">And the world rejoiced.</p>
                    <p>Because building roads is inconvenient.</p>
                    <p>Ain’t nobody got time to rake.</p>
                    <p>Because paper currency is for noobs.</p>
                    <p>Nobody likes cords. Nobody.</p>
                    <p>Brighter than glow memory.</p>
                    <p>To capitalize on an as-yet nascent market for cat photos.</p>
                    <p>Because organic search rankings take work.</p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;