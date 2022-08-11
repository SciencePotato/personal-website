import { useState } from "react";

const Updates = (props) => {
    const [updatePage, setUpdatePage] = useState(0);

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

                                </div>
                                <div className="secondNews">

                                </div>
                                <div className="thirdNews">

                                </div>
                            </div>
                            <div className="updateSelector">
                                {/* Selector */}
                                <button className="activeButton"> 1</button>
                                <button> 2</button>
                                <button> 3</button>
                                <button> 4</button>
                                <button> 5</button>
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