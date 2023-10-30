const NavBar = ()=>{
    return(
        <div className="fixed top-0 w-[96%] right-0   flex justify-evenly navbar text-sm items-center">
            <div className="w-[30%] "></div>
            <a href="#hero" className="text-[white] p-4 hover:text-[white] hover:scale-110">&lt;Home/&gt;</a>
            <a href="#about" className="text-[gray] p-4 hover:text-[white] hover:scale-110">&lt;About/&gt;</a>
            <a href="#skills" className="text-[gray] p-4 hover:text-[white] hover:scale-110">&lt;Skills/&gt;</a>
            <a href="#projects" className="text-[gray] p-4 hover:text-[white] hover:scale-110">&lt;Projects/&gt;</a>
            {/* <a href="/" className="text-[white] p-4">&lt;Certificate/&gt;</a> */}
            <a href="#contact"><button className="bg-mainColor px-4 h-10 rounded hover:scale-105   ">Contact Me</button></a>
        </div>
    );
}

export default NavBar;