import Image from 'next/image';
import Link from 'next/link';
import headerPhoto from '../public/landing/headerPhoto.png';
import josephII from '../public/landing/JosephII.png';
import salvadorDali from '../public/landing/SalvadorDali.png';
import meiji from '../public/landing/EmperorMeiji.jpg';
import louisRenault from '../public/landing/LouisRenault.png';
import richelieu from '../public/landing/Richelieu.png';
import immanuelKant from '../public/landing/ImmanuelKant.png';
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
                    <div className="lending__header__text__date">27.11</div>
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
                        Человек хорошо знающий историю, не только своей страны,
                        но и других, в меньшей степени подвержен влиянию
                        пропаганды и имеет более критический взгляд на мир.
                        Задача данного проекта дать возможность читателю
                        взглянуть на исторические личности с другой стороны, не
                        с целью оправдать или принизить их, а с целью понять
                        причины их действий.
                        <br />{' '}
                        <text className="linkText link">
                            <Link href="/article" className="link">
                                Узнать больше
                            </Link>
                        </text>
                    </div>
                </div>
                <div className="lending__main__gridBlok">
                    <div className="lending__main__gridBlok__blockEmpty"></div>
                    <div className="lending__main__gridBlok__block1">
                        <Link href="/error404" className="linkImg">
                            <Image
                                src={josephII}
                                alt="josephII"
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
                                src={salvadorDali}
                                alt="salvadorDali"
                                className="lending__main__gridBlok__imgSize"
                            />{' '}
                        </Link>
                    </div>
                    <div className="lending__main__gridBlok__blockEmpty"></div>
                    <div className="lending__main__gridBlok__block4">
                        <Link
                            href="/article/philippePetain"
                            className="linkImg"
                        >
                            <Image
                                src={meiji}
                                alt="meiji"
                                className="lending__main__gridBlok__imgSize"
                            />
                        </Link>
                    </div>
                    <div className="lending__main__gridBlok__blockEmpty"></div>
                    <div className="lending__main__gridBlok__block2">
                        <Link href="/error404" className="linkImg">
                            <Image
                                src={richelieu}
                                alt="richelieu"
                                className="lending__main__gridBlok__imgSize"
                            />
                        </Link>
                    </div>
                    <div className="lending__main__gridBlok__block5">
                        <Link href="/error404" className="linkImg">
                            <Image
                                src={immanuelKant}
                                alt="immanuelKant"
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
                    <div className="lending__teaser__textBlock__text">
                        Как, герой первой мировой войны, “Верденский лев”,
                        патриот своей страны, возглавил колабрационное, про
                        немецкое правительство, и почему долгие десятилетия
                        французские политики возлагают цветы на его могилу.{' '}
                        <br />
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
        </div>
    );
}
