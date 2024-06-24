// import { useEffect, useState } from 'react';
import Category from '../Category/Category';

const CategoryList = ({categoryList}) => {
    // const {searchCat} = searchCat;
    // console.log('i m searchCat ::'+ searchCat);
    
    return (
        <div className=''>
            {/* <div className='grid grid-cols-4 gap-6'>
                    {
                       Object.values(categoryList).map((category, idx) => <Category key={idx} categoryInfo={category}></Category>)
                    }
                </div> */}
        </div>
    );
};

export default CategoryList;