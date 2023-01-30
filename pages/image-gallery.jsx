import React, { useEffect, useRef } from 'react'



const imageGallery = () => {
    const galleryRef = useRef()


    // Efekt poruszania sie po przestrzeni
    useEffect(() => {
        const listener = (e) => {
            const mouseX = e.clientX
            const mouseY = e.clientY

            const xDecimal = mouseX / window.innerWidth
            const yDecimal = mouseY / window.innerHeight

            const maxX = galleryRef.current.offsetWidth - window.innerWidth
            const maxY = galleryRef.current.offsetHeight - window.innerHeight

            const panX = maxX * xDecimal * -1

            const panY = maxY * yDecimal * -1

            galleryRef.current.animate({
                transform: `translate(${panX}px, ${panY}px)`
            }, {
                duration: 9000,
                fill: 'forwards',
                easing: 'ease'
            })
        }

        window.addEventListener('mousemove', listener)


        return () => {
            window.removeEventListener('mousemove', listener)
        }

    }, [galleryRef])

    return (
        // Body
        <section className='h-screen m-0 overflow-hidden bg-[rgb(10, 10, 10)]' >
            {/* Gallery */}
            <div ref={galleryRef} className='h-[140vmax] w-[140vmax] absolute'>
                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-200 hover:transform hover:scale-110 h-[14%] w-[20%] left-[5%] top-[5%]  '>

                    <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />

                </div>

                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-500 hover:transform hover:scale-110 h-[24%] w-[14%] left-[42%] top-[12%] '>


                    <img src="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />
                </div>


                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-300 hover:transform hover:scale-110 h-[18%] w-[16%] left-[12%] top-[34%] '>


                    <img src="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />
                </div>


                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-400 hover:transform hover:scale-110 h-[14%] w-[12%] left-[45%] top-[48%] '>


                    <img src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />
                </div>


                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-800 hover:transform hover:scale-110 h-[16%] w-[32%] left-[8%] top-[70%] '>


                    <img src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />
                </div>


                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-200 hover:transform hover:scale-110 h-[24%] w-[24%] left-[68%] top-[8%] '>


                    <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />
                </div>


                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-700 hover:transform hover:scale-110 h-[16%] w-[20%] left-[50%] top-[74%] '>


                    <img src="https://images.unsplash.com/photo-1520338258525-606b90f95b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />
                </div>


                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-500 hover:transform hover:scale-110 h-[24%] w-[18%] left-[72%] top-[42%] '>


                    <img src="https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />
                </div>


                <div className='group rounded-md absolute transition duration-700 ease-in-out bg-orange-600 hover:transform hover:scale-110 h-[10%] w-[8%] left-[84%] top-[84%] '>


                    <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" className='object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-md opacity-0 group-hover:opacity-100' />
                </div>



            </div>
        </section>
    )
}



export default imageGallery