import LoaderDiv from "./LoaderDiv";
import { useState } from "react";

const numOfBlock = 6;       
const animationDelayTime = 75;

const Loader = () => {
    const [blockWidth, setBlockWidth] = useState(window.innerWidth / numOfBlock) 

    window.onresize = () => {
        setBlockWidth(window.innerWidth / numOfBlock);
    }

    let divGroup = [];  
    for (let i = 0; i < numOfBlock; i++) {
        let currentDelay = animationDelayTime * (numOfBlock - i - 1);
        divGroup.push(<LoaderDiv width={blockWidth} delay={currentDelay} order={i} key={i}/>)
    }

    return (
        <>
            <section className="loader">
                {divGroup}
            </section>
        </>
    )
};

export default Loader;