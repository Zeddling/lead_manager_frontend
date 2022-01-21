import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

const Alert = () => {
    const errors = useSelector(state => state.errors)
    const message = useSelector(state => state.message)

    if (errors.message) {
        if (errors.message.name) toast.error(`Name: ${errors.message.name}`)
        if (errors.message.email) toast.error(`Email: ${errors.message.email}`)
        if (errors.message.detail) toast.error(`${errors.message.detail}`)
        if (errors.message.non_field_errors) {
            errors.message.non_field_errors.forEach(e => {
                toast.error(`${e}`)
            });
            if (errors.message.username) toast.error(`${errors.message.username}`)
        }
    }

    if (message) {
        if (message.text) toast.success(message.text)
        if (message.passwordDoesNotMatch) toast.warn(message.passwordDoesNotMatch)
    }

    return (
        <Fragment>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
        </Fragment>
    )
}

export default Alert
