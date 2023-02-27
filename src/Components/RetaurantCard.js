import React from 'react'
import { CLOUDINARY_IMAGE_URL } from '../constants'

const RetaurantCard = ({ name, cloudinaryImageId, avgRating, cuisines, slaString, costForTwoString }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '240px', width: '254px', margin: '8px', padding: '20px 20px 57px', fontSize: '10pt', border: '1px solid #fff' }} >
            <img src={`${CLOUDINARY_IMAGE_URL}` + cloudinaryImageId} alt='' height={'160px'} width={'254px'} />
            <h3>{name}</h3>
            {/* <span>{address}</span> */}
            <span style={{ color: 'grey' }}>{cuisines?.join(' ')}</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '4px', color: 'grey' }}>
                <span>{avgRating}</span>
                <span>{slaString}</span>
                <span>{costForTwoString}</span>

            </div>
            { }
        </div>
    )
}

export default RetaurantCard