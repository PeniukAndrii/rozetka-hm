import React, {useState} from 'react';
import './ShowAllComp.css'
import Item from "../../Item/Item";


export default function ShowAllComp({value}){
    const [count,setCount] = useState(6)
    const [Btn,setClassBtn] = useState('')
    const handleItemAll = () =>{
        setCount(value.length)
        setClassBtn('Btn-None')
    }
    return(
        <div className={'Main-List'}>
            <div className={'All-Item'}>
                {
                    value.map(value => value.id<=count ? <Item key={value.id} value={value}/>:null)
                }
            </div>
            <div className={`Btn-Show-Wrap ${Btn}`} onClick={()=>handleItemAll()}>
                <div className={'Btn-Show'}>
                    <div>Показати ще <i className="fas fa-arrow-down arrow"/></div>
                </div>
            </div>
        </div>
    );
}
