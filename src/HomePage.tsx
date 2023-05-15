import { Link } from 'react-router-dom'
import './homePage.css'
import { typeSElectBoxArr } from './dataContext/ItemsArr';
import HomePageMidDiv from './HomePageMidDiv';

function HomePage() {

  return (
    <div id="homePageDiv">
      <HomePageMidDiv></HomePageMidDiv>
      <div id="categoryDiv">
        <h3>Category</h3>
        <div id="categoryTypeDiv">
          {typeSElectBoxArr.map(curr => {
            return curr.value === "all" || < div key={curr.key} className='homePageTypeIconItem'>
              <Link to={curr.link} style={{ textDecoration: 'none', color: '#000000' }}>{curr.imgUrl}<br />{curr.displayStr}</Link>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage