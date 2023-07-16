import axios from "axios";
const url= 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'

const options = {

  params: {model: 'corolla'},
  headers: {
    'X-RapidAPI-Key': '9f288d5447msh16fab8960c2fab2p1a4d3cjsn074f793dcfc2',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};
export const fetchCar=async()=>{
  try {
    const response =await axios.get(url,options);
    return(response.data)
  } catch (error) {
    console.error(error);


  }
}

export const calculateCarRent=(city_mpg:number,year:number)=>{
  const basePricePerDay=50;
  const mileageFactor=0.1; 
  const ageFactor=0.05;
  const mileageRate=city_mpg*mileageFactor;
  const ageRate=(new Date().getFullYear()-year)*ageFactor
  const rentalRatePerDay=basePricePerDay+mileageRate+ageRate
  return rentalRatePerDay
}

