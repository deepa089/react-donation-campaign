import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cell, Legend,  Pie, PieChart, Tooltip } from 'recharts';
import { getAllStoredData } from '../../utility/localStorage';

const Statistics = () => {
  const style = {
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
  let allStoredData = [];

  const categoryList = useLoaderData();
  const [dataMap1, setDataMap1] = useState([])
  useEffect(() => {
    allStoredData = getAllStoredData();
    let donationSum = 0;
    let totalDonation = 0;
    for (const donationId of allStoredData) {
      const objData = categoryList.find(donation => donation.id == donationId)
      if (objData) {
        donationSum += objData.price
      }
    }
    categoryList.map(cat => totalDonation = totalDonation + cat.price)
    const dataMap = [];
    dataMap.push({ name: 'Your Donation', value: donationSum })
    dataMap.push({ name: 'Total Donation', value: totalDonation })
    console.log(dataMap);
    setDataMap1(dataMap);
  }, [])
  const COLORS = ['#00C49F','#FF444A'];
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className='flex justify-center h-'>
        <PieChart width={500} height={500}>
          <Pie
            data={dataMap1}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {/* <LabelList
        dataKey="name"
        position="right"
        style={{ fontSize: "10px" }}
      /> */}
            {dataMap1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip/>
          <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" wrapperStyle={style} />
        
        </PieChart>
    </div>
  )
};

export default Statistics;