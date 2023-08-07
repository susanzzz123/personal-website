import React from 'react'
import { Footer } from './Footer'
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'
import pdf from '../files/resume.pdf'

export const Nav = ({ page }) => {
  return (
    <div className="text-center md:pl-6 max-w-full mt-16 md:mt-40 lg:mt-32 ml-16">
      <div className="grid place-items-center divide-y-2 divide-dotted divide-gray-600">
        <div className="mt-3 px-4 rounded-[2.75rem] w-fit h-auto align-middle border-none relative py-3 sm:max-w-xl sm:mx-auto">
          <span className="hollow-font font-mono font-display max-w-sm text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Lingzi (Susan) Zhang
          </span>
        </div>
        <div className="mt-5 md:mt-7">
          {/* about */}
          <div className="relative py-4 sm:max-w-xl sm:mx-auto mt-8">
            <a href="/" className="font-mono font-display max-w-sm text-xl font-semibold leading-tight">
              <span className={(page === 'about') ? 'underline underline-offset-2 decoration-[#a6a8ff] decoration-[3px] link link-underline link-underline-black text-black' : 'link link-underline link-underline-black text-black'}>
                About
              </span>
            </a>
          </div>
          {/* experiences */}
          <div className="relative py-4 sm:max-w-xl sm:mx-auto">
            <a href="/experiences" className="font-mono font-display max-w-sm text-xl font-semibold leading-tight">
                <span className={(page === 'experiences') ? 'underline underline-offset-2 decoration-[#a6a8ff] decoration-[3px] link link-underline link-underline-black text-black' : 'link link-underline link-underline-black text-black'}>
                Experiences
                </span>
            </a>
          </div>
          {/* projects */}
          <div className="relative py-4 sm:max-w-xl sm:mx-auto">
            <a href="/projects" className="font-mono font-display max-w-sm text-xl font-semibold leading-tight">
              <span className={(page === 'projects') ? 'underline underline-offset-2 decoration-[#a6a8ff] decoration-[3px] link link-underline link-underline-black text-black' : 'link link-underline link-underline-black text-black'}>
                Projects
              </span>
            </a>
          </div>
          {/* resume */}
          <div className="relative py-4 sm:max-w-xl sm:mx-auto">
            <a href={pdf} rel="noreferrer" target='_blank' className="font-mono font-display max-w-sm text-xl font-semibold leading-tight">
              <span className="link link-underline link-underline-black text-black">
                Resume
              </span>
            </a>
          </div>
          <div className="py-2">
            <a href="mailto:szhang25@seas.upenn.edu" className="relative inline-block px-2 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-amber-50 border-2 border-black group-hover:bg-black"></span>
              <span className="relative font-mono text-black group-hover:text-white">szhang25@seas.upenn.edu</span>
            </a>
          </div>
          <div className="flex justify-center mt-3">
            <a href="https://github.com/susanzzz123" target='_blank' rel="noreferrer">
              <BsGithub className="w-6 h-6 mr-3 hover:text-gray-700 cursor-pointer"/>
            </a>
            <a href="https://www.linkedin.com/in/lingzi-susan-zhang/" target='_blank' rel="noreferrer">
              <ImLinkedin2 className="w-5 h-5 hover:text-gray-700 cursor-pointer"/>
            </a>
          </div>
          {/* <div className='mt-8'>
            <Footer></Footer>
          </div> */}
        </div>
      </div>
    </div>
  )
}
