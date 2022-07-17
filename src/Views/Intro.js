import { useContext } from "react";
import {ThemeContext} from "./MainPage";

const Intro = (props) => {
    return (
        <section onClick={() => {
            props.setPageNumState(props.pageNumVal + 1);
        }}>
            potato
        </section>
    );
}

export default Intro;