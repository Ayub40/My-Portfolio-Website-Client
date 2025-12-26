import { Mail, Phone, GraduationCap, MapPin, ExternalLink } from "lucide-react";

const aboutMe = {
    name: "Ayub Khan",
    designation: "Full Stack Web Developer",
    education: "B.Sc. (Hons) in Physics",
    institution: "National University, Bangladesh",
    email: "ayubk4028@gmail.com",
    phone: "+8801688871098",
    address: "Bangladesh"
};

export default function EducationContact() {
    return (
        <section className="py-20 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* ================= EDUCATION SECTION ================= */}
                    <div className="relative group">

                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                        <div className="relative flex flex-col h-full p-8 bg-[#161e2b] border border-white/5 rounded-2xl shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-500/10 rounded-xl">
                                    <GraduationCap className="w-8 h-8 text-blue-400" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-xl font-bold text-gray-100 mb-2">
                                    {aboutMe.education}
                                </h3>
                                <div className="flex items-center gap-2 text-blue-300/80 font-medium">
                                    <MapPin className="w-4 h-4" />
                                    <span>{aboutMe.institution}</span>
                                </div>
                                <div className="mt-4 w-12 h-1 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* ================= CONTACT SECTION ================= */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                        <div className="relative flex flex-col h-full p-8 bg-[#161e2b] border border-white/5 rounded-2xl shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-emerald-500/10 rounded-xl">
                                    <Phone className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href={`mailto:${aboutMe.email}`}
                                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all group/item"
                                >
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                                            {aboutMe.email}
                                        </span>
                                    </div>
                                    {/* <ExternalLink className="w-4 h-4 text-gray-600 group-hover/item:text-emerald-400" /> */}
                                </a>

                                <a
                                    // href={`tel:${aboutMe.phone}`}
                                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all group/item"
                                >
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-5 h-5 text-emerald-400" />
                                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                                            {aboutMe.phone}
                                        </span>
                                    </div>
                                    {/* <ExternalLink className="w-4 h-4 text-gray-600 group-hover/item:text-emerald-400" /> */}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
