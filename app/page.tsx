import Image from 'next/image';
import search from '../public/search.png';

export default function Home() {
    return (
        <div className="lending">
            <header className="navigation">
                <div className="navigation__sections">
                    <div className="link">Статьи</div>
                    <div className="link">Тесты</div>
                    <div className="link">Дополнительные материалы</div>
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
                            className="navigation__searchAndLogin__search__search"
                        />
                    </div>
                    <div className="button link">Регистрация</div>
                    <div className="button link">Авторизация</div>
                </div>
            </header>
        </div>
    );
}
