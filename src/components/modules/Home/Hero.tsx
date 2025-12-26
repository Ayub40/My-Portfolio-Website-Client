"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    const githubLink = () => window.open("https://github.com/Ayub40", "_blank");
    const linkedinLink = () => window.open("https://www.linkedin.com/in/ayub-khan-dev/", "_blank");
    const whatsappLink = () => window.open("https://wa.me/+8801688871098", "_blank");

    return (
        <div className="hero rounded-lg relative m-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl mt-28 px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Hi 👋,</h1>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-2">
                        I’m <span className="inline-block mb-3">Ayub Khan</span> <br />
                        <span className="text-[#22C55E]">Full Stack</span> Developer
                    </h1>
                    <p className="py-4 text-[#9CA3AF] text-base md:text-lg font-medium mb-6">
                        I am a passionate and dedicated Web Developer with a solid foundation
                        in modern web technologies. I am committed to continuous learning
                        and delivering high-quality solutions that enhance user experience.
                    </p>

                    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-4">
                        <Link href="/Ayub Khan.pdf" target="_blank">
                            <button className="px-4 py-2 text-white flex items-center gap-2 bg-[#1F2937] hover:bg-[#374151] rounded-md">
                                Resume <MdOutlineFileDownload className="text-[#22C55E] text-lg" />
                            </button>
                        </Link>
                        <button onClick={githubLink} className="px-4 py-2 text-white flex items-center gap-2 bg-[#1F2937] hover:bg-[#374151] rounded-md">
                            Github <FaGithub className="text-[#22C55E] text-lg" />
                        </button>
                        <button onClick={linkedinLink} className="px-4 py-2 text-white flex items-center gap-2 bg-[#1F2937] hover:bg-[#374151] rounded-md">
                            Linkedin <FaLinkedinIn className="text-[#22C55E] text-lg" />
                        </button>
                        <button onClick={whatsappLink} className="px-4 py-2 text-white flex items-center gap-2 bg-[#1F2937] hover:bg-[#374151] rounded-md">
                            WhatsApp <FaWhatsapp className="text-[#22C55E] text-lg" />
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center lg:justify-end">
                    <Image
                        // src="/Ayub Khan.jpg"
                        src="/AK.png"
                        alt="Ayub Khan"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
