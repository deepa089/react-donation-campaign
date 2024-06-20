const getAllStoredData = () => {
    const allStoredData = localStorage.getItem('donation-list');
    // console.log(allStoredData);
    if(!allStoredData){
        return []
    }
    return JSON.parse(allStoredData)
}

const saveDonation = (id) =>{
    const storedData = getAllStoredData();
    console.log(id);
    const existData = storedData.find(dt=> dt == id)
    // console.log(id);
    // console.log(existData);

    if(!existData){
        console.log(storedData);
        console.log("after stored");
        storedData.push(id)
        console.log(storedData);
         localStorage.setItem('donation-list', JSON.stringify(storedData))
    }
}

export {saveDonation, getAllStoredData}