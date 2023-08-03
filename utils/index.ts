import { FilterProps, carProps } from "@/types";
import axios from "axios";
import { url } from "inspector";


const options = {
method:"GET",
  params: {model: 'corolla'},
  headers: {
    'X-RapidAPI-Key': '9f288d5447msh16fab8960c2fab2p1a4d3cjsn074f793dcfc2',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};
export const fetchCar=async(filters:FilterProps)=>{
  const url=new URL('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars')
  
  const {manufacturer,year,fuel,limit,model}=filters
url.searchParams.append('manufacturer',manufacturer)
url.searchParams.append('model',model)
url.searchParams.append('fuel',fuel)
url.searchParams.append('year',`${year}`)
url.searchParams.append('limit',`${limit}`)
console.log(url)
  try {
    const response =await fetch(`${url}`,options);
    const result=await response.json()
    console.log(result)
    return(result)
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

export const generateCarImageUrl=(car:carProps,angle?:string)=>{
  const url=new URL('https://cdn.imagin.studio/getImage')
  const {make,year,model}=car
url.searchParams.append('customer','isamazasylvain')
url.searchParams.append('make',make)
url.searchParams.append('modelFamily',model.split(" ")[0])
url.searchParams.append('zoomType','fullscreen')
url.searchParams.append('modelYear',`${year}`)
url.searchParams.append('angle',`${angle}`)
return `${url}`
}

export const  updateSearchParms=(type:string,value:string)=>{
  const searchParams = new URLSearchParams(window.location.search);
  
  searchParams.set(type,value);

const newPathName = `${
  window.location.pathname
}?${searchParams.toString()}`;
return newPathName
}