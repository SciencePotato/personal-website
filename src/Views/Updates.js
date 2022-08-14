import { useState, useEffect } from "react";

const Updates = (props) => {
    const [updatePage, setUpdatePage] = useState(0);

    useEffect(() => {
        const news = document.querySelector(".updateNews").children;
        const buttons = document.querySelector(".updateSelector").children;
        const pageAmt = Math.floor(news.pageAmt) + (news % 3 != 0)? 1: 0;
        for (let i = 0; i < buttons.length; i ++) {
            buttons[i].addEventListener('click', function (){
                for (let x = 0; x < buttons.length; x++) {
                    buttons[x].classList.remove('activeButton');
                }
                buttons[i].classList.add('activeButton');
                setUpdatePage(i);
            });
        }
    }, []);

    useEffect(() => {
        const news = document.querySelector(".updateNews").children;
        for (let i = 0; i < news.length; i++) {
            news[i].classList.remove("firstNews");
            news[i].classList.remove("secondNews");
            news[i].classList.remove("thirdNews");
        }

        if (updatePage * 3 + 2 < news.length) {
            news[updatePage * 3].classList.add('firstNews');
            news[updatePage * 3 + 1].classList.add('secondNews');
            news[updatePage * 3 + 2].classList.add('thirdNews');
        } else {
            for (let i = 0; i < news.length % 3; i ++) {
                news[updatePage * 3 + i].classList.add((i == 0)? 'firstNews': 'secondNews');
            }

            if (news.length % 3 == 1) {
                news[updatePage * 3].style.borderBottom = "solid 2px rgb(0, 0, 0)";
            }
        }
    }, [updatePage])
    
    return (
        <>
            <section className="updateWrapper">
                <section className="updates">
                    <section>
                        <div>
                            <img id="wangge" src="https://yo-star.com/pc/images/wangge_bg.png" alt="" />
                            <h2>Status</h2>
                            <h1>UPDATE</h1>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>What's New!</h1>
                            <div className="updateNews">
                                {/* News Title */}
                                <div className="firstNews">
                                    <div>
                                        <h1> 19 </h1>
                                        <h2> Aug. 2022</h2>
                                    </div>
                                    <div>
                                        <h2> Future Plans </h2>
                                        <h1> Starting new Project: "Game Lounge" </h1>
                                    </div>
                                    <div>
                                        <h3>Read More</h3>
                                    </div>
                                </div>
                                    
                                <div className="secondNews">
                                    <div>
                                        <h1> 14 </h1>
                                        <h2> Aug. 2022</h2>
                                    </div>
                                    <div>
                                        <h2> Good News </h2>
                                        <h1> I finally finished my personal website. (This one)</h1>
                                    </div>
                                    <div>
                                        <h3>Read More</h3>
                                    </div>
                                </div>

                                <div className="thirdNews">
                                    <div>
                                        <h1> 12 </h1>
                                        <h2> Aug. 2022</h2>
                                    </div>
                                    <div>
                                        <h2> Hackathon </h2>
                                        <h1> My friends and I signed up to 5 Hackathons at the same time... it was a huge mistake</h1>
                                    </div>
                                    <div>
                                        <h3>Read More</h3>
                                    </div>
                                </div>

                            </div>
                            <div className="updateSelector">
                                {/* Selector */}
                                <button className="activeButton"> 1</button>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="updateRight">

                </section>
            </section>
        </>
    );
}

export default Updates;