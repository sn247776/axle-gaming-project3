import React from 'react'

function StorePost() {
  return (
    <div className='bg-secondary/50 h-[500px]' style={{display:"grid", gridTemplateColumns:"5fr 4fr"}}>
        <div>
            <img className='h-full w-full object-cover' src='https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153184/emsabnuyzru6joyd3uei.webp'/>
            
        </div>
        <div>
            <h1 className="text-primary text-3xl font-bold">Comment</h1>
        </div>
    </div>
  )
}

export default StorePost