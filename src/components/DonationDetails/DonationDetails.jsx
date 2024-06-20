// import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveDonation } from '../../utility/localStorage';

const DonationDetails = () => {
    const paramss = useParams();
    const donationList = useLoaderData();
    // const [categoryList, setCategoryList] = useState([]);
    // useEffect(() => {
    //     fetch('../../../public/categoryList.json')
    //         .then(res => res.json())
    //         .then(data => setCategoryList(data))
    // }, []);
    const donationInfo = donationList.find(cat => cat.id == paramss.id);

    const handleSaveDonation = (donationId) =>{
            saveDonation(donationId);
    }

    return (
        <div className='px-36 pb-32'>
            {/* <div className='h-1/5'>
                <img className='w-full mix-blend-multiply bg-blue-400' src={donationInfo.img}></img>
                <div className="mix-blend-multiply bg-pink-400  -mb-10">
                    <button>Donate</button>
                </div>
            </div> */} 
            <div className="relative overflow-hidden">
                <img src={donationInfo.img} alt="Avatar" className="object-cover w-full h-full" />
                {/* <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">this is a text</div> */}
                <div className="absolute w-full py-9 bottom-0  bg-gray-500 text-white text-2xl pl-8  mix-blend-multiply">
                    <button className='bg-[#FF444A] text-white py-4 px-6 rounded font-semibold z-10 opacity-50 hover:opacity-100' onClick={() => handleSaveDonation(`${donationInfo.id}`)}>Donate ${donationInfo.price}</button>
                </div>
            </div>

            <h2 className='text-3xl font-semibold py-6'>{donationInfo.title}</h2>
            <p className='text-sm'>{donationInfo.description}</p>

        </div>
    );
};

export default DonationDetails;