import React ,{useState} from 'react';
import './Item.css'
import {useDispatch} from "react-redux";

export default function Item({value}){
    const [Checked,SetChecked] = useState('far')

    const handleItem = ()=>{
        dispatch({type:'SET_ITEM', payload:value})
        Checked==='fas' ? SetChecked('far') : SetChecked('fas')
    }
    const dispatch = useDispatch()

    return(
        <div className={'Item-Main-Wrap'}>
            <div className={'Like-Item'} onClick={()=>handleItem()}><i className={`${Checked} fa-heart`}/></div>
            <div className={'Img-Wrap'}>
                <img src={`${value.img}`} alt={`${value.title}`}/>
            </div>
            <div className={'Item-Title'}>{value.title}</div>
            <div className={'Item-Price'}>{value.price} <span>₴</span></div>
        </div>

    );
}