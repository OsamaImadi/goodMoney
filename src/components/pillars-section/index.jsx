import React from 'react'

import './_index.scss'

const Pillars = () => {
    return (
        <>
            <section className='pillars'>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col pillar-box mr-2 mb-4'>
                            <h1 className='pillar-box-h1'>50%</h1>
                            <h2 className='pillar-box-h2'>OF PROFITS</h2>
                            <p className='pillar-box-p'>Will fund positive social and environmental impact</p>
                        </div>
                        <div className='col pillar-box ml-2 mb-4'>
                            <h1 className='pillar-box-h1'>ZERO</h1>
                            <h2 className='pillar-box-h2'>FEES</h2>
                            <p className='pillar-box-p'>No overdraft, minimum balance, or ATM fees (at 55k locations)</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col pillar-box mr-2'>
                            <h1 className='pillar-box-h1'>5★</h1>
                            <h2 className='pillar-box-h2'>OF SUPPORT</h2>
                            <p className='pillar-box-p'>US-based, best-in-class Customer Care</p>
                        </div>
                        <div className='col pillar-box ml-2'>
                            <h1 className='pillar-box-h1'>FDIC</h1>
                            <h2 className='pillar-box-h2'>INSURED</h2>
                            <p className='pillar-box-p'>Military grade encryption keeps all our accounts safe and sound</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pillars;