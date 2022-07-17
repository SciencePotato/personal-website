import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar"
import Intro from "./Intro";

// https://yo-star.com/pc/images/wangge_bg.png
const MainPage = () =>{

    window.addEventListener('wheel', (event) => {
        console.log("Potato");
    });   

    const [loaded, setLoaded] = useState(false);
    const [pageNum, setPageNum] = useState(0);

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
                        (<div> 1 </div>)
                    }

                    {
                        pageNum === 2 &&
                        (<div> 2 </div>)
                    }

                    {
                        pageNum === 3 &&
                        (<div> 3 </div>)
                    }
                    <Intro/>
                    <button onClick={() => {
                            setLoaded(false);
                            setTimeout(() => {
                                setLoaded(true);
                            }, 400);
                        }
                    }> Testing Btn </button>
                </section>
            </main>
        </>

    )
};

export default React.memo(MainPage);