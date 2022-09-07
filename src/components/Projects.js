import React, { useState, useEffect } from 'react'
import { Nav } from './Nav'
import { BsFlower3 } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'

export const Projects = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sideMenu = document.getElementById('side-menu')
    if (sideMenu !== null && !open) {
      sideMenu.classList.remove('translate-x-0')
      sideMenu.classList.add('translate-x-full')
      setOpen(false)
    }
  })

  return (
    <div className="bg-amber-50 h-screen max-w-full grid md:grid-cols-12">
      <div className="hidden md:flex md:col-span-4">
        <Nav page='projects'></Nav>
      </div>
      {/* side menu */}
      <div id='side-menu' className="transform duration-300 ease-in-out md:hidden fixed z-40 h-screen w-full overflow-y-auto bg-amber-50 dark:bg-gray-800">
        <AiOutlineMenu className='place-self-end w-8 h-8 text-gray-400  absolute top-6 right-4 inline-flex items-center'
        onClick={() => {
          const sideMenu = document.getElementById('side-menu')
          sideMenu.classList.remove('translate-x-0')
          sideMenu.classList.add('translate-x-full')
          setOpen(false)
        }}></AiOutlineMenu>
        <Nav page='projects'></Nav>
      </div>
      <div className="md:col-span-8 overflow-y-auto font-mono md:pl-5 md:ml-3">
        {/* nav setup for mobile */}
        <div className='md:hidden pt-6 grid'>
          <AiOutlineMenu className='place-self-end mr-4 w-8 h-8 text-gray-400'
          onClick={() => {
            const sideMenu = document.getElementById('side-menu')
            sideMenu.classList.remove('translate-x-full')
            sideMenu.classList.add('translate-x-0')
            setOpen(true)
          }}></AiOutlineMenu>
          <div className="place-self-center mt-5 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 px-4 rounded-[2.75rem] w-fit h-auto align-middle border-none relative py-3 sm:max-w-xl sm:mx-auto">
            <span className="font-mono font-display max-w-sm lg:text-4xl md:text-3xl text-2xl font-semibold leading-tight">
            Lingzi (Susan) Zhang
            </span>
          </div>
        </div>
        <div className="px-6 pt-7 mb-3 mt-2 md:mt-16 lg:mt-2 text-2xl md:text-3xl font-bold underline underline-offset-4 decoration-blue-400 decoration-[3px]">
          <span>Projects</span>
        </div>
        {/* plantr */}
        <div className="grid place-items-center mb-8 text-center md:w-11/12 h-fit py-5 rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-200 shadow-lg">
          <div className="mb-2 text-xl md:text-2xl font-bold underline underline-offset-2 decoration-[3px] decoration-blue-400">
            Plantr
          </div>
          <div className="w-11/12 md:w-10/12 overflow-y-auto max-h-[32rem]">
            <img src={require('../images/plantr1.png')}
            className='mb-3'
            alt='Plantr upload page'/>
            <img src={require('../images/plantr2.png')}
            className='mb-3'
            alt='Plantr search result page'/>
            <img src={require('../images/plantr3.png')}
            className='mb-3'
            alt='Plantr more info on plant page'/>
          </div>
          {/* sm devices */}
          <div className="flex md:hidden mt-1 text-blue-500 text-sm justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Express
          </div>
          <div className="flex md:hidden mt-1 text-blue-500 text-sm justify-center">
            Pl@ntNet API &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; WikiJS &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Bootstrap
          </div>
          <div className="flex md:hidden mt-1 text-blue-500 text-sm justify-center">
            Google Cloud Natural Language API
          </div>
          {/* md devices */}
          <div className="hidden md:flex lg:hidden mt-1 text-blue-500 text-sm justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Express
          </div>
          <div className="hidden md:flex lg:hidden text-blue-500 text-sm justify-center">
            Pl@ntNet &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; WikiJS &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Bootstrap
          </div>
          <div className="hidden md:flex lg:hidden text-blue-500 text-sm justify-center">
            Google Cloud Natural Language API
          </div>
          {/* lg devices */}
          <div className="hidden lg:flex mt-1 text-blue-500 text-sm justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Express &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Pl@ntNet API &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; WikiJS
          </div>
          <div className="hidden lg:flex mt-1 text-blue-500 text-sm justify-center">
            Google Cloud Natural Language API &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Bootstrap
          </div>
          <div className="px-16 mb-2 text-base">
            <text className='underline underline-offset-2 decoration-2 decoration-blue-400'>PennApps XXIII Hackathon Best Use of Web Automation/non-REST API Data Sources</text>: A plant photo identification app allowing users to upload a picture/link and identify the plant species via the Pl@ntNet API.
            Performs sentiment analysis on the Wikipedia text about the plant obtained through web scraping.
          </div>
          <a href="https://github.com/susanzzz123/pennapps" target='_blank' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-bold text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group" rel="noreferrer">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">GitHub</span>
            <span className="relative invisible">GitHub</span>
          </a>
        </div>
        {/* campus wire lite */}
        <div className="grid place-items-center mb-8 text-center md:w-11/12 h-fit py-5 rounded-2xl bg-gradient-to-br from-indigo-200 to-sky-200 shadow-lg">
          <div className="mb-2 text-xl md:text-2xl font-bold underline underline-offset-2 decoration-[3px] decoration-blue-400">
            Campus Wire Lite
          </div>
          <div className="w-11/12 overflow-y-auto max-h-[32rem]">
            <img src={require('../images/loggedincw.png')}
            className='mb-3'
            alt='Campus Wire Lite logged-in question page'/>
            <img src={require('../images/loginpagecw.png')}
            alt='Campus Wire Lite'/>
          </div>
          {/* sm devices */}
          <div className="flex md:hidden mt-1 text-blue-500 text-sm justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Express
          </div>
          <div className="flex md:hidden mt-1 text-blue-500 text-sm justify-center">
            MongoDB &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Axios &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; TailwindCSS
          </div>
          {/* md devices */}
          <div className="hidden md:flex lg:hidden mt-1 text-blue-500 text-sm justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Express
          </div>
          <div className="hidden md:flex lg:hidden text-blue-500 text-sm justify-center">
            MongoDB &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Axios &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; TailwindCSS
          </div>
          {/* lg devices */}
          <div className="hidden lg:flex mt-1 text-blue-500 text-sm justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Express &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; MongoDB &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Axios &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; TailwindCSS
          </div>
          <div className="px-16 mb-2 text-base">
            A full stack Q&A app allowing logged-in users to post and answer questions. Users can only delete their own questions.
          </div>
          <a href="https://github.com/susanzzz123/Q-A-Platform-CWLite" target='_blank' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-bold text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group" rel="noreferrer">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">GitHub</span>
            <span className="relative invisible">GitHub</span>
          </a>
        </div>
        {/* dynamic personal blog */}
        <div className="grid place-items-center mb-8 text-center md:w-11/12 h-fit py-5 rounded-2xl bg-gradient-to-br from-pink-200 to-amber-100 shadow-lg">
          <div className="mb-2 text-xl md:text-2xl font-bold underline underline-offset-2 decoration-[3px] decoration-pink-400">
            Dynamic Personal Blog
          </div>
          <div className="w-11/12">
            <img src={require('../images/blog.png')}
            alt='Dynamic Personal Blog'/>
          </div>
          {/* sm devices */}
          <div className="flex md:hidden mt-1 text-pink-500 text-sm justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React
          </div>
          <div className="flex md:hidden text-pink-500 text-sm justify-center">
            Redux &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Bootstrap
          </div>
          {/* md and lg devices */}
          <div className="hidden md:flex mt-1 text-pink-500 text-sm justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Redux &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Bootstrap
          </div>
          <div className="px-16 mb-2">
            A frontend web app allowing user to create, edit, and delete blog posts with unique IDs.
            Store post information and manage relevant actions with redux.
          </div>
          <a href="https://github.com/susanzzz123/Q-A-Platform-CWLite" target='_blank' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-bold text-pink-600 transition duration-300 ease-out border-2 border-pink-500 rounded-full shadow-md group" rel="noreferrer">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">GitHub</span>
            <span className="relative invisible">GitHub</span>
          </a>
        </div>
        {/* comment app */}
        <div className="grid place-items-center mb-8 text-center justify-center md:w-11/12 h-fit py-5 rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-200 shadow-lg">
          <div className="mb-2 text-xl md:text-2xl font-bold underline underline-offset-2 decoration-[3px] decoration-blue-400">
            Comment App
          </div>
          <div className="w-11/12 md:w-8/12">
            <img src={require('../images/commentapp.png')}
            alt='Comment App'/>
          </div>
          <div className="mt-1 text-blue-500 text-sm flex justify-center">
            JavaScript &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; React &nbsp; <BsFlower3 className="mt-1"></BsFlower3>{' '}
            &nbsp; Bootstrap
          </div>
          <div className="px-16 mb-2">
            A frontend web app for user to create and reply to comments within three levels of depth. Recursively rendering the different depth of comments.
          </div>
          <a href="https://github.com/susanzzz123/react-comment-app" target='_blank' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-bold text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group" rel="noreferrer">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">GitHub</span>
            <span className="relative invisible">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}
