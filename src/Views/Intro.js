import { useEffect } from "react";

const Intro = (props) => {
    let originalX = 15;
    let originalY = 25;

    useEffect(() => {
        document.querySelector(".Intro").addEventListener('mousemove', (e) => {
            const img = document.getElementById("wangge");
            const img2 = document.getElementById("wangge2");
            img.style.top = originalX - (parseInt(e.clientY) / 100) + "%";
            img.style.left = originalY - (parseInt(e.clientX) / 100) + "%";
            img2.style.bottom = originalX + (parseInt(e.clientY) / 150) + "%";
            img2.style.right = originalY - 10 + (parseInt(e.clientX) / 150) + "%";
        })
    }, []);
    
    return (
        <section className="Intro">
            <section>
                <img id="wangge" src="https://yo-star.com/pc/images/wangge_bg.png" alt="" />
                <img id="wangge2" src="https://yo-star.com/pc/images/wangge_bg.png" alt="" />
                <div>
                    <h1> Greetings! </h1>
                    <h2> Welcome to my personal website !</h2>
                </div>
            </section>
            <section>
                {/* SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="664" height="256" viewBox="0 0 664 256" fill="none">
                    <path d="M-571.585 192L-472.894 96H-374.203L-275.512 0L-176.821 160L-78.1304 64L20.5606 32L119.252 96L217.943 0L316.634 256L415.325 128L514.016 256L612.707 64L711.398 192H810.089L908.78 0V256H810.089H711.398H612.707H514.016H415.325H316.634H217.943H119.252H20.5606H-78.1304H-176.821H-275.512H-374.203H-472.894H-571.585V192Z" fill="#DE2F1F"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="664" height="344" viewBox="0 0 664 344" fill="none">
                    <path d="M0 264.8L105.133 132.5H210.267L315.4 0.200195L420.533 220.7L525.667 88.4002L630.8 44.3002L735.933 132.5L841.067 0.200195L946.2 353L1051.33 176.6L1156.47 353L1261.6 88.4002L1366.73 264.8H1471.87L1577 0.200195V353H1471.87H1366.73H1261.6H1156.47H1051.33H946.2H841.067H735.933H630.8H525.667H420.533H315.4H210.267H105.133H0V264.8Z" fill="#B8271A"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="524" height="247" viewBox="0 0 524 247" fill="none">
                    <path d="M0.840332 192L99.5313 96H198.222L296.913 0L395.604 160L494.295 64L592.986 32L691.677 96L790.368 0L889.059 256L987.75 128L1086.44 256L1185.13 64L1283.82 192H1382.51L1481.21 0V256H1382.51H1283.82H1185.13H1086.44H987.75H889.059H790.368H691.677H592.986H494.295H395.604H296.913H198.222H99.5313H0.840332V192Z" fill="#DE2F1F"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="591" height="1080" viewBox="0 0 591 1080" fill="none">
                    <path d="M194.703 -1.27119L590.622 1385.44L6.51458 1388.03L4.21288e-05 -0.40679L194.703 -1.27119Z" fill="#0076C4"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#004879" opacity="1" d="M0,288L1440,0L1440,320L0,320Z"></path>
                </svg>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50"/>
                </svg>
            </section>
        </section>
    );
}

export default Intro;