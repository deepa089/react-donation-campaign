import React from 'react';

const Donation = ({ donation }) => {
    const {id, img, category, category_bg, card_bg, text_btn_bg, title, price } = donation;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-56 h-56'><img className='h-auto' src={img} alt="Shoes"/></figure>
                <div style={{backgroundColor: `${card_bg}`}} className="card-body">
                <div className="px-2 py-1 rounded" style={{ backgroundColor: `${category_bg}`,color : `${text_btn_bg}`}}>{category}</div>
                    <h2 className="card-title text-sm">
                    <p className="font-semibold text-2xl">{title} </p>
                    </h2>
                    <p className="font-semibold text-xl" style={{color : `${text_btn_bg}`}} to={`/donation/${id}`}> ${price}.00 </p>
                    <div className="card-actions justify-end">
                        <button style={{color : `${text_btn_bg}`}} className="btn text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;