import { Link } from 'react-router-dom'

function NoPage() {
    return (
        <>
            <h1 className="px-10">404 - Page Not Found.</h1>
            <p className="px-10 my-7">
                Well, this is awkward...<br /> Clearly, <span className="italic font-newsreader">this page doesn&apos;t exist</span>, just like your sense of direction. But hey, feel free to click around and try again.
            </p>
            <p className="px-10 my-7">
                Why not head back to the <Link to="/" className="italic font-newsreader underline-offset-4 hover:underline">homepage</Link> or explore the rest of the site? Who knows, you might stumble across something even better than what you were looking for. Happy exploring!
            </p>
        </>
    )
}

export default NoPage