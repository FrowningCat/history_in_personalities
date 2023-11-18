import Image from 'next/image';
import headerPhoto from '../public/landing/headerPhoto.png';
import charlesDeGaulle from '../public/landing/CharlesDeGaulle.png';
import marquisDeSade from '../public/landing/MarquisDeSade.png';
import philippePetain from '../public/landing/PhilippePetain.png';
import pilsudski from '../public/landing/Pilsudski.png';
import richelieu from '../public/landing/Richelieu.png';

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
                    <div className="lending__header__text__date">20.11</div>
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
                    <div className="lending__main__gridBlok__block1 link">
                        <Image
                            src={charlesDeGaulle}
                            alt="charlesDeGaulle"
                            className="lending__main__gridBlok__imgSize"
                        />
                    </div>
                    <div className="lending__main__gridBlok__block2 link">
                        <Image
                            src={pilsudski}
                            alt="pilsudski"
                            className="lending__main__gridBlok__imgSize"
                        />
                    </div>
                    <div className="lending__main__gridBlok__block3 link">
                        <Image
                            src={marquisDeSade}
                            alt="marquisDeSade"
                            className="lending__main__gridBlok__imgSize"
                        />
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
                            laudantium natus esse eius culpa.
                        </div>
                    </div>
                    <div className="lending__main__gridBlok__block6 link">
                        <Image
                            src={philippePetain}
                            alt="philippePetain"
                            className="lending__main__gridBlok__imgSize"
                        />
                    </div>
                    <div className="lending__main__gridBlok__block7 link">
                        <Image
                            src={richelieu}
                            alt="richelieu"
                            className="lending__main__gridBlok__imgSize"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
