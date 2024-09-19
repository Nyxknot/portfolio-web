import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { TbArrowBackUpDouble } from "react-icons/tb";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <>
            <div className="scrollport lg:mx-auto lg:grid grid-cols-5 font-ropasans text-custom-text text-base max-w-screen-xl text-justify py-32 grow">
                <div className="lg:py-0 py-7 px-10 w-full">
                    {pathnames.length > 0 && (
                        <div>
                            <button onClick={() => navigate(-1)} className="flex gap-3 font-newsreader italic">

                                <span className="py-[0.1rem]"><TbArrowBackUpDouble /></span>
                                back
                            </button>
                            <nav className="flex my-4">
                                <ul className="inline-flex flex-wrap items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                    <li className="inline-flex items-center">
                                        <Link className="inline-flex items-center text-base font-medium text-custom-subtext hover:text-white" to="/">
                                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            <span className="underline underline-offset-4">Home</span>
                                        </Link>
                                    </li>
                                    {pathnames.map((value, index) => {
                                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                                        return (
                                            <li key={to}>
                                                <div className="flex items-center">
                                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                                    </svg>
                                                    <Link to={to} className="ms-1 text-base font-medium text-custom-subtext md:ms-2 hover:text-white underline underline-offset-4">
                                                        {value}
                                                    </Link>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>

                <div className="col-span-3">
                    <Outlet />
                </div>

            </div>
            <footer className="border-t border-[#2e2e2e] w-full font-ropasans text-custom-subtext">
                <div className="mx-auto max-w-screen-md py-4 px-9 flex items-center justify-between">
                    <span className="">© 2023 Powered by <a href="https://github.com/nyxknot" target="_blank" className="hover:underline underline-offset-4">Nyxknot</a>.
                    </span>
                    <div className="flex gap-2 h-fit">
                        <a href="https://www.linkedin.com/in/varnan-matela/" target="_blank"><FaLinkedin /></a>
                        <a href="https://github.com/Duisternis" target="_blank"><FaGithub /></a>
                        <a href="https://www.instagram.com/not.vrnn/" target="_blank"><AiFillInstagram /></a>
                        <a href="" target="_blank"><BsTwitterX /></a>
                        <a href="" target="_blank"><SiLeetcode /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout