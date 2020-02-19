import React from 'react'

import './_index.scss'

import publications from '../../images/publications.svg'

const Description = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <span className='description-p'>
                        <p className='mt-5 pt-5 ml-5 mr-5 pl-5 pr-5'>
                            Good Money is the world's first banking platform that will be owned by its customers and
                            will invest 50% of profits to actively protect the environment and fight for social justice.
                        </p>
                        <div className='col-lg-12'>
                            <img className="img-fluid" src={publications} alt="publications" />
                        </div>
                    </span>
                </div>
            </section>

        </>
    );
}

export default Description;