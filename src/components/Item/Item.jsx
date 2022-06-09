import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ item }) {
   const { 
     url, 
     MainImage, 
     title, 
     currency_code,
     price,
     quantity,
   } = item;

   let img = MainImage && MainImage.url_570xN;

   let titleStr = '';
   if (title) {
       titleStr = title.length > 50 ? `${title.substring(0, 50)}...` : title;
   }

   let priceStr;
   if (currency_code === 'USD') {
      priceStr = `$${price}`;
     } else if (currency_code === 'EUR') {
      priceStr = `€${price}`;
     } else {
      priceStr = `${price} ${currency_code}`;
   }

   let quantityStyle;
   if (quantity <= 10) quantityStyle = 'low';
   else if (quantity <= 20) quantityStyle = 'medium';
   else quantityStyle = 'high';

   return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={img} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
           {titleStr}
        </p>
        <p className="item-price">{priceStr}</p>
        <p className={`item-quantity level-${quantityStyle}`}>
            {`${quantity} left`}
        </p>
      </div>
    </div>
   );
}

Item.defaultProps = { item: []};
Item.propTypes = { item: PropTypes.object };

