import Link from 'next/link'
import Image from 'next/image'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import ObserverAnimations from '../layout/ObserverAnimations'

const BlogPost = () => {
  return (
    <section id='vtc' className='my-10  '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            <article className='flex justify-center items-center'>
                <h2 className='text-[var(--primary-color)] text-3xl font-bold mb-5 md:mb-0'>¿Qué es un VTC?</h2>
            </article>
            <aside className='flex justify-center overflow-hidden '>
                <Image
                className='w-[80%] rounded-xl custom-shadow'
                    src="/blog.png"
                    width={500}
                    height={500}
                    alt='blog que es un taxi-vtc'
                />
            </aside>
            <div className='flex justify-center items-center md:col-span-2 lg:col-span-1'>
                    <div className='px-5 w-full h-full flex flex-col justify-evenly text-center'>
                        <div>
                            <p className='font-italic text-2xl my-10'>"El futuro del desplazamiento: Las VTC son más baratas y más practicas que el taxi convencional."</p>
                        </div>
                        <ObserverAnimations animationType='jump'>

                        <div>
                            <Link href=''>
                                <button className='font-bold rounded inline-flex  items-center hover:text-[var(--secondary-color)]'>
                                    <span className='text-1xl  text-[#555] uppercase hover:text-[var(--secondary-color)]'>lee el artículo de Bárbara Gutiérrez</span>
                                    <BsFillArrowRightCircleFill className='md:ml-2 text-2xl' />
                                </button>
                            </Link>
                        </div>
                        </ObserverAnimations>
                    </div>
                </div>

            </div>
    </section>
  )
}

export default BlogPost