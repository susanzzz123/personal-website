import React, { useState, useEffect } from 'react'
import { Nav } from './Nav'
import { AiOutlineMenu } from 'react-icons/ai'

export const Experiences = () => {
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
      <div className="hidden md:flex md:col-span-4 md:ml-6">
        <Nav page='experiences'></Nav>
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
        <Nav page='experiences'></Nav>
      </div>
      <div className="md:col-span-8 overflow-y-auto font-mono md:pl-5 md:ml-4">
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
        <div className="px-6 pt-7 mb-5 mt-2 md:mt-16 lg:mt-2 text-2xl md:text-3xl font-bold underline underline-offset-4 decoration-blue-400 decoration-[3px]">
          <span>Experiences</span>
        </div>
        <div className='md:grid md:justify-center md:w-11/12 lg:w-9/12 max-w-full md:ml-5 lg:ml-12'>
          {/* Penn labs */}
          <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col justify-between leading-normal mb-6">
            <div className="ml-2">
              <div className='w-10 h-10'>
                <img src={require('../images/pennlabs.jpg')} alt='Penn Labs'></img>
              </div>
              <div className="text-gray-900 font-bold text-xl">Penn Labs</div>
              <div className='text-gray-500 text-sm mb-2'>Frontend Developer&nbsp;|&nbsp; Sep 2022 - Present</div>
              <div className="text-gray-700 text-base">
                Maintain and develop new frontend features, such as new course search filters,  in collaboration with a team of 8 designers and other developers for the Penn Courses products serving thousands of student on campus.
                <div className='text-blue-600'>
                  <a href='https://pennlabs.org/products/penn-course-plan'
                  target='_blank' rel="noreferrer"
                  className='hover:text-blue-500 underline'>{'[Penn Course Plan]'}</a>
                  &nbsp;
                  <a href='https://pennlabs.org/products/penn-course-review'
                  target='_blank' rel="noreferrer"
                  className='hover:text-blue-500 underline'>{'[Penn Course Review]'}</a>
                  &nbsp;
                  <a href='https://pennlabs.org/products/penn-course-alert'
                  target='_blank' rel="noreferrer"
                  className='hover:text-blue-500 underline'>{'[Penn Course Alert]'}</a>
                </div>
              </div>
            </div>
          </div>
          {/* Hack4Impact */}
          <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col justify-between leading-normal mb-6">
            <div className="ml-2">
              <div className='w-10 h-10'>
                <img src={require('../images/hack.jpg')} alt='Penn Labs'></img>
              </div>
              <div className="text-gray-900 font-bold text-xl">Hack4Impact</div>
              <div className='text-gray-500 text-sm mb-2'>Software Developer&nbsp;|&nbsp; Sep 2022 - Present</div>
              <p className="text-gray-700 text-base">
                Work on software solutions that serve nonprofits in the Philadelphia community. An example is a resource
                tree for the Penn Abuse and Sexual Assault Prevention group at Penn to better centralize resources for victims and supporters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
