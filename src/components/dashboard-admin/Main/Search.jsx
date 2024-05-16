import React from 'react'

const Search = () => {
  return (
    <div className="flex-shrink-0 px-4 py-2 items-center justify-between flex mt-3">
       <input
         placeholder="Search..."
         className='p-2 border-b rounded-2xl  border-gray-300 focus:outline-none focus:bourder-[0.5px] focus:border-slate-500 w-full'
       />
    </div>
  )
}

export default Search
