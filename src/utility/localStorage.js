const getAllStoredData = () => {
    const allStoredData = localStorage.getItem('donation-list');
    if(!allStoredData){
        return []
    }
    return JSON.parse(allStoredData)
}

const saveDonation = (id) =>{
    const storedData = getAllStoredData();
    const existData = storedData.find(dt=> dt == id)

    if(!existData){
        storedData.push(id)
         localStorage.setItem('donation-list', JSON.stringify(storedData))
    }
}

export {saveDonation, getAllStoredData}