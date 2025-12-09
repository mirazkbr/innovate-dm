import React from 'react'

const Gradient = () => {
  return (
    <div className='w-full h-auto relative'>
        <div className='absolute top-[250px] left-[30%] w-[30%] aspect-square rounded-full blur-[500px] opacity-30 z-[1]' style={{backgroundImage: 'radial-gradient(circle, #FEC35F, #987539)', }}>
                
        </div>
        <div className='absolute top-[30px] left-[-20%] w-[30%] aspect-square rounded-full blur-[300px] z-[2] opacity-30' style={{backgroundImage: 'radial-gradient(circle, #EBF7E9, #8A9189)', }}>
                 
        </div>
        <div className='absolute top-[900px] right-[0%] w-[50%] aspect-square rounded-full blur-[300px] z-[2] opacity-10' style={{backgroundImage: 'radial-gradient(circle, #8454F5, #4D318F)', }}>
                 
        </div>
        <div className='absolute top-[900px] left-[0%] w-[50%] aspect-square rounded-full blur-[300px] z-[2] opacity-10' style={{backgroundImage: 'radial-gradient(circle, #8454F5, #4D318F)', }}>
                 
        </div>
    </div>
  )
}

export default Gradient