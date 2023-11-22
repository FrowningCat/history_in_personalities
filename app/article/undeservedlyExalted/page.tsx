import Image from 'next/image';
import Link from 'next/link';
import philippePetain from '../../../public/article/PhilippePetain.png';
import imgNotFund from '../../../public/article/404.jpg';

export default function undeservedlyExalted() {
    return (
        <div className="article">
            <div className="article__topBar">
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
            <div className="article__title">Незаслуденно возвеличены</div>
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
                    </Link>
                </div>
            </div>
        </div>
    );
}
