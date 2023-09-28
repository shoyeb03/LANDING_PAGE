import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://media.istockphoto.com/id/1223690610/photo/tropical-island-and-coral-reef-split-view-with-waterline.webp?b=1&s=170667a&w=0&k=20&c=ZM3_LaQN6fLGpOIE24UA4RrZVZAi4q2CUqtGpXmjypo=" alt="" 
          className='w-full h-full object-cover '
        />

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4 '>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic '>With WeekAway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere vel consectetur ratione tenetur explicabo, obcaecati dolore beatae, excepturi at eaque ipsa non fugit similique autem! Maiores distinctio saepe est?</p>
            </div>
        </div>
    </div>
  )
}

export default Hero