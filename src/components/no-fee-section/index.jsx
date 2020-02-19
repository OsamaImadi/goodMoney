import React from 'react'

import './_index.scss'

const NoFeeSection = () => {
    return (
        <>
            <section className='no-fee'>
                <div className='container mt-5'>
                    <div className='row no-fee-row'>
                        <div className='col-6 mx-auto'>
                            <ul className='no-fee-row-ul mt-5 mr-4'>
                                <li>No minimum balance fees</li>
                                <li>No monthly fees</li>
                                <li>No ATM fees at 55,000 ATMs</li>
                                <li>No overdraft fees</li>
                            </ul>
                        </div>
                        <div className='col-6 mx-auto no-fee-col2 ml-0'>
                            <h1 className='no-fee-col2-h1'>No fees.</h1>
                            <h1 className='no-fee-col2-h1'>No, really.</h1>
                            <p>
                                We never understood the idea of getting charged to access your own money.
                            Most banks even charge you fees for not having enough money!
                                <strong>Those days are over.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NoFeeSection;