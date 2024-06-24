import { Link } from "react-router-dom";

const Category = ({ categoryInfo }) => {
    const {id, img, category, category_bg, card_bg, text_btn_bg, title } = categoryInfo;
    // console.log(card_bg);
    return (
        <div className="rounded w-80">
            <Link to={`/donationDetail/${id}`} className="card">
                <figure><img className="h-48 w-80" src={img} alt="Shoes" /></figure>
                <div style={{backgroundColor: `${card_bg}`}} className="card-body p-4 ">
                    <h2 className="card-title text-sm">
                        <div className="px-2 py-1 rounded" style={{ backgroundColor: `${category_bg}`,color : `${text_btn_bg}`}}>{category}</div>
                    </h2>
                        <p className="font-semibold text-xl" style={{color : `${text_btn_bg}`}} to={`/donation/${id}`}>{title} </p>
                </div>
            </Link>
        </div>
    );
};

export default Category;