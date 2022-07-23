import React from 'react'

const FlexDemo = () => {
  return (
    <div className='w-screen h-screen bg-purple-400'>
            <div className="flex h-1/2 w-full justify-around items-start flex-wrap gap-4">
                <div className="item1 h-10 w-1/4 bg-red-300"></div>
                <div className="item1 h-10 w-1/4 bg-green-300"></div>
                <div className="item1 h-10 w-1/4 bg-white"></div>
                
                
            </div>
    </div>
  )
}

export default FlexDemo