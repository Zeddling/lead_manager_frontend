import React, { Fragment } from 'react'
import Form from './Form'
import Leads from './Leads'

const Dashboard = () => {
    return (
        <div>
            <Fragment>
                <div className='flex flex-row justify-center mt-4 items-center'>
                    <Form />
                </div>
                <div className='flex flex-row justify-center mt-4 items-center'>
                    <Leads />
                </div>
            </Fragment>
        </div>
    )
}

export default Dashboard
