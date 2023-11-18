import Image from 'next/image';
import headerPhoto from '../public/landing/headerPhoto.png';

export default function Home() {
    return (
        <div className="lending">
            <div className="lending__header">
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
            </div>
        </div>
    );
}
