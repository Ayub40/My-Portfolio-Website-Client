
"use client";
import Image from "next/image";

const aboutMe = {
    name: "Ayub Khan",
    email: "ayubk4028@gmail.com",
    phone: "+8801688871098",
    Education: "B.Sc. (Hons), Physics",
    bio: "I am a full-stack developer passionate about building scalable apps with Next.js, Prisma, and MongoDB.",
};

const skills = {
    Frontend: [
        { name: "HTML5", image: "/html.png" },
        { name: "CSS", image: "/css.png" },
        { name: "JavaScript", image: "/javascript.png" },
        { name: "TypeScript", image: "/typescript (1).png" },
        { name: "React", image: "/reactJs.png" },
        { name: "Next JS", image: "/NextJs.png" },
        { name: "Redux", image: "/redux.svg" },
        { name: "TailwindCSS", image: "/tailwind.png" },
    ],
    Backend: [
        { name: "NodeJS", image: "/nodejs.png" },
        { name: "Express.js", image: "/Express.png" },
        { name: "Prisma", image: "/Prisma.png" },
        { name: "Firebase", image: "/firebase.png" },
        { name: "JWT", image: "/JWT.png" },
    ],
    Databases: [
        { name: "MongoDB", image: "/mongo-db.png" },
        { name: "PostgreSQL", image: "/postgresql.svg" },
        { name: "MySQL", image: "/mysql.png" },
    ],
    Tools: [
        { name: "Git", image: "/git.png" },
        { name: "GitHub", image: "/github.png" },
        { name: "Vercel", image: "/vercel.png" },
        { name: "Netlify", image: "/netlify.png" },
        { name: "NPM", image: "/npm.png" },
        { name: "Figma", image: "/figma.png" },
    ],
};

export default function AboutMe() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 mt-14">
            {/* About Info */}
            <div className="flex flex-col lg:flex-row items-center gap-5">
                {/* Left Side - Info */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-bold">{aboutMe.name}</h1>
                    <p className="text-gray-600">{aboutMe.bio}</p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> {aboutMe.email}
                    </p>
                    <p className="text-gray-700">
                        <strong>Education:</strong> {aboutMe.Education}
                    </p>
                    <p className="text-gray-700">
                        <strong>Phone:</strong> {aboutMe.phone}
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center lg:justify-end mt-10">
                    <Image
                        src="/AK.png"
                        alt="Ayub Khan"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                        priority
                    />
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16 space-y-10">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h2 className="text-2xl font-semibold mb-6">{category}</h2>
                        <div className="flex flex-wrap gap-8">
                            {items.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center space-y-2 w-24"
                                >
                                    <Image
                                        src={skill.image}
                                        alt={skill.name}
                                        width={60}
                                        height={60}
                                        className="rounded-md shadow-md"
                                    />
                                    <span className="text-sm text-center">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
