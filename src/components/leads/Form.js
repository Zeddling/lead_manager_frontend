import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addLead } from '../../redux/actions/leadActions'

//  Custom hook
//  Watches for changes in state and updates the value
//  on change
const useInput = (initialState) => {
    const [value, setValue] = useState(initialState)

    function handleChange(e) {
        setValue(e.target.value)
    }

    return [value, handleChange]
}

const Form = () => {
    const dispatch = useDispatch()

    const [name, setName] = useInput('')
    const [email, setEmail] = useInput('')
    const [message, setMessage] = useInput('')

    const onSubmit = (e) => {
        e.preventDefault()
        const lead = { name, email, message }
        dispatch(addLead(lead))

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className='md:max-w-xl rounded overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>
                    Add Lead
                </div>
                <form onSubmit={onSubmit}>
                    <div className="space-y-4 mt-6">
                        <div className='flex flex-row'>
                            <div className="flex mr-3 flex-col w-full">
                                <input 
                                    type="text" 
                                    placeholder="Enter your full name" 
                                    className="px-4 rounded py-2 bg-gray-100" 
                                    value={name}
                                    onChange={setName}
                                    //required
                                    />
                            </div>

                            <div className="flex flex-col w-full">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="px-4 rounded py-2 bg-gray-100" 
                                    value={email}
                                    onChange={setEmail}
                                    //required
                                    />
                            </div>
                        </div>
                        

                        <div className="w-full">
                            <textarea 
                                rows={5}
                                cols={53}
                                placeholder='Enter your message here'
                                className="px-4 py-2 rounded bg-gray-100"
                                value={message}
                                onChange={setMessage}
                                //required
                            ></textarea>
                        </div>

                        <div className='w-full'>
                            <button 
                                className='text-white bg-green-700
                                    hover:bg-green-800 focus:ring-4
                                    focus:ring-green-300 font-medium
                                    rounded-lg text-sm px-5 py-2.5
                                    text-center mr-2 mb-2 dark:bg-green-600
                                    dark:hover:bg-green-700 dark:focus:ring-green-800
                                    w-full'
                                type='submit'
                                >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
