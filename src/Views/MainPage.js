import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar"
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Intro from "./Intro";


// https://yo-star.com/pc/images/wangge_bg.png
const MainPage = () =>{

    window.addEventListener('wheel', (event) => {
        console.log("Potato");
    });   

    window.onload = () => {
        setLoaded(true);       
        document.querySelector("aside").classList.remove("is-active");
        document.getElementsByClassName("rightSide")[0].classList.add("close");
        document.getElementsByClassName("rightSide")[0].classList.remove("open");
    }

    const [loaded, setLoaded] = useState(false);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        setLoaded(true);       
    }, []);
    
    return (
        <> 
            <SideBar pageNumVal={pageNum} setPageNumState={setPageNum}/>
            {loaded && (
                <Loader/>
            )}
            <main>
                <section>
                    {
                        pageNum === 1 &&
                        (<Intro></Intro>)
                    }

                    {
                        pageNum === 2 &&
                        (<AboutMe></AboutMe>)
                    }

                    {
                        pageNum === 3 &&
                        (<div> 3 </div>)
                    }

                    {
                        pageNum === 4 &&
                        (<div> 4 </div>)
                    }

                    {
                        pageNum === 5 &&
                        (<Contact></Contact>)
                    }
                    
                    {/* <button onClick={() => {
                            setLoaded(false);
                            setTimeout(() => {
                                setLoaded(true);
                            }, 400);
                        }
                    }> Testing Btn </button> */}
                </section>
            </main>
        </>

    )
};

export default React.memo(MainPage);