import React from 'react'
export const BaseUrl = ' http://localhost:8000/api/v1'
//export const single_product_url = `https://course-api.com/react-store-single-product?id=`

export const ImgUrl='http://localhost:8000/storage/';
 export const customFetcher = async (url='') => {
  const response = await fetch(`https://rlp-proxy.herokuapp.com/v2?url=${url}`);
  const json=await response.json();

  return json.metadata;
    
 };


 
export const getFullUrl = (path) => {
  return `http://localhost:8000/storage/`+path;
}

