export const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white/0 z-40 shadow-md backdrop-blur-xs hover:shadow-lg duration-200">
            <div className="flex justify-between items-center px-6 py-4">
                <a href="" className="text-xl  text-black">
                    Phillip (JP) Addei
                </a>
                <div className="flex gap-6">
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="https://github.com/jpaddei" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/phillipaddei/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </nav>
    )
}