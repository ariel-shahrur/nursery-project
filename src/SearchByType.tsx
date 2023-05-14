import { typeSElectBoxArr } from './ItemsArr'
// props:{FuncFromParnt:Function}
function SearchByType(props:{changeType:Function}) {
    

        
  return (
    <div>
   <label>search by type:
  <select name="typeSelectBox" id="typeSelectBox" onChange={(event)=>{
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