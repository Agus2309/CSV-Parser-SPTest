const Navbar: React.FC = () => {
    
    return(
        <>
        <header className='max-w-12xl mx-auto w-full px-8 py-3 lg:px-6 lg:py-4 absolute top-0 left-0 right-0 mb-10 z-20'>
            <div className='text-black flex items-center'>
                <svg
                className='h-10 lg:h-16 w-10 lg:w-16 text-violet-600'
                width='32'
                height='32'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'>
                <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                    ></path>
                </svg>
                <span className='text-lg lg:text-2xl font-bold'>
                <span className='text-violet-600'>CSV</span> Parser
                </span>
            </div>
        </header>
        </>
    )
}

export default Navbar