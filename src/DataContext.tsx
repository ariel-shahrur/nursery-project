import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface DataContext{
    plantsArr:any;
    setPlantsArr:Dispatch<SetStateAction<any>>;
    copyOfPlantsArr:any;
    setCopyOfPlantsArr:Dispatch<SetStateAction<any>>;
    cartArr:any;
    setCartArr:Dispatch<SetStateAction<any>>;
}

export const AllDataStore = createContext<DataContext>(
    {
        plantsArr:[],
        setPlantsArr:()=>{},
        cartArr:[],
    setCartArr:()=>{},
    copyOfPlantsArr:[],
    setCopyOfPlantsArr:()=>{}
    }
)


export const DataProvider=(props:{children:ReactNode})=>{
    const [plantsArr,setPlantsArr]= useState([]);
    const [cartArr,setCartArr]= useState([]);
    const [copyOfPlantsArr,setCopyOfPlantsArr]= useState([]);
    return (
        <AllDataStore.Provider value={{plantsArr, setPlantsArr,cartArr,setCartArr,copyOfPlantsArr,setCopyOfPlantsArr}}>
            {props.children}
        </AllDataStore.Provider>
    )
}

