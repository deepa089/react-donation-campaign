import { useEffect, useState } from 'react';
import Donation from '../Donation/Donation';
import { getAllStoredData } from '../../utility/localStorage';
import { useLoaderData } from 'react-router-dom';

const DonationList = () => {
    const categoryList = useLoaderData();
    const [dataLength, setDataLength] = useState(4);
    const [donationList, setDonationList] = useState([]);
    // const [categoryList, setCategoryList] = useState([]);

    let allStoredData = [] ;
    
    const handlerSeeAll = (donationLength) => {
        setDataLength(donationLength);
    }
    useEffect(() => {
        const donations = [] ;
        allStoredData = getAllStoredData();
        for( const donationId of allStoredData){
            const objData = categoryList.find(donation => donation.id == donationId)
            if(objData){
                donations.push(objData);
            }
        }
        setDonationList(donations);
    },[])
    return (
        <div className='py-20 px-36'>
            <div className='grid grid-cols-2 gap-4'>
            {
                donationList.slice(0,dataLength).map((donation, idx)=> <Donation donation={donation} key={idx}></Donation>)
            }
            </div>
            <div className={`py-5 text-center ${dataLength == donationList.length ? 'hidden' : ''}`}>
                <button className='text-white content-center rounded px-4 py-2 bg-green-700' onClick={() => handlerSeeAll(donationList.length)}>See All</button>
            </div>
        </div>
    );
};

export default DonationList;