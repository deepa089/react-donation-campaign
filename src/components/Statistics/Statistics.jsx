import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cell, Label, Pie, PieChart } from 'recharts';
import { getAllStoredData } from '../../utility/localStorage';

const Statistics = () => {
    let donationPercentage = 0
    let allStoredData = [] ;
    
    const categoryList = useLoaderData();
    const [dataMap1, setDataMap1] = useState([])
    useEffect(() => {
        // const donations = [] ;
        allStoredData = getAllStoredData();
        let donationSum = 0;
        let totalDonation = 0;
        for( const donationId of allStoredData){
            const objData = categoryList.find(donation => donation.id == donationId)
            if(objData){
                donationSum += objData.price
                // donations.push(objData);
            }
        }
        categoryList.map(cat=> totalDonation = totalDonation + cat.price)
        // setDonationList(donations);
        donationPercentage = ((donationSum * 100)/totalDonation);
        const dataMap = [] ;
        dataMap.push({name: 'Group A', value : donationPercentage})
        dataMap.push({name: 'Group B', value : 100 - donationPercentage})
        console.log(dataMap);
        setDataMap1(dataMap);
    },[])
    // const data = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 }
    // //     // { name: 'Group C', value: 300 },
    // //     // { name: 'Group D', value: 200 },
    //   ];

      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    //   const RADIAN = Math.PI / 180;
    //   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        // const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);  
    return (
        <div>
            <h2> Statistics</h2>
            {/* <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text> */}

    <PieChart width={400} height={400}>
      <Pie
        data={dataMap1}
        // cx={200}
        // cy={200}
        // cx="100%"
        // cy="100%"
        startAngle={donationPercentage}
        labelLine={true}
        // label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {dataMap1.map((entry, index) => (
          <Cell key={`cell-${index}`} labelLine={entry.name} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <div className='flex'>
        <p>Your Donation : <span className='bg-[#0088FE] text-[#0088FE] w-1'>text</span> </p>
        <p>Total Donation : <span className='bg-[#00C49F] text-[#00C49F] w-1'>text</span> </p>
    </div>
        </div>
    );
};

export default Statistics;