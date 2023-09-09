import React from 'react'

function FeatureBox  (props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} />
        </div>
      <div className='s-b-text'>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem asperiores soluta error eaque ratione sequi ipsam voluptates pariatur ex hic, dolorum aliquam officiis modi corrupti perspiciatis, vitae aspernatur consequuntur.</p>
      </div>
    </div>
  )
}

export default FeatureBox
