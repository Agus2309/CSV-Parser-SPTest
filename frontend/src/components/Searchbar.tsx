import React from "react"

interface SearchBarProps {
  value: string
  onChange: (newValue: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value); 
  };
    
    return(
        <>
        <form className="border-2 border-black group rounded py-4 px-4 lg:px-8 gap-8 flex flex-col pt-20 lg:py-4 lg:flex-row shadow-lg relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 absolute top-6 left-4 lg:left-6 z-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
            </svg>
            <input
                type="text"
                value = { value }
                onChange = { handleSearch }

                className="absolute lg:placeholder-text-base placeholder-text-sm inset-0 pl-16 lg:pl-20 pr-8 py-4 w-full h-20 lg:h-auto rounded font-medium text-lg"
                placeholder="Type what you're looking for"
            />
            <button
                className="mt-2 relative w-full lg:w-fit group-submitting:w-fit ml-auto text-xl group-error:whitespace-nowrap group-error:shadow-none group-error:translate-y-0 group-success:shadow-none group-success:translate-y-0 group-error:bg-red-400 flex items-center gap-4 justify-center text-start group-success:text-black group-error:text-black font-semibold tracking-tight bg-violet-600 hover:bg-black transition-all shadow hover:shadow-lg hover:-translate-y-1 text-white px-12 group-submitting:px-3 rounded py-3"
                type="submit"
            >
                <svg className="group-submitting:inline hidden animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"></path>
                </svg>
                <svg className="group-error:inline hidden h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"></path>
                </svg>
                <span className="inline group-submitting:hidden">Search</span>
            </button>
        </form>
        </>
    )
}

export default SearchBar