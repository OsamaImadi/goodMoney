import React from 'react'

import './_index.scss'

import charitySectionImg from '../../images/join-us.png'

const CharitySection = () => {
  return (
    <>
      <section className='charity-section'>
        {/* <div className='container'> */}
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <img className="img-fluid" src={charitySectionImg} alt="join-us" />
          </div>
          <div className='col-lg-6 col-md-12 charity-section-row2'>
            <div className='charity-section-row2-div1'>
              <h1 className='charity-section-row2-h1'>50%</h1>
              <h2 className='charity-section-row2-h2'>of profits to the planet.
                  <a className="charity-section-row2-h2-p" href='/'>
                </a>
              </h2>
              <div className='charity-section-row2-div'>
                <p>
                  Most banks pledge less than 1% of profits to doing good.
                    We are committing to invest <strong>50% of all our profits</strong> to actively protect
                the environment and fight for social justice.
                  </p>
                <p>
                  <strong>No deforestation, private prisons, or funny business.Ever.</strong>
                </p>
                <p>
                  <a className='charity-section-row2-div-a' href='/'>
                    Learn more about our commitment. ->
                    </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default CharitySection;