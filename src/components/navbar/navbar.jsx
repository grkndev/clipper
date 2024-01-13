import Image from 'next/image'
import Navlink from './component/navlink'

export default function Navbar() {
    return (
        <>
            <div className=' h-20 flex justify-between w-full items-center '>
                <div className='flex items-center gap-8'>
                    <div>
                        <img className='w-10 h-10' src='/twitch.png'></img>
                    </div>
                    <div>
                        <Navlink />
                    </div>
                </div>
                <div>
                    <button className='text-clipper bg-clipper/25 hover:bg-clipper/30    0 transition-all text-sm rounded-xl px-8  font-semibold py-2'>
                        Sign In
                    </button>
                </div>
            </div>
        </>
    )
}
