import React from 'react'
import ComplaintForm from '../components/complaintForm/ComplaintForm'
import { Link } from 'react-router-dom'
import mainImage from '../pages/main.png'
import './home.css'

const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="row">
          <div className="col-md-6">
            <div className="justify-content-center mt-5 p-2">
              <h2 className='font-bolder text-dark'>Digital Complaint System </h2>
              <p className='tex-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae quo optio repudiandae iure sed ex pariatur doloremque ipsam porro harum dicta autem voluptas aliquid odit, quod, vitae assumenda ullam?</p>
              <p> Visit for more info <a href="" className='text-decoration-none'>Ticer.pk</a></p>
      
                <Link to="/registerComplain" className='btn p-2 btn-success btn-sm text-white w-50 d-block shadow' > Register Complaint </Link>
                <Link to="/trackcomplain" className='btn p-2 btn-regCmpBtn btn-sm text-white w-50 my-2 d-block shadow' > Complaint Status </Link>
        
            </div>

          </div>
          <div className="col-md-6 mt-5  text-center">
            <img  src={mainImage} alt="homepage_right image " className='img-fluid' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home