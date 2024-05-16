import React from 'react'
import LogoutButton from '../../utils/buttons/LogoutButton'
import SearchBar from '../../utils/SearchBar'
import MessagesCounter from '../../utils/MessagesCounter'

const HeaderRight = () => {
  return (
  <div className='sticky top-0 z-50 w-full bg-stone-300 px-8'>
    <div className="container flex h-16 items-center">
      <div className="text-center items-center space-x-2 md:flex px-2">
        <span className="text-center text-black text-2xl lg:text-[32px] font-semibold font-inter capitalize">
          OneInbox
        </span>
      </div>
      <div className="hidden items-center gap-4 text-sm lg:gap-6 lg:inline-block mx-14">
        <div className=" text-center mt-2">
          <span className="text-black text-sm font-normal font-['Oswald'] uppercase">
            bandeja de entradas
            <br />
          </span>
          <MessagesCounter />
        </div>
        
        
      </div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-4">
          <div className="flex gap-6 lg:gap-10">
            <LogoutButton/>
          </div>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default HeaderRight
