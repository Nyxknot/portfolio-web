import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MDRenderer from './MDRenderer';
import NoPage from '../pages/NoPage';
import Transition from '../lib/Transition';

import matter from 'gray-matter';
import { Buffer } from 'buffer';

const BlogPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        window.Buffer = Buffer;
        
        const res = await fetch(`/src/posts/${slug}.md`);
        const contentType = res.headers.get('content-type');

        if (!res.ok || !contentType?.includes('text/markdown')) {
          throw new Error('Post not found');
        }

        const raw  = await res.text();
        const { content, data } = matter(raw);

        setContent(content);
        const wordCount = content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);
        setMeta({ ...data, readingTime });

      } catch (err) {
        setError(true);
        console.error('Error loading post:', err);
      }
    };

    loadPost();
  }, [slug]);

  if (error) return <NoPage />;
  if (!content) return <div className="animate-pulse text-gray-400">Loading...</div>;

  return (
    <div className="py-6 px-10">
      <MDRenderer content={content} meta={meta} />
    </div>
  );
};

export default BlogPage;
