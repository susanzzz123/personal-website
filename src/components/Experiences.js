import React from 'react'
import { Nav } from './Nav'

export const Experiences = () => {
  return (
    <div className="bg-amber-50 h-screen max-w-full grid grid-cols-12">
      <div className="col-span-4">
        <Nav page='experiences'></Nav>
      </div>
      <div className="col-span-8"></div>
    </div>
  )
}
