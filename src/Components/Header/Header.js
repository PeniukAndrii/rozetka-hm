import React, {useState} from 'react';
import './Header.css'
import {useSelector} from "react-redux";
export default function Header(){
    const item = useSelector(({item})=>item)


    const handleLikeList = ()=>{
        console.log(1)
    }

    return(
        <div className={'Header-Wrap'}>
            <div className={'Header-Wrap-Inside'}>
                <div className={'Header-Top'}>
                    <div className={'Header-Top-Left'}>
                        <ul>
                            <li><i className="fas fa-phone"/> <span className={'Number'}>(044) 537-02-22</span><i className="fas fa-angle-down"/></li>
                            <li><a href="/#">Контакти</a></li>
                            <li><a href="/#">Допомога</a></li>
                            <li><a href="/#">Наша відповідь COVID-19</a></li>
                        </ul>
                    </div>
                    <div className={'Header-Top-Right'}>
                        <ul>
                            <li><a href="/#">RU | UA</a></li>
                            <li><a href="/#">Місто<span className={'City'}> Львів</span></a></li>
                            <li><span className={'Hello'}>Вітаємо,</span> <i className="fas fa-user-alt"/><span className={'Login'}>увійдіть в особистий кабінет</span></li>
                        </ul>
                    </div>
                </div>

                <div className={'Header-Under'}>
                    <i className="fas fa-bars"/>
                    <a href="/#" className={'Rozetka-Logo-Wrap'}><img src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" alt="rozetkaLogo" className={'Rozetka-Logo'}/></a>
                    <div className={'Btn-Under-Wrap'}>
                        <button className={'Btn-Under'}><i className="fas fa-th-large"/> Каталог товаров</button>
                    </div>
                    <div className={'Search-Wrap'}>
                        <form className={'Form-Wrap'}>
                            <i className="fas fa-search"/>
                            <input type="text" className={'Search'} placeholder={'Я шукаю...'}/>
                        </form>
                        <div className={'Micro-Search'}><i className="fas fa-microphone"/></div>
                        <button className={'Search-Btn'}>Знайти</button>
                    </div>

                    <ul className={'Nav-Right'}>
                        <li className={'S-Div'}><div className={'S-Div'}><i className="fas fa-shipping-fast"/></div></li>
                        <li className={'S-Div'}><div className={'S-Div'}><i className="fas fa-balance-scale"/></div></li>
                        <li className={'H-Div'} onMouseEnter={()=>handleLikeList()}><div className={'H-Div'}><i className={`far fa-heart`}/>
                        <div className={`Count-Like-Wrap`}>
                            {
                                item.length > 0 ? (<div className={'Count-Like'}>{item.length}</div>): null
                            }
                        </div>
                        </div></li>
                        <li className={'C-Div'}><div className={'C-Div'}><i className="fas fa-shopping-cart"/></div></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}