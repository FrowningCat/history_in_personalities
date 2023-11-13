import Image from 'next/image';
import search from '../public/Search.png';
import imageTop from '../public/imageTop.png';

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
                <div className="navigation__searchAndLogin">
                    <div className="navigation__searchAndLogin__search">
                        <input
                            placeholder="Поиск личности..."
                            type="text"
                        ></input>
                        <Image
                            src={search}
                            alt="search"
                            className="navigation__searchAndLogin__search__search link"
                        />
                    </div>
                    <div className="button link">Регистрация</div>
                    <div className="button link">Авторизация</div>
                </div>
            </header>
            <div className="meetingBlock">
                <div className="meetingBlock__textBlock">
                    <div className="meetingBlock__textBlock__header">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat est incidunt, culpa recusandae voluptas
                        consectetur.
                    </div>
                    <div className="meetingBlock__textBlock__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque ipsum quo fugit aliquam impedit alias consectetur
                        officia sequi sint consequatur.
                    </div>
                    <div className="meetingBlock__textBlock__button link">
                        Доступниые курсы
                    </div>
                </div>
                <div className="meetingBlock__image">
                    <Image src={imageTop} alt="imageTop" />
                </div>
            </div>
        </div>
    );
}
