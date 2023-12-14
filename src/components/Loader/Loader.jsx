import React from 'react'
import "./loader.css"
const Loader = () => {
    return (
        <div className='loader'>
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader