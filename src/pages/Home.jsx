import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import GetGitHubRepos from '../services/GetGitHubRepos'
import { useEffect, useState } from 'react';
import { TextFade } from '../lib/Animation';
import Transition from '../lib/Transition';

function Home() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const data = await GetGitHubRepos('duisternis');
                setRepos(data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        }

        fetchRepos();
    }, []);
    
    return (
        <div>
            <div className="px-10 home-intro">
                <h1>Varnan Matela <span className="font-times italic mx-5">/ʋɐɾnɐnɐ/</span></h1>

                <p className="my-6">
                    Enhancing productivity through automation and building polished web applications. Passionate about exploring new technologies and refining my skills.
                </p>
                <p>
                    I have substantial experience with React.js and am currently exploring Angular. I have developed several projects automating tasks using Python with Tkinter for the GUI.
                </p>
            </div>


            <h1 className='px-10 font-newsreader italic mt-12 mb-4'>Showcase</h1>
            <div className="px-10 flex overflow-x-auto lg:overflow-x-hidden">
                <Cards title="IEEE" link="/IEEE" ext_left={true} ext_right={false}>
                    IEEE JUIT Student Branch is a <span className="font-newsreader italic">technical club</span> at JUIT doing innovative things and inventing new things.
                </Cards>
                <Cards title="Blogs" link="/blog" ext_left={false} ext_right={false}>
                    Writing stuff down before I forget what I was doing. 
                </Cards>
            </div>

            <h1 className='px-10 font-newsreader italic mt-12 mb-4'>Recent GitHub Repos</h1>
            <div className="px-10 flex overflow-x-auto lg:overflow-x-hidden">
                {repos.map((repo, idx) => (
                    <Cards key={repo.name} title={repo.name} link={repo.url} ext_left={idx === 0} ext_right={idx === repos.length-1}>
                        {repo.description || 'No description provided'}
                    </Cards>
                ))}
            </div>
            <Link to='https://github.com/duisternis' target="_blank" className='px-10 mt-7 flex flex-row-reverse font-newsreader italic'>more...</Link>

            <div className="px-10 home-outro mt-12">
                <h1>Now</h1>

                <p className="mt-6">
                    Currently, a third-year CSE student. While focusing on backend development with ASP.NET, I&apos;m also exploring machine learning and cloud technologies. My goal is to build high-quality software that makes a difference.
                </p>
            </div>

            <div className="px-10 home-contact mt-12">
                <h1>Contact</h1>

                <p className="mt-6">
                    Reach me at <a className="font-newsreader italic underline underline-offset-4" href="mailto:me@varnanmatela.in">me@varnanmatela.in</a>.
                </p>
            </div>
        </div>
    )
}

export default Transition(Home);