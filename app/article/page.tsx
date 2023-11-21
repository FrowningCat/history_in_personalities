import Image from 'next/image';
import Link from 'next/link';
import philippePetain from '../../public/article/PhilippePetain.png';
import imgNotFund from '../../public/article/404.jpg';

export default function Article() {
    return (
        <div className="article">
            <div className="article__categories">
                <div className="article__categories__title">Страны</div>
                <div className="article__categories__keywords">
                    <div className="article__categories__keywords__chapter">
                        <div className="article__categories__keywords__chapter__text link">
                            Франция
                        </div>
                        <div className="article__categories__keywords__chapter__quantity">
                            (1)
                        </div>
                    </div>
                    <div className="article__categories__keywords__chapter">
                        <div className="article__categories__keywords__chapter__text link">
                            Испания
                        </div>
                        <div className="article__categories__keywords__chapter__quantity">
                            (0)
                        </div>
                    </div>
                    <div className="article__categories__keywords__chapter">
                        <div className="article__categories__keywords__chapter__text link">
                            Чехия
                        </div>
                        <div className="article__categories__keywords__chapter__quantity">
                            (0)
                        </div>
                    </div>
                    <div className="article__categories__keywords__chapter">
                        <div className="article__categories__keywords__chapter__text link">
                            Япония
                        </div>
                        <div className="article__categories__keywords__chapter__quantity">
                            (0)
                        </div>
                    </div>
                    <div className="article__categories__keywords__chapter">
                        <div className="article__categories__keywords__chapter__text link">
                            Греция
                        </div>
                        <div className="article__categories__keywords__chapter__quantity">
                            (0)
                        </div>
                    </div>
                    <div className="article__categories__keywords__chapter">
                        <div className="article__categories__keywords__chapter__text link">
                            Китай
                        </div>
                        <div className="article__categories__keywords__chapter__quantity">
                            (0)
                        </div>
                    </div>
                </div>
            </div>
            <div className="article__personalities">
                <div className="article__personalities__persona">
                    <Link href="/article/philippePetain" className="link">
                        <div className="article__personalities__persona__img">
                            <Image
                                src={philippePetain}
                                alt="philippePetain"
                                className="article__personalities__persona__img__imgSize linkImg"
                            />
                        </div>
                        <div className="article__personalities__persona__name">
                            Aнри Филипп Петен
                        </div>
                        <div className="article__personalities__persona__title">
                            Герой Предатель Патриот
                        </div>
                    </Link>
                </div>
                <div className="article__personalities__persona">
                    <Link href="/error404" className="link">
                        <div className="article__personalities__persona__img">
                            <Image
                                src={imgNotFund}
                                alt="imgNotFund"
                                className="article__personalities__persona__img__imgSize linkImg"
                            />
                        </div>
                        <div className="article__personalities__persona__name">
                            Lorem, ipsum dolor.
                        </div>
                        <div className="article__personalities__persona__title">
                            Lorem, ipsum dolor.
                        </div>
                    </Link>
                </div>
                <div className="article__personalities__persona">
                    <Link href="/error404" className="link">
                        <div className="article__personalities__persona__img">
                            <Image
                                src={imgNotFund}
                                alt="imgNotFund"
                                className="article__personalities__persona__img__imgSize linkImg"
                            />
                        </div>
                        <div className="article__personalities__persona__name">
                            Lorem, ipsum dolor.
                        </div>
                        <div className="article__personalities__persona__title">
                            Lorem, ipsum dolor.
                        </div>
                    </Link>
                </div>
                <div className="article__personalities__persona">
                    <Link href="/error404" className="link">
                        <div className="article__personalities__persona__img">
                            <Image
                                src={imgNotFund}
                                alt="imgNotFund"
                                className="article__personalities__persona__img__imgSize linkImg"
                            />
                        </div>
                        <div className="article__personalities__persona__name">
                            Lorem, ipsum dolor.
                        </div>
                        <div className="article__personalities__persona__title">
                            Lorem, ipsum dolor.
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
