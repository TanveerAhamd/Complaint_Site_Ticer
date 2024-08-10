import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { http, SERVER_URL } from '../../helpers/http';
import { Link } from "react-router-dom"
import "./Dashboard.css";
import { Calendar } from 'primereact/calendar';


const Datatable = () => {
  const [customers, setCustomers] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [active, setActive] = useState(0)
  const [approve, setApprove] = useState(0)
  const [resolved, setResolved] = useState(0)
  const [date, setDate] = useState(null);



  const statusBodyTemplate = (rowData) => {
    return (
      (rowData.Status === 'ACTIVE') ? <span className='alert p-1 alert-warning'>{rowData.Status}</span> : <span className='alert p-1 alert-success'>{rowData.Status}</span>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (<Link className='btn text-white btn-info btn-sm' to={`/dashboard/details/${rowData._id}`}>Details</Link>);
  };

  useEffect(() => {
    http.get(`${SERVER_URL}/api/applications`).then((res) => {
      
      setCustomers(res.data.applications)
      const applications = res.data.applications;
      console.log(customers)
      const activeCustomers = applications.filter(customer => customer.Status === 'ACTIVE');
      const approvedCustomers = applications.filter(customer => customer.Status === 'RESOLVED');
      const numberOfActiveCustomers = activeCustomers.length;
      const numberOfApprovedCustomers = approvedCustomers.length;
      setActive(numberOfActiveCustomers)
      setApprove(numberOfApprovedCustomers)

    });
  }, []);

  const handleSearch = () => {
    http.get(`${SERVER_URL}/api/applications?startDate=${startDate}&endDate=${endDate}`).then((res) => {
      setCustomers(res.data.applications);
    });
  };

  const statusFilter = (
    <Dropdown
      value={selectedStatus}
      options={[
        { label: 'Active', value: 'Active' },
        { label: 'Resolved', value: 'Resolved' },
      ]}
      onChange={(e) => setSelectedStatus(e.value)}
      placeholder="Select Status"
    />
  );

  return (
    <>
      <div className="col-md-3 py-1">
        <div className="card py-1">
          <div className="card-header ">
            Total Complains
          </div>
          <div className="card-body">
            <h5 className="card-title ">{customers.length}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3 py-1">
        <div className="card py-1">
          <div className="card-header">
            Active Complains
          </div>
          <div className="card-body">
            <h5 className="card-title">{active}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3 py-1 ">
        <div className="card py-1">
          <div className="card-header">
            Resolved Complains
          </div>
          <div className="card-body">
            <h5 className="card-title">{approve}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3 py-1 ">
        <div className="card py-1">
          <div className="card-header">
            Feedback Received
          </div>
          <div className="card-body">
            <h5 className="card-title">{approve}</h5>
          </div>
        </div>
      </div>
      <div className="card mt-3 p-2">
        <div className='row my-3'>
          <div className='col-md-3'>
            <div className='card flex justify-content-center'>
              <Calendar value={endDate} onChange={(e) => setStartDate(e.value)} placeholder='Choose Start-date' />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card flex justify-content-center'>
              <Calendar value={endDate} onChange={(e) => setEndDate(e.value)} placeholder='Choose end-date' />
            </div>
          </div>
          <div className='col-md-2 d-flex'>
            <button className='btn btn-primary p-2 justify-content-center' onClick={handleSearch}>Search</button>
          </div>
          <div className='col-md-4'>
            {statusFilter}
          </div>
        </div >

        <DataTable className=' h-50' value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
          <Column field="Contact" header="Contact" style={{ width: '25%' }}></Column>
          <Column field="Department" header="Department" style={{ width: '25%' }}></Column>
          <Column field="Status" body={statusBodyTemplate} header="Status" style={{ width: '25%' }} ></Column>
          <Column field="_id" body={actionBodyTemplate} header="Action" style={{ width: '25%' }}></Column>
        </DataTable>
      </div>

    </>

  );
};

export default Datatable;
