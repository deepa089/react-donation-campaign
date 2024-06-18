// import headerBackImg from '../Header/Header.css'
// import homeImage from '../../assets/images/donationBackImage.png'

import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
    return (
        <div>
            <div id='homeDiv'>
                {/* <img className='w-full h-1/6' src={homeImage}></img> */}
                <h2>Home</h2>

            </div>
            <div className="pt-24 px-36">
                <CategoryList></CategoryList>
            </div>
        </div>
    );
};

export default Home;