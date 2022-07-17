const Menu = (props) => {
    return (
        <nav className="menu">
            <div>
                <div>
                    <h1> Introduction </h1>
                    <h1> About Me </h1>
                    <h1> Projects </h1>
                    <h1> Updates </h1>
                </div>
            </div>
            <div>
            <button onClick={() =>{
                props.setPageNumState(1);
            }}> 1 </button>
            <button onClick={() =>{
                props.setPageNumState(2);
            }}> 2 </button>
            <button onClick={() =>{
                props.setPageNumState(3);
            }}> 3 </button>
            
            </div>
        </nav>
    )
}

export default Menu;