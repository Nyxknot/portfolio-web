import VeryCoolTable from "../components/VeryCoolTable";
import Transition from "../lib/Transition";

import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const importPosts = async () => {
        const rawPosts = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default' });

        const loadedPosts = await Promise.all(
            Object.entries(rawPosts).map(async ([path, resolver]) => {
                const raw = await resolver();
                const { data, content } = matter(raw);
                const slug = path.split('/').pop().replace('.md', '');
                const wordCount = content.split(/\s+/).length;
                const readingTime = Math.ceil(wordCount / 200);

                return { ...data, slug, readingTime };
                })
            );

            const sortedPosts = loadedPosts.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );

            setPosts(sortedPosts);
        };

        importPosts();
    }, []);


    return (
        <div>
            <h1 className="text-6xl px-9 pb-5">Blogs</h1>
            <p className="text-md px-10">Welcome to the blog section! <span className="font-newsreader italic">Click on the titles to read more</span>.</p>
            <VeryCoolTable posts={posts} />
        </div>
    );
}

export default Blog;