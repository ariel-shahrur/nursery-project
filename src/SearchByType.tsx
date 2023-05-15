import { seasonSelectBoxArr, typeSElectBoxArr } from './ItemsArr'
import {  useNavigate } from 'react-router-dom';

function SearchByType(props:{changeType:Function}) {
  const navigate = useNavigate();

  return (
    <div>
   <label>search by type:
  <select name="typeSelectBox" id="typeSelectBox" onChange={(event)=>{
    navigate(`/shop/${event.target.value}`);// to change the url according the select on the selectbox
      props.changeType(event.target.value);
  }}>
      {typeSElectBoxArr.map((curr,i)=>{
        return (
        <option key={curr.key} value={curr.value}>{curr.displayStr}</option>
      )})}
    </select>  </label>

    </div>
  )
}

export default SearchByType