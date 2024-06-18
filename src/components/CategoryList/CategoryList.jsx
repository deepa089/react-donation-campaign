import { useEffect, useState } from 'react';
import Category from '../Category/Category';

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        fetch('../../../public/categoryList.json')
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, []);
    return (
        <div className=''>
            <div className='grid grid-cols-4 gap-6'>
                {
                    categoryList.map((category, idx) => <Category key={idx} categoryInfo={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;