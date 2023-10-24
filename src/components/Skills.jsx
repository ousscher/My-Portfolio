import texture from '../assets/texture.png'

const Skills = ()=>{
    return(
        <div className="flex justify-center items-center flex-col mb-8" id="skills">
            <div className="mb-20">
                <p className="text-md text-center">What skills I have <br /><span className= " font-semibold text-[#7127BA] text-3xl">My Skills</span></p>
            </div>
            <div className="w-[90%] flex justify-evenly  pt-8">
                <div className='w-[35%] '>
                    <img src={texture} alt="texture" />
                </div>
                <div className='w-[60%] bg-[blac] flex flex-row justify-around  '>
                    <div className = "w-[30%] ">
                    <div className="  border-2 w-[100%]">
                    <div className="border-b-2 ">
                        {/* header */}
                        <p className="p-2">Languages</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >Java</p>
                        <p className="m-2 " >C</p>
                        <p className="m-2 " >Java Script</p>
                        <p className="m-2 " >Dart</p>
                    </div>
                    </div>
                    </div>
                    <div className='w-[30%]' >
                    <div className="  border-2 w-[100%] mb-4 ">
                    <div className="border-b-2 ">
                        <p className="p-2 ">Tools</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >Git/Github</p>
                        <p className="m-2 " >Figma</p>
                        <p className="m-2 " >Photoshop/Illustrator</p>
                    </div>
                    </div> 
                    <div className="  border-2 w-[100%] ">
                    <div className="border-b-2 ">
                        {/* header */}
                        <p className="p-2">Databases</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >SQLite</p>
                        <p className="m-2 " >MYSQL</p>
                        <p className="m-2 " >Mongo</p>
                    </div>
                    </div>
                    </div>
                    <div className='w-[30%]'>
                    <div className="  border-2 w-[100%] mb-4 ">
                    <div className="border-b-2 ">
                        {/* header */}
                        <p className="p-2">Frameworks</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >React.js/Vue.js</p>
                        <p className="m-2 " >Express.js</p>
                        <p className="m-2 " >Flutter</p>
                        <p className="m-2 " >React Native</p>
                    </div>
                    </div>
                    <div className="  border-2 w-[100%] mb-4 ">
                    <div className="border-b-2 ">
                        {/* header */}
                        <p className="p-2">Others</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >HTML5</p>
                        <p className="m-2 " >CSS3</p>
                        <p className="m-2 " >TailwindCss</p>
                        <p className="m-2 " >Firebase</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Skills;