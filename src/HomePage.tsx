import { Link } from 'react-router-dom'
import './homePage.css'
import { typeSElectBoxArr } from './ItemsArr';
import HomePageMidDiv from './HomePageMidDiv';

function HomePage() {

  return (
    <div id="homePageDiv">
   <HomePageMidDiv></HomePageMidDiv>
    <div id="categoryDiv">
      <h3>Category</h3>
      <div id="categoryTypeDiv">
        {typeSElectBoxArr.map(curr=>{
          return curr.value==="all"||< div key={curr.key}>
            <Link  to='/shop' style={{ textDecoration: 'none',color: '#000000'  }}>{curr.imgUrl}{curr.displayStr}</Link>
            </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default HomePage