import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
      <div className="flex gap-5 text-5xl font-semibold sm:text-3xl">
        <h1 className="text-secondary s">S</h1>
        <h1 className="text-white n">N</h1>
        <h1 className="text-tertiery m">M</h1>
      </div>
    </div>
  )
}

export default Loader
