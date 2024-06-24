// import '../Header/Header.css'
// import homeImage from '../../assets/images/donationBackImage.png'

import { useEffect, useRef, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import Category from "../Category/Category";
import { data } from "autoprefixer";

const Home = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [isDisplay, setIsDisplay] = useState(false);

    // setDisplayList(categoryList);
    const searchCat = useRef();
    const handleSearchCategory = (e) => {
        e.preventDefault();
        console.log(searchCat.current.value);
        const searchValue = searchCat.current.value;
        if (searchValue == "") {
            // const data = categoryList.filter(cat => cat.category == searchValue);
            setDisplayList(categoryList);
            setIsDisplay(true);
        }else if (searchValue == "Health") {
            const data = categoryList.filter(cat => cat.category == searchValue);
            setDisplayList(data);
            setIsDisplay(true);
        } else if (searchValue == "Education") {
            const data = categoryList.filter(cat => cat.category == searchValue);
            setDisplayList(data);
            setIsDisplay(true);
        } else if (searchValue == "Clothing") {
            const data = categoryList.filter(cat => cat.category == searchValue);
            setDisplayList(data);
            setIsDisplay(true);
        } else if (searchValue == "Food") {
            const data = categoryList.filter(cat => cat.category == searchValue);
            setDisplayList(data);
            setIsDisplay(true);
        } else {
            const data = categoryList.filter(cat => cat.category == searchValue);
            setDisplayList(data);
            setIsDisplay(true);
        }
    }

    useEffect(() => {
        fetch('../../../public/categoryList.json')
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, []);
    return (
        <div>
            <div id='homeDiv' className="bg-cover bg-opacity-25 place-content-center">
                <div className="text-center">
                    <div className="join">
                        {/* <form onSubmit={handleSearchCategory}> */}
                        <div>
                            <div>
                                <input name="categorySearch" ref={searchCat} className="input input-bordered join-item" placeholder="Search" />
                            </div>
                        </div>
                        {/* </form> */}
                        <div className="indicator">
                            <button className="btn join-item" onClick={handleSearchCategory}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-24 px-28">
                {/* <div className='grid grid-cols-4 gap-6'> */}
                <div className='flex flex-wrap gap-6'>
                    {/* {
                        displayList.length == 0 ? categoryList.map((category, idx) => <Category key={idx} categoryInfo={category}></Category>) :
                        displayList.map((category, idx) => <Category key={idx} categoryInfo={category}></Category>) 
                    } */}
                    {
                        isDisplay == false ? categoryList.map((category, idx) => <Category key={idx} categoryInfo={category}></Category>) :
                        displayList.map((category, idx) => <Category key={idx} categoryInfo={category}></Category>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;