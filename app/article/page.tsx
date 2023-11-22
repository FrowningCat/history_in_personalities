import Image from 'next/image';
import Link from 'next/link';
import philippePetain from '../../public/article/PhilippePetain.png';
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
                        Разделы
                    </div>
                    <div className="article__topBar__links__text link">
                        Партнеры
                    </div>
                    <div className="article__topBar__links__text link">
                        О нас
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
                            src={imgNotFund}
                            alt="imgNotFund"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Lorem, ipsum dolor.
                        </div>
                    </Link>
                </div>
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
                            Lorem, ipsum dolor.
                        </div>
                    </Link>
                </div>
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
                            Lorem, ipsum dolor.
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
                            src={imgNotFund}
                            alt="imgNotFund"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Lorem, ipsum dolor.
                        </div>
                    </Link>
                </div>
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
                            Lorem, ipsum dolor.
                        </div>
                    </Link>
                </div>
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
                            Lorem, ipsum dolor.
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
