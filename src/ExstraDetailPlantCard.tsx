import wishListIcon from './wishListIcon.png'
import './plantCard.css'
import './ExstraDetailPlantCard.css'



function ExstraDetailPlantCard(
    props: {
        key: number,
        name: string,
        price: number,
        type: string,
        season: string,
        lighting_requirements: string,
        description: string,
        image_url: string,
        onClick: Function,
        onClickWishList: Function
    }) {

    return (
        <div className='ExstraDetailPlantCard'>
            <img src={props.image_url} alt="" />
            <h3>{props.name}</h3>
            <h4>{props.price}$</h4>
            <h4>Season: {props.season}</h4>
            <h4>Lighting Requirements: {props.lighting_requirements}</h4>
            <p>{props.description}</p>
            <div id="butnWishIconDiv">
                <button onClick={() => { props.onClick() }}>Add to cart</button>
                <img onClick={() => { props.onClickWishList() }} src={wishListIcon} alt="" id="wishListIcon" />
            </div>
        </div>
    )
}

export default ExstraDetailPlantCard