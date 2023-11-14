import Image from 'next/image';
import search from '../public/landing/search.png';
import imageTop from '../public/landing/imageTop.png';
import book from '../public/landing/book.png';
import teacher from '../public/landing/teacher.png';
import tests from '../public/landing/tests.png';
import categories from '../public/landing/categories.png';
import copyleft from '../public/landing/copyleft.png';
import email from '../public/landing/email.png';
import youTube from '../public/landing/youTube.png';
import tg from '../public/landing/tg.png';
import whatsApp from '../public/landing/whatsApp.png';

export default function Home() {
    return (
        <div className="lending">
            <header className="lending__navigation">
                <div className="lending__navigation__sections">
                    <div className="link textHover">Статьи</div>
                    <div className="link textHover">Тесты</div>
                    <div className="link textHover">
                        Дополнительные материалы
                    </div>
                </div>
                <div className="lending__navigation__searchAndButtons">
                    <div className="lending__navigation__searchAndButtons__search">
                        <input
                            placeholder="Поиск личности..."
                            type="text"
                        ></input>
                        <Image
                            src={search}
                            alt="search"
                            className="lending__navigation__searchAndButtons__search__img link"
                        />
                    </div>
                    <div className="lending__navigation__searchAndButtons__buttons link">
                        Регистрация
                    </div>
                    <div className="lending__navigation__searchAndButtons__buttons link">
                        Авторизация
                    </div>
                </div>
            </header>
            <main>
                <div className="lending__meetingBlock">
                    <div className="lending__meetingBlock__textBlock">
                        <div className="lending__meetingBlock__textBlock__header">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat est incidunt, culpa recusandae voluptas
                            consectetur.
                        </div>
                        <div className="lending__meetingBlock__textBlock__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque ipsum quo fugit aliquam impedit alias
                            consectetur officia sequi sint consequatur.
                        </div>
                        <div className="lending__meetingBlock__textBlock__button link">
                            Доступниые курсы
                        </div>
                    </div>
                    <div className="lending__meetingBlock__image">
                        <Image src={imageTop} alt="imageTop" />
                    </div>
                </div>
                <div className="lending__sections">
                    <div className="lending__sections__title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, suscipit!
                    </div>
                    <div className="lending__sections__categories">
                        <div className="lending__sections__categories__block link">
                            <div className="lending__sections__categories__block__title">
                                Статьи
                            </div>
                            <div className="lending__sections__categories__block__content">
                                <div className="lending__sections__categories__block__content__quantity">
                                    0+
                                </div>
                                <div className="lending__sections__categories__block__content__img">
                                    <Image
                                        src={book}
                                        alt="book"
                                        className="lending__sections__categories__block__content__img__size"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lending__sections__categories__block link">
                            <div className="lending__sections__categories__block__title">
                                Тесты
                            </div>
                            <div className="lending__sections__categories__block__content">
                                <div className="lending__sections__categories__block__content__quantity">
                                    0+
                                </div>
                                <div className="lending__sections__categories__block__content__img">
                                    <Image
                                        src={teacher}
                                        alt="teacher"
                                        className="lending__sections__categories__block__content__img__size"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lending__sections__categories__block link">
                            <div className="lending__sections__categories__block__title">
                                Дополнительные материалы
                            </div>
                            <div className="lending__sections__categories__block__content">
                                <div className="lending__sections__categories__block__content__quantity">
                                    0+
                                </div>
                                <div className="lending__sections__categories__block__content__img">
                                    <Image
                                        src={tests}
                                        alt="tests"
                                        className="lending__sections__categories__block__content__img__size"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lending__sections__categories__block link">
                            <div className="lending__sections__categories__block__title">
                                Личный прогресс
                            </div>
                            <div className="lending__sections__categories__block__content">
                                <div className="lending__sections__categories__block__content__quantity">
                                    Нет
                                </div>
                                <div className="lending__sections__categories__block__content__img">
                                    <Image
                                        src={categories}
                                        alt="categories"
                                        className="lending__sections__categories__block__content__img__size"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="lending__contacts">
                <div className="lending__contacts__footer">
                    <div className="lending__contacts__footer__text">
                        <text>
                            <Image
                                src={copyleft}
                                alt="copyleft"
                                className="lending__contacts__footer__text__copyleft"
                            />
                            2023
                        </text>
                        <text className="link textHover">
                            Политика конфеденсальности
                        </text>
                        <text className="link textHover">Команда сервиса</text>
                    </div>
                    <div className="lending__contacts__footer__image">
                        <Image
                            src={email}
                            alt="email"
                            className="lending__contacts__footer__image__size link"
                        />
                        <Image
                            src={youTube}
                            alt="youTube"
                            className="lending__contacts__footer__image__size link"
                        />
                        <Image
                            src={tg}
                            alt="tg"
                            className="lending__contacts__footer__image__size link"
                        />
                        <Image
                            src={whatsApp}
                            alt="whatsApp"
                            className="lending__contacts__footer__image__size link"
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
}
