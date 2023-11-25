import Link from 'next/link';

export default function partners() {
    return (
        <div className="article">
            <div className="article__topBar">
                <div className="article__topBar__name">
                    <div>HP</div>
                </div>
                <div className="article__topBar__links">
                    <div className="article__topBar__links__text link">
                        <Link href="/" className="link">
                            Главная страница
                        </Link>
                    </div>
                    <div className="article__topBar__links__text link">
                        <Link href="/article" className="link">
                            Разделы
                            <div className="article__topBar__links__text__sections">
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/undeservedlyVilified"
                                        className="link"
                                    >
                                        Незаслуденно очерненные
                                    </Link>
                                </text>
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/undeservedlyExalted"
                                        className="link"
                                    >
                                        Незаслуденно возвеличены
                                    </Link>
                                </text>
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/crazyStories"
                                        className="link"
                                    >
                                        Безумные истории
                                    </Link>
                                </text>
                            </div>
                        </Link>
                    </div>
                    <div className="article__topBar__links__text link">
                        Партнеры
                    </div>
                    <div className="article__topBar__links__text link">
                        <Link href="/aboutUs" className="link">
                            О нас
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lorem">Партнеры</div>
        </div>
    );
}
