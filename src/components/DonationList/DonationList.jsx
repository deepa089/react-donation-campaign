import React, { useEffect, useState } from 'react';
import Donation from '../Donation/Donation';

const DonationList = () => {
    const [dataLength, setDataLength] = useState(4);
    const [donationList, setDonationList] = useState([]);
    useEffect(() => {
        fetch('../../../public/categoryList.json')
        .then(res=>res.json())
        .then(data=>setDonationList(data))
    },[])
    return (
        <div>
            <h2>Donation List</h2>
            <div className='grid grid-cols-2 gap-4 pt-24 px-36'>
            {
                donationList.slice(0,dataLength).map(donation=> <Donation donation={donation} key={donation.id}></Donation>)
            }
            </div>
        </div>
    );
};

export default DonationList;