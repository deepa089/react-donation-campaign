// import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { saveDonation } from '../../utility/localStorage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const DonationDetails = () => {
    const paramss = useParams();
    const donationList = useLoaderData();
    const navigate = useNavigate();
    const donationInfo = donationList.find(cat => cat.id == paramss.id);

    const handleSaveDonation = (donationId) => {
        saveDonation(donationId);
        toast("Donation Saved Successfully");
        navigate('/donation');
    }

    return (
        <div className='px-36 pb-32'>
            <div style={{backgroundImage: `url(${donationInfo.img})`, backgroundPosition: 'top', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}} className="w-full h-screen relative rounded-lg">
                <div  className="w-full py-9 bg-[#0b0b0b80] text-white text-2xl pl-8  absolute bottom-0 left-0">
                    <button style={{backgroundColor: `${donationInfo.text_btn_bg}`}} className='text-white py-4 px-6 rounded font-semibold opacity-[999999]' onClick={() => handleSaveDonation(`${donationInfo.id}`)}>Donate ${donationInfo.price}</button>
                </div>
            </div>
            <h2 className='text-3xl font-semibold py-6'>{donationInfo.title}</h2>
            <p className='text-base text-[#0b0b0bb3] text-justify'>{donationInfo.description}</p>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;