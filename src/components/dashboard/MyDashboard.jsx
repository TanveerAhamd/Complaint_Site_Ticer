
import React, { useState } from 'react'
import Datatable from '../Datatable/Datatable';

const MyDashboard = () => {


  return (
    <div className="myDashboard container">
        <div className="row my-2">
          <div className="col-md-2 p-2 fixed-left bg-light shadow-sm rounded ">
            <div className='mb-3'> <a href="#" className='btn btn-light w-100 text-start'>Dashboard</a></div>
            <div className='mb-3'> <a href="#" className='btn btn-light w-100 text-start'>Complains</a></div>
            <div className='mb-3'> <a href="#" className='btn btn-light w-100 text-start'>Reports</a></div>
            <div className='mb-3'> <a href="#" className='btn btn-light w-100 text-start'>Register</a></div>
          </div>
          <div className="col-md-10">
            <div className="row p-2 ">
              <Datatable />
            </div>
          </div>
        </div>

      </div>

  )
}

export default MyDashboard