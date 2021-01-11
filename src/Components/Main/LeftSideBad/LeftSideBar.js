import React from 'react';
import './LeftSideBarNew.css'

export default function LeftSideBar(){
    return(
        <div className={'Left-Bar-List'}>
            <ul>
                <li><div><div><i className="fas fa-laptop"/></div><a href="/#">Ноутбуки та комп’ютери</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-mobile-alt"/></div><a href="/#">Смартфони, ТВ і електроніка</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-gamepad"/></div><a href="/#">Товари для геймерів</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-blender-phone"/></div><a href="/#">Побутова техніка</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-couch"/></div><a href="/#">Товари для дому</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-toolbox"/></div><a href="/#">Інструменти та автотовари</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-bath"/></div><a href="/#">Сантехніка та ремонт</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-tractor"/></div><a href="/#">Дача, сад і город</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-biking"/></div><a href="/#">Спорт і захоплення</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-tshirt"/></div><a href="/#">Одяг, взуття та прикраси</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-female"/></div><a href="/#">Краса та здоров’я</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-child"/></div><a href="/#">Дитячі товари</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-paperclip"/></div><a href="/#">Канцтовари та книги</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-cocktail"/></div><a href="/#">Алкогольні напої та продукти</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-barcode"/></div><a href="/#">Товари для бізнесу</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-people-carry"/></div><a href="/#">Послуги та сервіси</a></div><i className="fas fa-chevron-right"/></li>
                <li><div><div><i className="fas fa-tag"/></div><a href="/#">Усе для затишних свят</a></div><i className="fas fa-chevron-right"/></li>
            </ul>
        </div>
    );
}