
const LoaderDiv = (props) => {

    return (
        <div style={{width: `${props.width}px`, animationDelay: `${props.delay}ms`}} 
        className="loaderDiv"
        ref={() => {setTimeout(function (){
            document.getElementsByClassName("loaderDiv")[props.order].classList.add("full-Height");
            if (props.order === 5) {
                const Loader = document.getElementsByClassName("loaderDiv")[props.order].parentElement;
                setTimeout(() =>{
                    Loader.style.zIndex = "-1";
                    Loader.style.display = "none";
                    for (let i = 0; i < Loader.children.length; i++) {
                        document.getElementsByClassName("loaderDiv")[i].classList.remove("full-Height");
                    }
               }, 1800);
            }
        }, props.delay);}}
        >
        </div>
    )
}

export default LoaderDiv;