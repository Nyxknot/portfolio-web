import { Link } from "react-router-dom";

function VeryCoolTable({ posts }) {
    return (
        <section className="container px-10 mx-auto">
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden">

                            <table className="min-w-full divide-y divide-gray-700">
                                <thead className="text-left text-custom-subtext">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 font-normal">
                                            Title
                                        </th>

                                        <th scope="col" className="px-12 py-3.5 font-normal">
                                            Date
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 font-normal">
                                            Tags
                                        </th>

                                        <th scope="col" className="relative py-3.5 px-4">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    { posts.map(post => (
                                        <tr key={post.slug}>
                                            <td className="px-4 py-4 font-medium whitespace-nowrap">
                                                <div>
                                                    <h2 className="font-medium text-white">
                                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                                    </h2>
                                                    <p className="font-normal text-sm text-custom-subtext hover:underline underline-offset-4">
                                                        <a href={`https://${post.website}`} target="_blank">{post.website}</a>
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 font-medium whitespace-nowrap">
                                                <div className="">
                                                    <Link to={`/blog/${post.slug}`}>{post.date}</Link>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap" style={{minWidth: '200px'}}>
                                                <div>
                                                    <h4 className="text-gray-500 flex flex-wrap gap-2">
                                                        {post.tags.length > 0 ? post.tags.map((tag, index) => (
                                                            <span key={index} className="px-1 font-thin transition-all hover:bg-blue-300 hover:text-custom-background cursor-pointer text-gray-400 rounded-sm italic tracking-wider">
                                                                #{tag}
                                                            </span>
                                                        )) : <span className="text-gray-500">No tags</span>}
                                                    </h4>
                                                </div>
                                            </td>

                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="px-1 py-1 text-gray-300">
                                                    <Link to={`/blog/${post.slug}`}> {post.readingTime} min</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VeryCoolTable;