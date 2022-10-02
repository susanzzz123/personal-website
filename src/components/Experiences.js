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
      <div className="hidden md:flex md:col-span-4">
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
          <span>Experiences</span>
        </div>
        {/* Penn labs */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="bg-amber-50 shadow-xl rounded-xl p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className='w-10 h-10'>
                <img src={require('../images/pennlabs.jpg')} alt='Penn Labs'></img>
              </div>
              <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
