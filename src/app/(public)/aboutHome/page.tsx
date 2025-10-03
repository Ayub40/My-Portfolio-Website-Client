/* eslint-disable @next/next/no-img-element */

const skills = {
    Frontend: [
        { name: "HTML5", icon: "/html.png" },
        { name: "CSS", icon: "/css.png" },
        { name: "JavaScript", icon: "/javascript.png" },
        { name: "TypeScript", icon: "/typescript (1).png" },
        { name: "React", icon: "/reactJs.png" },
        { name: "Next JS", icon: "/NextJs.png" },
        { name: "Redux", icon: "/redux.svg" },
        { name: "TailwindCSS", icon: "/tailwind.png" },
    ],
    Backend: [
        { name: "NodeJS", icon: "/nodejs.png" },
        { name: "Express.js", icon: "/Express.png" },
        { name: "Prisma", icon: "/Prisma.png" },
        { name: "JWT", icon: "/JWT.png" },
    ],
    Databases: [
        { name: "MongoDB", icon: "/mongo-db.png" },
        { name: "PostgreSQL", icon: "/postgresql.svg" },
        { name: "MySQL", icon: "/mysql.png" },
    ],
    Tools: [
        { name: "Firebase", icon: "/firebase.png" },
        { name: "Git", icon: "/git.png" },
        { name: "GitHub", icon: "/github.png" },
        { name: "Vercel", icon: "/vercel.png" },
        { name: "Netlify", icon: "/netlify.png" },
        { name: "NPM", icon: "/npm.png" },
        { name: "Figma", icon: "/figma.png" },
    ],
};

const aboutMe = {
    name: "Ayub Khan",
    Education: "B.Sc. (Hons), Physics",
    email: "ayubk4028@gmail.com",
    phone: "+8801688871098",
};



const Skill = () => {
    const infoList = [
        { label: "Name", value: aboutMe.name },
        { label: "Email", value: aboutMe.email },
        { label: "Phone", value: aboutMe.phone },
        { label: "Education", value: aboutMe.Education },
    ];

    return (
        <section className="p-6 text-white rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">

            {/* About Me Section */}
            <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold uppercase text-black">About Me</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {infoList.map((info, index) => (
                        <div
                            key={index}
                            className="h-[60px] w-full px-4 py-2 border-2 border-gray-500 rounded-3xl flex items-center justify-center 
                     bg-[#1F2937] text-white font-medium transition-all duration-300 hover:bg-gray-800 hover:text-white"
                        >
                            <strong className="mr-2">{info.label}:</strong> {info.value}
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="container p-4 mx-auto text-center ">
                <h2 className="text-2xl font-bold uppercase text-black">Skills I Know</h2>
            </div>

            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mt-4">
                    <h3 className="text-2xl font-semibold mb-2 text-black">{category}:</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {skillList.map((skill, index) => (
                            <div key={index} className="tooltip tooltip-bottom text-white" data-tip={skill.name}>
                                <button className="h-[60px] w-full sm:w-[185px] px-4 py-2 border-2 border-gray-500 rounded-3xl flex items-center gap-3 bg-[#1F2937] transition-all duration-300 hover:bg-gray-800 hover:text-white ">
                                    <img src={skill.icon} alt={`${skill.name} logo`} className="w-[35px]" />
                                    <h3 className="text-lg font-[500]">{skill.name}</h3>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skill;
