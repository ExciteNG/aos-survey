// 

import {getCountries, getStates} from 'country-state-picker'

// export const getNames

// export countriesList

// export const getNameList


export const allCountries = () => getCountries().map(country=> country.name);

export const getCountryCode = (country)=>{
    let ctry = getCountries().filter(item=>item["name"]===country);
    return ctry[0]["code"]
}
export const getCountryDial_Code = (country)=>{
    let ctry = getCountries().filter(item=>item["name"]===country);
    return ctry[0]["dial_code"]
}

export const States = (country) => getStates((getCountryCode(country)));