import { Link } from "react-router-dom";

const Category = ({ categoryInfo }) => {
    const {id, img, category, category_bg, card_bg, text_btn_bg, title } = categoryInfo;
    // console.log(card_bg);
    return (
        <div>
            <Link to={`/donationDetail/${id}`} className="card bg-base-100 shadow-xl rounded">
                <figure className="h-48"><img src={img} alt="Shoes" /></figure>
                <div style={{backgroundColor: `${card_bg}`}} className="card-body p-4">
                    <h2 className="card-title text-sm">
                        <div className="px-2 py-1 rounded" style={{ backgroundColor: `${category_bg}`,color : `${text_btn_bg}`}}>{category}</div>
                        {/* <div className={`bg-[#{category_bg}]`}>{category}</div> */}
                        {/* <div>{category}</div> */}
                    </h2>
                    {/* <Link className="font-semibold text-xl" style={{color : `${text_btn_bg}`}} to={`/donation/${id}`}>{title} </Link> */}
                    <p className="font-semibold text-xl" style={{color : `${text_btn_bg}`}} to={`/donation/${id}`}>{title} </p>
                </div>
            </Link>
        </div>
    );
};

export default Category;