import Image from 'next/image';
import search from '../public/search.png';
import imageTop from '../public/imageTop.png';
import book from '../public/book.png';
import teacher from '../public/teacher.png';
import tests from '../public/tests.png';
import categories from '../public/categories.png';
import copyleft from '../public/copyleft.png';
import email from '../public/email.png';
import youTube from '../public/youTube.png';
import tg from '../public/tg.png';
import whatsApp from '../public/whatsApp.png';

export default function Home() {
    return (
        <div className="lending">
            <header className="navigation">
                <div className="navigation__sections">
                    <div className="link textHover">Статьи</div>
                    <div className="link textHover">Тесты</div>
                    <div className="link textHover">
                        Дополнительные материалы
                    </div>
                </div>
                <div className="navigation__searchAndButtons">
                    <div className="navigation__searchAndButtons__search">
                        <input
                            placeholder="Поиск личности..."
                            type="text"
                        ></input>
                        <Image
                            src={search}
                            alt="search"
                            className="navigation__searchAndButtons__search__img link"
                        />
                    </div>
                    <div className="navigation__searchAndButtons__buttons link">
                        Регистрация
                    </div>
                    <div className="navigation__searchAndButtons__buttons link">
                        Авторизация
                    </div>
                </div>
            </header>
            <main>
                <div className="meetingBlock">
                    <div className="meetingBlock__textBlock">
                        <div className="meetingBlock__textBlock__header">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat est incidunt, culpa recusandae voluptas
                            consectetur.
                        </div>
                        <div className="meetingBlock__textBlock__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque ipsum quo fugit aliquam impedit alias
                            consectetur officia sequi sint consequatur.
                        </div>
                        <div className="meetingBlock__textBlock__button link">
                            Доступниые курсы
                        </div>
                    </div>
                    <div className="meetingBlock__image">
                        <Image src={imageTop} alt="imageTop" />
                    </div>
                </div>
                <div className="sections">
                    <div className="sections__title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, suscipit!
                    </div>
                    <div className="sections__categories">
                        <div className="sections__categories__block link">
                            <div className="sections__categories__block__title">
                                Статьи
                            </div>
                            <div className="sections__categories__block__content">
                                <div className="sections__categories__block__content__quantity">
                                    0+
                                </div>
                                <div className="sections__categories__block__content__img">
                                    <Image
                                        src={book}
                                        alt="book"
                                        className="sections__categories__block__content__img__size"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sections__categories__block link">
                            <div className="sections__categories__block__title">
                                Тесты
                            </div>
                            <div className="sections__categories__block__content">
                                <div className="sections__categories__block__content__quantity">
                                    0+
                                </div>
                                <div className="sections__categories__block__content__img">
                                    <Image
                                        src={teacher}
                                        alt="teacher"
                                        className="sections__categories__block__content__img__size"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sections__categories__block link">
                            <div className="sections__categories__block__title">
                                Дополнительные материалы
                            </div>
                            <div className="sections__categories__block__content">
                                <div className="sections__categories__block__content__quantity">
                                    0+
                                </div>
                                <div className="sections__categories__block__content__img">
                                    <Image
                                        src={tests}
                                        alt="tests"
                                        className="sections__categories__block__content__img__size"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sections__categories__block link">
                            <div className="sections__categories__block__title">
                                Личный прогресс
                            </div>
                            <div className="sections__categories__block__content">
                                <div className="sections__categories__block__content__quantity">
                                    Нет
                                </div>
                                <div className="sections__categories__block__content__img">
                                    <Image
                                        src={categories}
                                        alt="categories"
                                        className="sections__categories__block__content__img__size"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="contacts">
                <div className="contacts__footer">
                    <div className="contacts__footer__text">
                        <text>
                            <Image
                                src={copyleft}
                                alt="copyleft"
                                className="contacts__footer__text__copyleft"
                            />
                            2023
                        </text>
                        <text className="link">Политика конфеденсальности</text>
                        <text className="link">Команда сервиса</text>
                    </div>
                    <div className="contacts__footer__image">
                        <Image src={email} alt="email" className="link" />
                        <Image src={youTube} alt="youTube" className="link" />
                        <Image src={tg} alt="tg" className="link" />
                        <Image src={whatsApp} alt="whatsApp" className="link" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
