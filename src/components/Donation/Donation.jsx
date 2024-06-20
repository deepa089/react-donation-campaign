import { Link } from 'react-router-dom';

const Donation = ({ donation }) => {
    const { id, img, category, category_bg, card_bg, text_btn_bg, title, price } = donation;
    return (
        <div className=''>
            <div className="card card-side bg-base-100 h-52">
                <figure className='w-56'><img className='h-52' src={img} alt="Shoes" /></figure>
                <div style={{ backgroundColor: `${card_bg}` }} className="card-body">
                    <div>
                        <span className="px-2 py-1 rounded" style={{ backgroundColor: `${category_bg}`, color: `${text_btn_bg}` }}>{category}</span>
                    </div>
                    <h2 className="card-title font-semibold text-large">
                        {title}
                        {/* <p className="">{title} </p> */}
                    </h2>
                    <p className="font-semibold text-base" style={{ color: `${text_btn_bg}` }} to={`/donation/${id}`}> ${price}.00 </p>
                    <div className="">
                        <Link to={`/donationDetail/${id}`} style={{ backgroundColor: `${text_btn_bg}` }} className="text-white rounded px-4 py-2">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;