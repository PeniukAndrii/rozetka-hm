import React ,{useState} from 'react';
import './Item.css'
import {useDispatch} from "react-redux";

export default function Item({value}){
    const [Checked,SetChecked] = useState('far')
    const [Btn,SetBtn] = useState('')
    const [BtnTitle,SetBtnTitle] = useState('AddToCart')

    const handleItem = ()=>{
        dispatch({type:'SET_ITEM', payload:value})
        Checked==='fas' ? SetChecked('far') : SetChecked('fas')
    }
    const handleCart = ()=>{
        dispatch({type:'ADD_CART',payload:value})
        Btn==='Btn-Check' ? SetBtn('') : SetBtn('Btn-Check')
        BtnTitle==='AddToCart' ? SetBtnTitle('DeleteFCart') : SetBtnTitle('AddToCart')
        console.log(value)
    }
    const dispatch = useDispatch()

    return(
        <div className={'Item-Main-Wrap'}>
            <div className={'Like-Item'} onClick={()=>handleItem()}>
                <i className={`${Checked} fa-heart`}/>
            </div>
            <div className={'Img-Wrap'}>
                <img src={`${value.img}`} alt={`${value.title}`}/>
            </div>
            <div className={'Item-Title'}>{value.title}</div>
            <div className={'Item-Price'}>
                <div className={'Price'}>
                    <div>{value.price}</div>
                    <div>₴</div></div>
                <button className={`Add-To-Cart ${Btn}`} onClick={()=>handleCart()}>{BtnTitle}</button>
            </div>
        </div>

    );
}