import Image from 'next/image';
import headerPhoto from '../public/landing/headerPhoto.png';

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
                    <div className="lending__main__gridBlok__block1">1</div>
                    <div className="lending__main__gridBlok__block2">2</div>
                    <div className="lending__main__gridBlok__block3">3</div>
                    <div className="lending__main__gridBlok__block4">4</div>
                    <div className="lending__main__gridBlok__block5">5</div>
                    <div className="lending__main__gridBlok__block6">6</div>
                    <div className="lending__main__gridBlok__block7">7</div>
                </div>
            </main>
        </div>
    );
}
