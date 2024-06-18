import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {
    const paramss = useParams();
    const donationList = useLoaderData();
    // const [categoryList, setCategoryList] = useState([]);
    // useEffect(() => {
    //     fetch('../../../public/categoryList.json')
    //         .then(res => res.json())
    //         .then(data => setCategoryList(data))
    // }, []);
    const donationInfo = donationList.find(cat=> cat.id == paramss.id);
    console.log(donationInfo);

    return (
        <div className='px-36 pb-32'>
            <img className='w-full' src={donationInfo.img}></img>
            <h2 className='text-3xl font-semibold py-4'>{donationInfo.title}</h2>
            <p className='text-sm'>{donationInfo.description}</p>

        </div>
    );
};

export default DonationDetails;