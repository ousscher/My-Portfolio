import { useState } from "react";
const About = ()=> {

    const next = ()=>{  //la fonction next 
        if (currentIndex<informations.length-1) {
            setCurrentIndex(currentIndex+1);
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
            content : "Allow me to introduce myself: I'm Oussama, a dedicated student at ESI Algiers, where I've discovered my profound passion for technological and IT advancements. My enthusiasm for these fields knows no bounds, and I'm constantly investing my time in diverse areas, ranging from the intricate world of programming and algorithms to the cutting-edge realms of AI, particularly Deep Learning. I'm also deeply involved in web development, proficient in ReactJS and Node.js, and have a knack for building seamless, interactive user experiences. What's more, I'm an experienced Flutter developer, adept at crafting cross-platform mobile applications with a keen eye for elegant UI and robust functionality.",
        },
        {
            title : "Journey",
            content : "I successfully obtained my Baccalaureate in Mathematics with an impressive score of 17.86 out of 20, which opened the doors to my enrollment at the Higher National School of Computer Science (formerly known as INI Algiers). This esteemed institution was my top choice, primarily for its exceptional software engineering program and the prestigious certification it offers. My journey began with a deep-rooted passion for programming in C and a curiosity for delving into advanced data structures, Assembly language, and the intricacies of computer architecture. The school has consistently exceeded my expectations, and during my first year, I embarked on a parallel path, venturing into web development.",
        },
        {
            title : "Services",
            content : "I specialize in crafting modern and responsive web applications using technologies like ReactJS and Node.js, ensuring that your digital presence stands out and engages your audience effectively. As a skilled Flutter developer, I offer cross-platform mobile application development, combining sleek and intuitive user interfaces with robust functionality. My proficiency extends to providing end-to-end solutions, from concept and design to development, testing, and deployment.",
        },
        {
            title : "Open Opportunities",
            content : "I am actively seeking opportunities for collaboration or job offers. With a strong commitment to meeting deadlines and a proven track record of delivering high-quality work, I am confident in my ability to contribute to your projects. My approach is founded on effective communication, teamwork, and a willingness to go the extra mile to achieve common goals. I believe that my skills and dedication make me a valuable asset to any team or organization. If you have any collaboration or job opportunities that align with my profile, I am eager to explore them further and discuss how I can contribute to your success.",
        },
        
    ];
    const [currentIndex , setCurrentIndex] = useState(0);
    return(
        <section className="flex justify-center items-center lg:pt-16 mb-20 " id="about"> 
            <div className=" w-[100%] sm:w-[80%] flex flex-col  justify-center items-center  ">
                <h1 className=" my-10 text-md  text-center">Get to know <br /> <span className="text-3xl text-[#7127BA] font-bold">About Me</span> </h1>
                <div className="h-[68vh] md:h-[62vh] lg:h-[50vh] flex justify-center items-center ">
                <div className="w-[98%] sm:w-[85%] lg:w-[80%]  pb-10 px-2 flex flex-col items-center border-2">
                    <p className="my-5 text-center text-2xl font-bold">{informations[currentIndex].title}</p>
                    <p className="text-center">{informations[currentIndex].content}</p>
                </div>
                </div>
                <div className="w-[60%]  flex flex-row items-center justify-evenly">
                <button onClick={previous} className={`bg-[#7127BA] px-4 w-28 md:w-32 h-10 rounded mt-10 ${currentIndex===0 ?"bg-[gray]" :""}`}> Previous</button>
                <button onClick={next} className={`bg-[#7127BA] px-4 h-10 w-28 md:w-32 rounded mt-10 ${currentIndex === informations.length-1 ?"bg-[gray]":""}`}> Next</button >
                </div>
            </div>
        </section>
    );
}

export default About;

// I'm an experienced web and mobile developer, skilled in crafting applications for both web and mobile platforms. I'm proficient in programming languages and tools necessary for designing responsive websites and native or hybrid mobile applications, and I'm passionate about technological innovation.