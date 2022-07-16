import React from "react";

const numOfBlock = 6;       
const delayTime = 200;      // 200ms

const Loader = () => {
    for (let i = 0; i < numOfBlock; i++) {
        console.log(i);
    }   
};

export default Loader;