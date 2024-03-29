const Footer: React.FC = () => {
    
    return(
        <>
        <footer className="w-full bg-gray-800 text-gray-300 py-8 px-4 lg:px-0 lg:py-18 rounded-t-xl static bottom-0 ">
            <div className="max-w-5xl w-full mx-auto grid lg:grid-cols-3">
                <div className="text-white flex items-center">
                    <svg className="h-10 lg:h-16 w-10 lg:w-16 text-violet-600" width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
                    </svg>
                    <span className="text-lg lg:text-2xl font-bold"><span className="text-violet-600">CSV</span> Parser</span>
                </div>
                <div className="my-4"></div>
                <div>
                    <h2>Made for <a href="https://shawandpartners.com/" className="text-violet-500 underline font-bold underline-offset-2">Shaw & Partners</a>.</h2>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer