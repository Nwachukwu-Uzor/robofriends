import React from 'react';

const Card = ({ id, name, username, email, address, website }) => {
   return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
         <img src={`https://robohash.org/${id}?100x100`}  alt='robots' />
         <div>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{address}</p>
            <p>{website}</p>
         </div>
      </div>
   )
}

export default Card;