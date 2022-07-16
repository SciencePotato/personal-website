import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";

const MainPage = () =>{
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);       
    }, []);

    return (
        <>
            {loaded && (
                <Loader/>
            )}
            <h1> Testing</h1>
        </>
    )
};

export default React.memo(MainPage);