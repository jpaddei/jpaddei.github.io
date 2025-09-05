import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen">
            <RevealOnScroll>
                <div className="p-6">
                    <div className="mt-16 mb-6">
                        <h1 className="text-5xl">Hi, I'm Phillip (JP) Addei 👋</h1>
                        <br />
                        <p className="">
                            I graduated from the <span className="font-bold">University of Southern California</span> in December 2024 with a <span className="font-bold">Bachelor's Degree</span> in <span className="font-bold">Computer Science</span>. I am currently seeking an <span className="font-bold">entry-level software engineering position</span> where I can apply my skills in full-stack development.
                        </p>
                        <br />
                        <p>
                            During college, I was an active member of the Trojan Marching Band, worked as a sales associate at the USC Bookstore, and joined the Annenberg Media Web Team. These experiences strengthened my teamwork, communication, and time management skills.
                        </p>
                        <br />
                        <p>
                            I'm passionate about creating software that solves real-world problems by combining strong technical skills with creativity. Currently, I enjoy creating full-stack web applications with React, Node.js, and MongoDB as well as developing automation scripts with Python. In addition, I have experience working with many other languages and frameworks, and I am constantly learning about new ones to broaden my skill set.
                        </p>
                        <br />
                        <p>
                        My <a href="#skills" className="underline font-bold">technical skills</a> and <a href="#projects" className="underline font-bold">projects</a> are listed below. If you would like to contact me, you can email me at <a href="mailto:addei@usc.edu" className="underline font-bold">addei@usc.edu</a> or message me on <a href="https://www.linkedin.com/in/phillipaddei/" className="underline font-bold">LinkedIn</a>.
                        </p>
                    </div>
                    <div id="skills" className="text-center scroll-mt-16 mt-16">
                        <h2 className="text-4xl mb-6">Technical Skills</h2>
                        <div className="justify-start gap-20 mb-6 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
                            <div>
                                <h3 className="text-2xl mb-6">Programming Languages</h3>
                                <ul className="mb-6 list-disc list-inside bg-white/30 p-4 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg text-start duration-200">
                                    <li>C</li>
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SQL</li>
                                    <li>Swift</li>
                                    <li>Dart</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl mb-6">Frameworks</h3>
                                <ul className="mb-6 list-disc list-inside bg-white/30 p-4 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg text-start duration-200">
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>Flutter</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MongoDB</li>
                                    <li>Tailwind CSS</li>
                                    <li>Spring Boot</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl mb-6">Other</h3>
                                <ul className="mb-6 list-disc list-inside bg-white/30 p-4 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg text-start duration-200">
                                    <li>Linux</li>
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>RESTful APIs</li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="text-4xl mb-6">Classes Taken</h2>
                        <ul className="mb-6 list-disc list-inside bg-white/30 p-4 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg text-start duration-200">
                            <li>CSCI-430: Introduction to Computer and Network Security</li>
                            <li>CSCI-401: Capstone: Design and Construction of Large Software Systems</li>
                            <li>CSCI-360: Introduction to Artificial Intelligence</li>
                            <li>CSCI-356: Introduction to Computer Systems</li>
                            <li>CSCI-353: Introduction to Internetworking</li>
                            <li>CSCI-350: Introduction to Operating Systems</li>
                            <li>CSCI-310: Software Engineering</li>
                            <li>CSCI-270: Introduction to Algorithms and Theory of Computing</li>
                            <li>CSCI-201: Principles of Software Development</li>
                            <li>CSCI-170: Discrete Methods in Computer Science</li>
                            <li>CSCI-104: Data Structures and Object Oriented Design</li>
                            <li>ITP-368: Programming Graphical User Interfaces</li>
                            <li>ITP-342: iOS App Development</li>
                        </ul>
                    </div>
                    <div id="projects" className="scroll-mt-16 mt-16">
                        <h1 className="text-4xl mb-6 text-center">Projects</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="mb-6 bg-white/30 p-4 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg text-start duration-200 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-xl font-bold">CFB Schedule</h1>
                                    <h2>Full-stack web application providing NCAA college football schedules, scores, stats, and more</h2>
                                    <h3 className="text-gray-500 font-light mb-4">React, Tailwind CSS, JavaScript, Python, Node.js, Express.js, MongoDB</h3>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <a className="px-2 py-2 bg-blue-500/100 text-white border rounded shadow-sm hover:bg-blue-500/70 hover:-translate-y-0.5 hover:shadow-lg duration-300" href="https://cfb-schedule.onrender.com/">Website</a>
                                    <a className="px-2 py-2 bg-black/100 text-white border rounded shadow-sm hover:bg-black/70 hover:-translate-y-0.5 hover:shadow-lg duration-300" href="https://github.com/jpaddei/cfb-schedule">GitHub</a>
                                </div>
                            </div>
                            <div className="mb-6 bg-white/30 p-4 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg text-start duration-200 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-xl font-bold">Wordle Solver</h1>
                                    <h2>Solves a Wordle puzzle on an automated browser</h2>
                                    <h3 className="text-gray-500 font-light mb-4">Python</h3>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <a className="px-2 py-2 bg-black/100 text-white border rounded shadow-sm hover:bg-black/70 hover:-translate-y-0.5 hover:shadow-lg duration-300" href="https://github.com/jpaddei/Wordle-Solver">GitHub</a>
                                </div>
                            </div>
                            <div className="mb-6 bg-white/30 p-4 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg text-start duration-200 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-xl font-bold">Run Journey</h1>
                                    <h2>Workout Plan checklist for the mile, Couch to 5k, and Couch to 10k plans. Made for ITP-342.</h2>
                                    <h3 className="text-gray-500 font-light mb-4">Swift</h3>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <a className="px-2 py-2 bg-black/100 text-white border rounded shadow-sm hover:bg-black/70 hover:-translate-y-0.5 hover:shadow-lg duration-300" href="https://github.com/jpaddei/RunJourney">GitHub</a>
                                </div>
                            </div>
                            <div className="mb-6 bg-white/30 p-4 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg text-start duration-200 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-xl font-bold">Burger Haven</h1>
                                    <h2>Mobile ordering app for a generic fast food restaurant that allows customers to place orders online. Made for ITP-368.</h2>
                                    <h3 className="text-gray-500 font-light mb-4">Dart, Flutter, Android Studio</h3>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <a className="px-2 py-2 bg-black/100 text-white border rounded shadow-sm hover:bg-black/70 hover:-translate-y-0.5 hover:shadow-lg duration-300" href="https://github.com/jpaddei/FastFood">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};