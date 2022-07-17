import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar"

// https://yo-star.com/pc/images/wangge_bg.png
const MainPage = () =>{
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);       
    }, []);

    return (
        <> 
            <SideBar/>
            {loaded && (
                <Loader/>
            )}
            <main>
                <section>
                    <h1> Testing</h1>
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