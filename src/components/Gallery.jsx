import React from 'react'

const Gallery = () => {
  return (
    <div id='Gallery' className='max-w-[1140px] m-auto  w-full px-4 py-16'>
    <h2 className='text-center text-gray-700  p-4'> Gallery</h2>

    <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1561811358-21aef14f0551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Ujg0OXRhcWxvYWd8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60" alt="image" />
        </div>

        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1545647274-96644da34363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjU1MjQ2NTZ8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60" alt="image" />
        </div>

        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1537387788952-cffe9f8d3090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTE0Nzg5OTB8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60" alt="image" />
        </div>

        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1570437532713-a7999acef339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDkzMzE5M3x8ZW58MHx8fHx8&dpr=1&auto=format&fit=crop&w=294&h=294&q=60" alt="image" />
        </div>

        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1643479530443-3fb61e53d8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTg2MjY5NHx8ZW58MHx8fHx8&dpr=1&auto=format&fit=crop&w=294&h=294&q=60" alt="image" />
        </div>
    </div>


    </div>
  )
}

export default Gallery