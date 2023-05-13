import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'
import { AllDataStore } from './DataContext';
import { typeSElectBoxArr } from './ItemsArr';
import HomePageMidDiv from './HomePageMidDiv';

function HomePage() {
const {plantsArr,setPlantsArr}= useContext(AllDataStore);
const {setCopyOfPlantsArr}= useContext(AllDataStore);
// console.log(plantsArr);
useEffect(()=>{
  fetch("https://mocki.io/v1/4f7f44b4-0d2b-412a-8ee4-947dc5cfa250")
.then(dataStr=>{return dataStr.json()})
.then(dataObj=>{
setPlantsArr(dataObj.plants);
setCopyOfPlantsArr(dataObj.plants);
})
},[]);
  
  
  return (
    <div id="homePageDiv">
   <HomePageMidDiv></HomePageMidDiv>
    <div id="categoryDiv">
      <h3>Category</h3>
      <div id="categoryTypeDiv">
        {typeSElectBoxArr.map(curr=>{
          return curr.value==="all"||<div>
            <Link to='/shop' style={{ textDecoration: 'none',color: '#000000'  }}>{curr.imgUrl}{curr.displayStr}</Link>
            </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default HomePage