import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { API_URL } from '../config';
import { useStore } from '../App';

const CsvForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const setUsers = useStore((state) => state.setUsers)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${API_URL}/files`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully');
        setSelectedFile(null);
        window.location.reload();
        setUsers();
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('An error occurred while uploading the file', error);
    }
  };

  return (
    <div className='max-w-3xl mx-auto h-full justify-center'>
      <form
        onSubmit={handleSubmit}
        className='border-2 border-black rounded pt-12 pb-16 px-8 flex flex-col shadow-lg'
      >
        <h1 className='font-bold text-2xl mb-10'>
          <span className='text-violet-600'>CSV</span> Uploader Form
        </h1>
        <Dropzone onDrop={handleFileDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} id='dropzone-input' />
              <div className='border-black w-full h-full px-4 py-8 flex flex-wrap gap-4 rounded bg-gray-200 transition-all shadow-[inset_0_4px_8px_0_rgb(0_0_0_/_0.1)] border'>
                {selectedFile ? (
                  <div>
                    <h4>Selected File:</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
                        <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                    </svg>
                    <p>{selectedFile.name}</p>
                  </div>
                ) : (
                  <div className='lg:p-16 flex flex-col items-center justify-center h-full w-full'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='h-16 w-16 mb-4 text-violet-600'
                    >
                    <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                    ></path>
                    </svg>
                    <span className='lg:inline hidden font-medium text-gray-800'>
                      You can <span className='font-bold'> drag and drop </span>{' '}
                      your files here.
                    </span>
                    <span className='lg:hidden inline font-medium text-gray-800'>
                      Click to{' '}
                      <span className='font-bold'>open and select</span> your
                      files here.
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </Dropzone>
        <button
          className='ml-auto mt-6 text-2xl font-semibold tracking-tight bg-gray-800 hover:bg-black transition-all shadow hover:shadow-lg hover:-translate-y-1 text-white px-12 rounded py-3'
          type='submit'
        >
          Upload
        </button>
      </form>
    </div>
  )
}

export default CsvForm