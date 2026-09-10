import React from 'react'

const RightCardContent = (props) => {
  return (
    
      <div className='absolute top-0 left-0 h-full w-full p-8 flex-col flex justify-between'>
         <h2 className='bg-white Text-xl rounded-full h-12 w-12  font-bold flex justify-center items-center'>{props.id+1}</h2>
         <div>
            <p className='text leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque at omnis sint, modi molestiae.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    
  )
}

export default RightCardContent
