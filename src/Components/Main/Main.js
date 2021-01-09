import React from 'react';
import './Main.css'
import {Carousel} from "react-bootstrap";
import {FakeStoreOffer} from "../../FakeServer/Offer";
import TitleComp from "../Header/TitleComp/TitleComp";
import ShowAllComp from "../Header/ShowAllComp/ShowAllComp";

export default function Main(){
    return(
        <div className={'Main-Wrap'}>
            <div className={'Left-Bar-Main'}>
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

                <div className={'Hello-Wrap'}>
                    <div>
                        <div className={'Hello-Left-Bar'}>Ласкаво просимо!</div>
                        <div className={'Login-Text'}>Увійдіть, щоб отримувати рекомендації, персональні бонуси і знижки.</div>
                        <div className={'Login-Btn-Wrap'}>
                            <button className={'Login-Btn'}>Увійдіть в особистий кабінет</button>
                        </div>
                    </div>
                </div>
                
                <div className={'Left-Side-Bar-Wrap-Padding'}>
                    <div className={'Left-Side-Bar-Text'}>Встановлюйте наші додатки</div>
                    <div className={'Download-App-Wrap'}>
                        <img src="https://xl-static.rozetka.com.ua/assets/img/design/button-google-play-ua.svg" alt="G-Play-Store-Img"/>
                        <img src="https://xl-static.rozetka.com.ua/assets/img/design/button-appstore-ua.svg" alt="App-Store-Img"/>
                    </div>
                </div>

                <div className={'Left-Side-Bar-Wrap-Padding'}>
                    <div className={'Left-Side-Bar-Text'}>Графік роботи Call-центру</div>
                    <div className={'Left-Side-Bar-Number'}>+38 044 537-02-22</div>
                    <div className={'Left-Side-Bar-Number'}>+38 044 503-80-80</div>
                    <div className={'Left-Side-Bar-Time'}>У будні</div><div className={'Left-Side-Bar-Time'}>з 08:00 до 21:00</div>
                    <div className={'Left-Side-Bar-Time'}>Субота</div><div className={'Left-Side-Bar-Time'}>з 09:00 до 20:00</div>
                    <div className={'Left-Side-Bar-Time'}>Неділя</div><div className={'Left-Side-Bar-Time'}>з 10:00 до 19:00</div>
                </div>

                <div className={'Left-Side-Bar-Wrap-Padding'}>
                    <div className={'Left-Side-Bar-Text'}>Ми в соціальних мережах</div>
                    <div className={'Social-Media'}>
                        <div><i className="fab fa-facebook-f"/></div>
                        <div><i className="fab fa-twitter"/></div>
                        <div><i className="fab fa-youtube"/></div>
                        <div><i className="fab fa-instagram"/></div>
                        <div><i className="fab fa-viber"/></div>
                    </div>
                </div>

                <div className={'Left-Side-Bar-Wrap-Padding Left-Bar-List'}>
                    <div className={'Help-Block'}>
                        <div className={'Left-Side-Bar-Text'}>Допомога</div>
                        <ul>
                            <li><a href="/#">Доставка та оплата</a></li>
                            <li><a href="/#">Кредит</a></li>
                            <li><a href="/#">Гарантія</a></li>
                            <li><a href="/#">Повернення товару</a></li>
                            <li><a href="/#">Сервісні центри</a></li>
                            <li><a href="/#">Відстежити замовлення</a></li>
                        </ul>
                    </div>
                    <div className={'Help-Block'}>
                        <div className={'Left-Side-Bar-Text'}>Інформація про компанію</div>
                        <ul>
                            <li><a href="/#">Про нас</a></li>
                            <li><a href="/#">Умови використання сайту</a></li>
                            <li><a href="/#">Вакансії</a></li>
                            <li><a href="/#">Контакти</a></li>
                        </ul></div>
                    <div className={'Help-Block'}>
                        <div className={'Left-Side-Bar-Text'}>Сервіси</div>
                        <ul>
                            <li><a href="/#">Бонусний рахунок</a></li>
                            <li><a href="/#">Rozetka Premium</a></li>
                            <li><a href="/#">Подарункові сертифікати</a></li>
                            <li><a href="/#">Переказ грошей з картки на картку</a></li>
                            <li><a href="/#">Тури та відпочинок</a></li>
                        </ul></div>
                    <div className={'Help-Block'}>
                        <div className={'Left-Side-Bar-Text'}>Партнерам</div>
                        <ul>
                            <li><a href="/#">Продавати на Розетці</a></li>
                            <li><a href="/#">Співпраця з нами</a></li>
                            <li><a href="/#">Логотип и стайлгайд</a></li>
                        </ul></div>
                </div>

                <div className={'Left-Side-Bar-Wrap-Padding'}>
                    <div className={'Card-Pay'}>
                        <img src="https://xl-static.rozetka.com.ua/assets/img/design/mastercard-logo.svg" alt="card-pay-mastercard"/>
                        <img src="https://xl-static.rozetka.com.ua/assets/img/design/visa-logo.svg" alt="card-pay-visa"/>
                    </div>

                    <div className={'Left-Side-Bar-Text'}>ТМ використовується на підставі ліцензії правовласника RozetkaLTD.</div>
                    <div className={'Left-Side-Bar-Text'}>© Інтернет-магазин «Розетка™» 2001–2021</div>
                </div>
            </div>

            <div className={'Right-Bar-Main'}>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block" src="https://i2.rozetka.ua/owoxads/sliders/28/28991.jpg" alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block" src="https://i2.rozetka.ua/owoxads/sliders/28/28716.jpg" alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block" src="https://i1.rozetka.ua/owoxads/sliders/28/28076.jpg" alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block" src="https://i2.rozetka.ua/owoxads/sliders/28/28806.jpg" alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block" src="https://i1.rozetka.ua/owoxads/sliders/27/27196.jpg" alt="Second slide"/>
                    </Carousel.Item>
                </Carousel>
                <div className={'All-Carousel-Item-Wrap'}>
                    <div className={'All-Carousel-Item'}>
                        <a href="/#">Всі Акції</a>
                    </div>
                </div>
                <TitleComp title={'Тільки в Розетці'} icon={'fa-star'}/>
                <div className={'All-Item'}>
                    <ShowAllComp value={FakeStoreOffer}/>
                </div>
                <TitleComp title={'Зараз користується попитом в категорії Штучні ялинки'} icon={'fa-comments'}/>
            </div>
        </div>
    );
}