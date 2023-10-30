import { useState } from "react";
const About = ()=> {

    const next = ()=>{
        if (currentIndex<informations.length) {
            setCurrentIndex(currentIndex+1);
            console.log(informations.length);
            console.log(currentIndex);
        }
        
    }
    const previous = ()=>{
        if (currentIndex>0) {
            setCurrentIndex(currentIndex-1);
        }
    }
    const informations = [
        {
            title : "Introduction ",
            content : "Introducing myself: Oussama. I am a student at ESI Algiers, and my passion for technological and IT advances is limitless. I invest my time in various areas, ranging from programming and algorithms to sophisticated areas of AI, Deep Learning, and even trading. I am also interested in web development with ReactJS and Node.js. Object oriented programming with Java has a special place in my background. I appreciate the organization and structure it gives to my projects.",
        },
        {
            title : "Title",
            content : "Introducing myself: Oussama. I am a student at ESI Algiers, and my passion for technological and IT advances is limitless. I invest my time in various areas, ranging from programming and algorithms to sophisticated areas of AI, Deep Learning, and even trading. I am also interested in web development with ReactJS and Node.js. Object oriented programming with Java has a special place in my background. I appreciate the organization and structure it gives to my projects.",
        },
        {
            title : "Title",
            content : "Introducing myself: Oussama. I am a student at ESI Algiers, and my passion for technological and IT advances is limitless. I invest my time in various areas, ranging from programming and algorithms to sophisticated areas of AI, Deep Learning, and even trading. I am also interested in web development with ReactJS and Node.js. Object oriented programming with Java has a special place in my background. I appreciate the organization and structure it gives to my projects.",
        },
        {
            title : "Title",
            content : "Introducing myself: Oussama. I am a student at ESI Algiers, and my passion for technological and IT advances is limitless. I invest my time in various areas, ranging from programming and algorithms to sophisticated areas of AI, Deep Learning, and even trading. I am also interested in web development with ReactJS and Node.js. Object oriented programming with Java has a special place in my background. I appreciate the organization and structure it gives to my projects.",
        },
        
    ];
    const [currentIndex , setCurrentIndex] = useState(0);
    return(
        <div className="flex justify-center items-center lg:pt-14 mb-8 " id="about"> 
            <div className="w-[80%] flex flex-col  justify-center items-center  ">
                <h1 className=" my-10 text-md  text-center">Get to know <br /> <span className="text-3xl text-[#7127BA] font-bold">About Me</span> </h1>
                <div className="w-[80%]  pb-10 flex flex-col items-center border-2">
                    <p className="my-5 text-center">{informations[currentIndex].title}</p>
                    <p className="text-center">{informations[currentIndex].content}</p>
                </div>
                <div className="w-[60%]  flex flex-row items-center justify-evenly">
                <button onClick={previous} className={`bg-[#7127BA] px-4  w-32 h-10 rounded mt-10 ${currentIndex===0 ?"bg-[gray]" :""}`}> Previous</button>
                <button onClick={next} className={`bg-[#7127BA] px-4 h-10 w-32 rounded mt-10 ${currentIndex === informations.length?"bg-[gray]":""}`}> Next</button >
                </div>
            </div>
        </div>
    );
}

export default About;

// I'm an experienced web and mobile developer, skilled in crafting applications for both web and mobile platforms. I'm proficient in programming languages and tools necessary for designing responsive websites and native or hybrid mobile applications, and I'm passionate about technological innovation.