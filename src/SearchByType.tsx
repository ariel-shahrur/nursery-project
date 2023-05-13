import React, { useContext, useState } from 'react'
import { typeSElectBoxArr } from './ItemsArr'
import { AllDataStore } from './DataContext';
import { PlantIntrfc } from './PlantIntrfc';
// props:{FuncFromParnt:Function}
function SearchByType() {
    const {plantsArr,setPlantsArr}= useContext(AllDataStore);
    console.log("i am in search",plantsArr);
    
    const {copyOfPlantsArr,setCopyOfPlantsArr}= useContext(AllDataStore);
    // const [stam,setStam]=useState([]);
    const filterByType= (e:React.ChangeEvent<HTMLSelectElement>)=>{
      setPlantsArr(copyOfPlantsArr);
      setPlantsArr(plantsArr.filter((curr:PlantIntrfc)=>{
            if(curr.type.toLocaleLowerCase()===e.target.value.toLocaleLowerCase()){
              return true;
            }
            else{
              return false;
            }
        }))
        
    }
  return (
    <div>
        <label>search by type:
        {/* onChange={(e)=>(filterByType(e))} */}
  <select name="typeSelectBox" id="typeSelectBox"  onChange={(e)=>(filterByType(e))}>
      {typeSElectBoxArr.map((curr,i)=>{
        return (i===0&&<option disabled selected value={curr.value}>{curr.displayStr}</option>)||
        <option value={curr.value}>{curr.displayStr}</option>
      })}
    </select>  </label>
    </div>
  )
}

export default SearchByType