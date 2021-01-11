import React from 'react';
import './LeftSideBarNew.css'

export default function LeftSideBarNew(){
    return(
        <div className={'New-List'}>
            <ul>
                <li>
                    <div><div><i className="fas fa-laptop"/><a href="/#">Ноутбуки та комп’ютери</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-mobile-alt"/><a href="/#">Смартфони, ТВ і електроніка</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-gamepad"/><a href="/#">Товари для геймерів</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-blender-phone"/><a href="/#">Побутова техніка</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-couch"/><a href="/#">Товари для дому</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-toolbox"/><a href="/#">Інструменти та автотовари</a></div><i className="fas fa-chevron-right"/></div>
                </li>
                <li>
                    <div><div><i className="fas fa-bath"/><a href="/#">Сантехніка та ремонт</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-tractor"/><a href="/#">Дача, сад і город</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-biking"/><a href="/#">Спорт і захоплення</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-tshirt"/><a href="/#">Одяг, взуття та прикраси</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-female"/><a href="/#">Краса та здоров’я</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-child"/><a href="/#">Дитячі товари</a></div><i className="fas fa-chevron-right"/></div>
                </li>
                <li>
                    <div><div><i className="fas fa-paperclip"/><a href="/#">Канцтовари та книги</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-cocktail"/><a href="/#">Алкогольні напої та продукти</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-barcode"/><a href="/#">Товари для бізнесу</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-people-carry"/><a href="/#">Послуги та сервіси</a></div><i className="fas fa-chevron-right"/></div>
                    <div><div><i className="fas fa-tag"/><a href="/#">Усе для затишних свят</a></div><i className="fas fa-chevron-right"/></div>
                </li>
            </ul>
        </div>
    );
}