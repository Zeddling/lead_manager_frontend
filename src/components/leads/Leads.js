import {getLeads, deleteLead} from '../../redux/actions/leadActions'
import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Leads = () => {
    const leads = useSelector(state => state.leads.leads)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLeads())
    }, [dispatch])

    return (
        <Fragment>
            <div className='overflow-auto lg:overflow-visible'>
                <h2 className='font-bold text-gray-500 text-lg'>Leads</h2>
                <table className='shadow-lg bg-white'>
                    <thead>
                        <tr>
                            <th className='bg-blue-100 border text-left px-8 py-4'>ID</th>
                            <th className='bg-blue-100 border text-left px-8 py-4'>Name</th>
                            <th className='bg-blue-100 border text-left px-8 py-4'>Email</th>
                            <th className='bg-blue-100 border text-left px-8 py-4'>Message</th>
                            <th className='bg-blue-100 border text-left px-8 py-4' />
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id}>
                                <td className='border px-8 py-4'>{lead.id}</td>
                                <td className='border px-8 py-4'>{lead.name}</td>
                                <td className='border px-8 py-4'>{lead.email}</td>
                                <td className='border px-8 py-4'>{lead.message}</td>
                                <td className='border px-8 py-4'>
                                    <button
                                        onClick={
                                            () => dispatch(deleteLead(lead.id))
                                        }
                                        className="bg-red-500 hover:bg-red-700 
                                            text-white text-center py-2 px-4 rounded"
                                    >
                                        {' '}
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )   
}

export default Leads
