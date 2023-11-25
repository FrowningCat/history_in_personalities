import Image from 'next/image';
import Link from 'next/link';
import philippePetain from '../../public/article/PhilippePetain.png';
import ferdinandPorsche from '../../public/article/FerdinandPorsche.png';
import cardinalRichelieu from '../../public/article/CardinalRichelieu.png';
import guntherQuandt from '../../public/article/GuntherQuandt.png';
import alexandetGreat from '../../public/article/AlexandetGreat.png';
import charlesDeGaulle from '../../public/article/CharlesDeGaulle.png';
import franciscoFranco from '../../public/article/FranciscoFranco.png';
import imgNotFund from '../../public/article/404.jpg';

export default function Article() {
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
                        <Link href="/partners" className="link">
                            Партнеры
                        </Link>
                    </div>
                    <div className="article__topBar__links__text link">
                        <Link href="/aboutUs" className="link">
                            О нас
                        </Link>
                    </div>
                </div>
            </div>
            <div className="article__title link">
                <Link href="/article/undeservedlyVilified" className="link">
                    Незаслуденно очерненные
                </Link>
            </div>
            <div className="article__personalities">
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={philippePetain}
                            alt="philippePetain"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/article/philippePetain">
                        <div className="article__personalities__persona__name link">
                            Aнри Филипп Петен
                        </div>
                    </Link>
                </div>
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={ferdinandPorsche}
                            alt="ferdinandPorsche"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Фердинанд Порше
                        </div>
                    </Link>
                </div>
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={cardinalRichelieu}
                            alt="cardinalRichelieu"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Кардинал Ришелье
                        </div>
                    </Link>
                </div>
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={guntherQuandt}
                            alt="guntherQuandt"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Гюнтер Квандт
                        </div>
                    </Link>
                </div>
            </div>
            <div className="article__title link">
                <Link href="/article/undeservedlyExalted" className="link">
                    Незаслуденно возвеличены
                </Link>
            </div>
            <div className="article__personalities">
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={alexandetGreat}
                            alt="alexandetGreat"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Александр македонский
                        </div>
                    </Link>
                </div>
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={charlesDeGaulle}
                            alt="charlesDeGaulle"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Шарль де Голль
                        </div>
                    </Link>
                </div>
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={franciscoFranco}
                            alt="franciscoFranco"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Франсиско Франко
                        </div>
                    </Link>
                </div>
            </div>
            <div className="article__title link">
                <Link href="/article/crazyStories" className="link">
                    Безумные истории
                </Link>
            </div>
            <div className="article__personalities">
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={imgNotFund}
                            alt="imgNotFund"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Василий Яковлевич Баранщиков
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
