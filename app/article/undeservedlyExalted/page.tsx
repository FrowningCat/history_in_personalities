import Image from 'next/image';
import Link from 'next/link';
import alexandetGreat from '../../../public/article/AlexandetGreat.png';
import charlesDeGaulle from '../../../public/article/CharlesDeGaulle.png';
import franciscoFranco from '../../../public/article/FranciscoFranco.png';

export default function undeservedlyExalted() {
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
            <div className="article__title">Незаслуденно возвеличены</div>
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
        </div>
    );
}
