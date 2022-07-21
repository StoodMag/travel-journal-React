import React from 'react';

const Card = (props) => {
    return (
        <div className ='main-section'>
             <div className='card'>
                <img className ='card-image' src = {props.el.imageUrl}/>
            <div className='data-info'>
                    <div className='location-info'>
                 <span><i className="fa-solid fa-location-dot"></i></span>
                 <h3>{props.el.location}</h3>
                 <a className ='map-link' href={props.el.googleMapsUrl} >View on Google Maps</a>
                 </div>
                 <h2>{props.el.title}</h2>
                 <span className='date'>{props.el.startDate} - {props.el.endDate}</span>
                 <p>{props.el.description}</p>
                </div>
          </div>
                <hr/>
             </div>
             
    )
}

export default Card;