import Image from 'next/image';
import Link from 'next/link';
import philippePetain from '../../../public/article/PhilippePetain.png';
import ferdinandPorsche from '../../../public/article/FerdinandPorsche.png';
import cardinalRichelieu from '../../../public/article/CardinalRichelieu.png';
import guntherQuandt from '../../../public/article/GuntherQuandt.png';

export default function undeservedlyVilified() {
    return (
        <div className="article">
            <div className="article__topBar	">
                <div className="article__topBar__name">
                    <div>HP</div>
                </div>
                <div className="article__topBar__links">
                    <div className="article__topBar__links__text link">
                        lorem
                    </div>
                    <div className="article__topBar__links__text link">
                        lorem
                    </div>
                    <div className="article__topBar__links__text link">
                        lorem
                    </div>
                    <div className="article__topBar__links__text link">
                        lorem
                    </div>
                </div>
            </div>
            <div className="article__title">Незаслуденно очерненные</div>
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
        </div>
    );
}
