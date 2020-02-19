import React from 'react'

import './_index.scss'

const Footnotes = () => {
  return (
    <>
      <section className='footnotes'>
        <div className='container mt-5 pt-5'>
          <ol className='footnotes-ol'>
            <li id='footnote_1' className='mb-3'>
              Good Money is anticipating undertaking an offering of a class of its shares under
              Tier 2 of Regulation A, by which shares would be issued to qualified customers in connection
              with the Good Shares Program. Terms and conditions of the Good Shares Program,
              and the anticipated Tier 2 offering contemplated thereof, are available here .
              To date, no filing has been made with the Securities and Exchange Commission (the "SEC").
              No money or other consideration for the shares is being solicited,
              and if sent in response, will not be accepted. No offer for the shares can be accepted,
              and no part of the subscription price can be received until an offering statement filed
              by Good Money with the SEC has been qualified by the SEC. Any such offer may be
              withdrawn or revoked, without obligation or commitment of any kind,
              at any time before notice of acceptance given after the date of qualification.
              An indication of interest in the shares involves no obligation or commitment of any kind.
            </li>
            <li id='footnote_2' className='mb-3'>
              Good Money Group, Inc. ("GMG") is not a licensed bank and is not a member of the FDIC.
              Banking services (loans and deposit products) are provided by a third-party banking partner
              which is an FDIC member
              (deposits at our third-party banking partner are insured up to $250,000 per account/depositor).
            </li>
            <li id='footnote_3' className='mb-3'>
              “4% yield” means a cash yield of 1% and 3% of the total amount on deposit paid in Good Shares.
            </li>
            <li id='footnote_4' className='mb-3'>
              References to the value of other publicly traded entities is not a guarantee of future value or performance.
              The projected value is not a guarantee. The market value assumptions of third parties are based on
              average market value calculated during the fiscal year ended December 31, 2018.
            </li>
            <li id='footnote_5' className='mb-3'>
              “50% of our profits fund social and environmental impact.” means that GMG will invest
              in companies and organizations that are focused on generating a positive social impact.
              GMG will disclose the organizations supported and levels of support in its annual report.
            </li>
            <li id='footnote_6' className='mb-3'>
              “No fees” means that GMG does not charge a fee to users for using the GMG card.
              Linked service providers may charge fees for specific services.
              “No ATM Fees” means that GMG does not charge a fee to users who access their accounts through an ATM machine.
              ATM machine owners may charge fees.
              “No minimum balance” means that there is no minimum balance to open a GMG account.
              Some services may have tiers of payment or reward that are based upon satisfying minimum thresholds.
            </li>
            <li id='footnote_7' className='mb-3'>
              This visualization does not show the many companies that have failed and is not a
              guarantee of financial outcomes as there are many variables.
              All the companies listed have different business plans from GMG and these are
              illustrative examples of the risk and value of early ownership in consumer technology brands.
              For each example listed there are many others who have failed.
              This is not a promissory statement and this is being illustrated to
              educate customers about risk and rewards of stock ownership in other direct to consumer brands.
              Airbnb - is a direct to consumer technology brand used by many customers worldwide.
              Many others have tried similar models such as gig-economy housing in various forms
              (such as VRBO) but they haven’t achieved the same user adoption or market success.
              PayPal - is a peer to peer payments and debit card payments platform that includes Venmo.
              Other companies have tried and failed to replicate similar models.
              Google - is a search engine that has expanded into many services including financial services.
              Other players like Yahoo and Bing failed to scale the way Google has over time.
            </li>
          </ol>
        </div>

      </section>
    </>
  );
}

export default Footnotes;