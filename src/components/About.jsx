const About = ()=> {
    return(
        <div className="flex justify-center items-center lg:mt-12 mb-60"> 
            <div className="w-[80%] flex flex-col  justify-center items-center  ">
                <h1 className=" my-10 text-md  text-center">Get to know <br /> <span className="text-3xl text-[#7127BA] font-bold">About Me</span> </h1>
                <div className="w-[80%]  pb-10 flex flex-col items-center border-2">
                    <p className="my-5 text-center">Title</p>
                    <p className="text-center">Introducing myself: Oussama. I am a student at ESI Algiers, and my passion for technological and IT advances is limitless. I invest my time in various areas, ranging from programming and algorithms to sophisticated areas of AI, Deep Learning, and even trading. I am also interested in web development with ReactJS and Node.js. Object oriented programming with Java has a special place in my background. I appreciate the organization and structure it gives to my projects.</p>
                </div>
                <button className="bg-[#7127BA] px-4 h-10 rounded mt-10"> Next</button>
            </div>
        </div>
    );
}

export default About;