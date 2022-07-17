
const LoaderDiv = (props) => {

    return (
        <div style={{width: `${props.width}px`, animationDelay: `${props.delay}ms`}} 
        className="loaderDiv"
        ref={() => {setTimeout(function (){
            document.getElementsByClassName("loaderDiv")[props.order].classList.add("full-Height");
            if (props.order === 5) {
                const Loader = document.getElementsByClassName("loaderDiv")[props.order].parentElement;
                setTimeout(() =>{
                    Loader.style.display = "none";
               }, 1000);
            }
        }, props.delay);}}
        >
        </div>
    )
}

export default LoaderDiv;