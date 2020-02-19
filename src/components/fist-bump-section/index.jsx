import React from 'react'

import './_index.scss'
import fistBump from '../../images/fist_bump.png'
const FistBump = () => {
    return (
        <>
            {/* <div className='container-fluid'> */}
            <div className='row mt-5 mb-5 pb-5'>
                <div className='col-lg-12'>
                    <img className="img-fluid fist-bump-img" src={fistBump} alt="fist-Bump" />
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default FistBump;