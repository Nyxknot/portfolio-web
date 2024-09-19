import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function Cards({ title, children, link }) {
    return (
        <div className="flex flex-col gap-3 min-w-[14.5rem] w-[14.5rem]">
            <Link to={link} target={(link.substring(0, 4) == "http") ? "_blank" : "_self"}>
                <h1 className="flex gap-1 items-center">
                    <span className="underline underline-offset-4">{title}</span>
                    <GoArrowUpRight />
                </h1>
            </Link>
            <p className="text-custom-subtext">{children}</p>
        </div>
    )
}

export default Cards