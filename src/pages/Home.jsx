import { Link } from 'react-router-dom'
import Cards from '../components/Cards'

function Home() {
    return (
        <>
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
            <div className="remove-scrollbar px-10 flex gap-4 overflow-y-scroll">
                <Cards title="IEEE" link="/IEEE">
                    IEEE JUIT Student Branch is a <span className="font-newsreader italic">technical club</span> at JUIT doing innovative things and inventing new things.
                </Cards>
            </div>

            <h1 className='px-10 font-newsreader italic mt-12 mb-4'>Automation</h1>
            <div className="remove-scrollbar px-10 flex gap-4 overflow-y-scroll">
                <Cards title="File-Management-System" link="https://github.com/Duisternis/File-Management-System">
                    Performance focused FMS to reduce cluttering.
                </Cards>
                <Cards title="Physics-Experiment-Analysis-Tool" link="https://github.com/Duisternis/Physics-Experiment-Analysis-Tool">
                    Automating graphs, and calculating results based on experimental data.
                </Cards>
                <Cards title="Timetable-Parser" link="https://nyxknot.gitbook.io/time-connect">
                    Bad excel data refactoring with highly customizable filtering features.
                </Cards>
            </div>
            <Link to='https://github.com/duisternis' target="_blank" className='mt-7 flex flex-row-reverse font-newsreader italic'>more...</Link>

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
        </>
    )
}

export default Home