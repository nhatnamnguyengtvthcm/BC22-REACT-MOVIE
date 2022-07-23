import React from 'react'

const DemoGrid = () => {
  return (
    <div className='container'>
        <div className="grid grid-cols-4 gap-4">
            <div className='bg-red-400'>1</div>
            <div className='bg-green-400'>2</div>
            <div className='bg-gray-400'>3</div>
            <div className='bg-yellow-400'>4</div>
        </div>
    </div>
  )
}

export default DemoGrid