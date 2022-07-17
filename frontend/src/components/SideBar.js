import Menu from "./Menu";

const SideBar = () => {
    return (
        <>
           <aside className="">
                <section> 
                    <div>
                        <svg className="contrastMode" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 4c-4.418 0-8 3.582-8 8s3.582 8 8 8v-16z"/></svg>
                    </div>
                    <div>
                        ||
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M16 8v-4l8 8-8 8v-4h-16l8-8h8z"/></svg>
                    </div>
                </section>
                <Menu/>
            </aside>
        </>
    );
}

export default SideBar;