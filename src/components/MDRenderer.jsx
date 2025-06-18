import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { LiaReadme } from "react-icons/lia";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { srcery as customStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import VeryCoolCard from './VeryCoolCard';

const MDRenderer = ({ meta, content }) => {

  const date = new Date(meta.date);
  const betterDate = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);

  return (
    <div>
      <div className='mb-14'>
        <div className='flex justify-between items-center w-full mb-8 p-1'>
          <p className="text-gray-500 mb-2">{betterDate}</p>
          <p className="text-gray-500 mb-2 hover:underline underline-offset-4">
            <a href={`https://${meta.website}`} target="_blank">{meta.website}</a>
          </p>
          <p className="text-gray-500 mb-2 flex gap-2 items-center"><LiaReadme /> <span>{meta.readingTime} min read</span></p>
        </div>

        <h1 className="text-7xl font-bold mb-4">{meta.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.tags && meta.tags.length > 0 ? meta.tags.map((tag, index) => (
            <span key={index} className="px-1 font-thin transition-all hover:bg-blue-300 hover:text-custom-background cursor-pointer text-gray-400 rounded-sm italic tracking-wider">#{tag}</span>
          )) : <span className="text-gray-500">No tags</span>}
        </div>
      </div>
      <div className='prose-container'>
        <Markdown
          children={content}
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <VeryCoolCard cardContent={{
                  title: match[1],
                  code_content: children,
                  description: <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={customStyle}
                  />
                }} />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    </div>
  );
};

export default MDRenderer;