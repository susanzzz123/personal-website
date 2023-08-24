import React from 'react'
import { Nav } from './Nav'
import { AiOutlineMenu } from 'react-icons/ai'

export const About = () => {
  return (
    <div className='bg-amber-50 h-full md:h-screen md:max-w-full'>
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-span-4 hidden md:flex md:ml-6">
          <Nav page='about'></Nav>
        </div>
        {/* side menu */}
        <div id='side-menu' className="transition-all translate-x-full duration-500 ease-in-out md:hidden fixed z-40 h-screen w-full overflow-y-auto bg-amber-50 dark:bg-gray-800 ">
          <AiOutlineMenu className='place-self-end w-8 h-8 text-gray-400  absolute top-6 right-4 inline-flex items-center'
          onClick={() => {
            const sideMenu = document.getElementById('side-menu')
            sideMenu.classList.remove('translate-x-0')
            sideMenu.classList.add('translate-x-full')
          }}></AiOutlineMenu>
          <Nav page='about'></Nav>
        </div>
        <div className='md:hidden pt-6 grid'>
          <AiOutlineMenu className='place-self-end mr-4 w-8 h-8 text-gray-400'
          onClick={() => {
            const sideMenu = document.getElementById('side-menu')
            sideMenu.classList.remove('translate-x-full')
            sideMenu.classList.add('translate-x-0')
          }}></AiOutlineMenu>
          <div className="place-self-center mt-5 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 px-4 rounded-[2.75rem] w-fit h-auto align-middle border-none relative py-3 sm:max-w-xl sm:mx-auto">
            <span className="font-mono font-display max-w-sm lg:text-4xl md:text-2xl text-2xl font-semibold leading-tight">
              Lingzi (Susan) Zhang
            </span>
          </div>
        </div>
        <div className="md:col-span-8 md:overflow-y-auto">
          <div className="grid place-items-center">
            <div className="md:col-span-1"></div>
            <div className="w-7/12 md:w-6/12 lg:w-1/5 px-4 mt-10 md:mt-20 lg:mt-20 mb-3 md:col-span-1">
              <img src={require('../images/self.png')} alt='Lingzi(Susan) Zhang'
              className='lg:outline lg:outline-4 lg:outline-[#979afc] lg:outline-offset-1 brightness-125 rounded-full h-auto align-middle transform transition-all
              lg:hover:-translate-y-4 duration-300 delay-50 ease-in-out' />
            </div>
            <div className="md:col-span-1"></div>
          </div>
          <div className="md:grid md:grid-cols-9 mt-1">
            <div className="md:col-span-1 w-3/4"></div>
            <div className="md:col-span-8 p-4 w-10/12 h-fit font-mono">
              <div className="pl-2 h-full rounded-lg shadow-lg bg-white">
                <div className="text-center md:text-left px-6 pt-5 md:pt-7 mb-3 md:mt-2 text-xl md:text-2xl font-bold underline underline-offset-4 decoration-blue-400 decoration-[3px]">
                  <span>About Me</span>
                </div>
                <div className="px-6 md:pt-2 pb-5">
                  <div className="text-base tracking-tight">
                    <p>
                      Hi there! I am Susan, a junior studying Computer Science at the
                      University of Pennsylvania. Interested in software development and web development, I am
                      eager to get hands-on with projects and build upon my previous experiences!
                      Despite my interests, I am always open to exploring various fields and seeking opportunities to
                      expand my knowledge and skill set.

                      Outside of computer science, you can find me rehearsing with the Penn Symphony Orchestra,
                      trying all kinds of food, and watching cat videos!
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex mt-5'>
                <div className="p-6 h-fit rounded-lg shadow-lg w-full bg-white">
                  <div className="text-center md:text-left mb-3 text-xl font-bold underline underline-offset-4 decoration-blue-400 decoration-[3px]">
                    <span>Languages</span>
                  </div>
                  <div className='pl-5'>
                    <div>
                      <ul className='list-disc'>
                        <li>Java</li>
                        <li>JavaScript/TypeScript</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>HTML/CSS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-6 h-fit rounded-lg shadow-lg w-full ml-10 bg-white">
                  <div className="text-center md:text-left mb-3 text-xl font-bold underline underline-offset-4 decoration-blue-400 decoration-[3px]">
                    <span>Frameworks</span>
                  </div>
                  <div className='pl-5'>
                    <ul className='list-disc'>
                      <li>Git/GitHub/GitLab</li>
                      <li>React/Node</li>
                      <li>Angular</li>
                      <li>MongoDB/Mongoose</li>
                      <li>Docker</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
