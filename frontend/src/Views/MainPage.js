import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";

// https://yo-star.com/pc/images/wangge_bg.png
const MainPage = () =>{
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);       
    }, []);

    return (
        <main>
            {loaded && (
                <Loader/>
            )}
            <h1> Testing</h1>
            <button onClick={function (){ 
                setLoaded(false);
                setTimeout(() => {
                    setLoaded(true);
                }, 1000); 
            }}> Click</button>
        </main>
    )
};

export default React.memo(MainPage);