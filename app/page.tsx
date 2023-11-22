import Image from 'next/image';
import Link from 'next/link';
import headerPhoto from '../public/landing/headerPhoto.png';
import charlesDeGaulle from '../public/landing/CharlesDeGaulle.png';
import marquisDeSade from '../public/landing/MarquisDeSade.png';
import philippePetain from '../public/landing/PhilippePetain.png';
import louisRenault from '../public/landing/LouisRenault.png';
import richelieu from '../public/landing/Richelieu.png';
import teaserPhoto from '../public/landing/teaserPhoto.png';

export default function Home() {
    return (
        <div className="lending">
            <header className="lending__header">
                <div className="lending__header__photo">
                    <Image
                        src={headerPhoto}
                        alt="headerPhoto"
                        className="lending__header__photo__size"
                    />
                </div>
                <div className="lending__header__text">
                    <div className="lending__header__text__header">
                        <div className="lending__header__text__header__title">
                            Aнри Филипп Петен
                        </div>
                        <div className="lending__header__text__header__subtitle">
                            Герой Предатель Патриот
                        </div>
                    </div>
                    <div className="lending__header__text__date">25.11</div>
                </div>
            </header>
            <main className="lending__main">
                <div className="lending__main__textBlok">
                    <div className="lending__main__textBlok__title">
                        История в личностях
                    </div>
                    <div className="lending__main__textBlok__subtitle">
                        Взгляните на исторические события глазами их вершителей
                    </div>
                    <div className="lending__main__textBlok__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora nesciunt, dolor aspernatur, in vero qui ex fuga
                        aut nam aliquam sapiente voluptatem dolorum adipisci
                        harum minus quod similique exercitationem dignissimos
                        inventore consequuntur porro labore. Magni natus
                        delectus ab. Minima, ex!
                    </div>
                </div>
                <div className="lending__main__gridBlok">
                    <div className="lending__main__gridBlok__block1">
                        <Link href="/error404" className="linkImg">
                            <Image
                                src={charlesDeGaulle}
                                alt="charlesDeGaulle"
                                className="lending__main__gridBlok__imgSize"
                            />
                        </Link>
                    </div>
                    <div className="lending__main__gridBlok__block2">
                        <Link href="/error404" className="linkImg">
                            <Image
                                src={louisRenault}
                                alt="louisRenault"
                                className="lending__main__gridBlok__imgSize"
                            />{' '}
                        </Link>
                    </div>
                    <div className="lending__main__gridBlok__block3">
                        <Link href="/error404" className="linkImg">
                            <Image
                                src={marquisDeSade}
                                alt="marquisDeSade"
                                className="lending__main__gridBlok__imgSize"
                            />{' '}
                        </Link>
                    </div>
                    <div className="lending__main__gridBlok__block4">
                        <div className="lending__main__gridBlok__subtitle">
                            Lorem, ipsum dolor.
                        </div>
                        <div className="lending__main__gridBlok__text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Magni, quidem.
                        </div>
                    </div>
                    <div className="lending__main__gridBlok__block5">
                        <div className="lending__main__gridBlok__subtitle">
                            Lorem, ipsum dolor.
                        </div>
                        <div className="lending__main__gridBlok__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae vel doloremque, nam expedita
                            sapiente similique cupiditate? Placeat, at impedit
                            accusantium ipsa neque, possimus vel similique
                            perferendis quaerat, numquam eveniet iusto
                            laudantium natus esse eius culpa. <br />{' '}
                            <text className="linkText link">
                                <Link href="/article" className="link">
                                    Узнать больше
                                </Link>
                            </text>
                        </div>
                    </div>
                    <div className="lending__main__gridBlok__block6">
                        <Link
                            href="/article/philippePetain"
                            className="linkImg"
                        >
                            <Image
                                src={philippePetain}
                                alt="philippePetain"
                                className="lending__main__gridBlok__imgSize"
                            />
                        </Link>
                    </div>
                    <div className="lending__main__gridBlok__block7">
                        <Link href="/error404" className="linkImg">
                            <Image
                                src={richelieu}
                                alt="richelieu"
                                className="lending__main__gridBlok__imgSize"
                            />
                        </Link>
                    </div>
                </div>
            </main>
            <div className="lending__teaser">
                <div className="lending__teaser__photo">
                    <Image
                        src={teaserPhoto}
                        alt="teaserPhoto"
                        className="lending__teaser__photo__imgSize"
                    />
                </div>
                <div className="lending__teaser__textBlock">
                    <div className="lending__teaser__textBlock__title">
                        Aнри Филипп Петен
                    </div>
                    <div className="lending__teaser__textBlock__subtitle">
                        Биография
                    </div>
                    <div className="lending__teaser__textBlock__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam ullam cum, quaerat repellendus saepe maiores,
                        sapiente cupiditate unde esse inventore ducimus
                        similique accusamus at minima velit assumenda illum
                        explicabo corrupti? Excepturi tempora qui laudantium.
                        Autem culpa commodi atque dolorem dolores? <br />
                        <text className="linkText link">
                            <Link
                                href="/article/philippePetain"
                                className="link"
                            >
                                Узнать больше
                            </Link>
                        </text>
                    </div>
                </div>
            </div>
            <footer className="lending__footer">
                <div className="lending__footer__title">Контакты</div>
                <div className="lending__footer__text">
                    Telegram:{' '}
                    <Link
                        href="https://t.me/Frowning_Cat"
                        className="lending__footer__text__telegram link"
                    >
                        Frowning_Cat
                    </Link>
                    <div>Email: vsavinvkov60@gmail.com</div>
                </div>
            </footer>
        </div>
    );
}
