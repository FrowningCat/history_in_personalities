import Image from 'next/image';
import Link from 'next/link';
import imgNotFund from '../../../public/article/404.jpg';

export default function crazyStories() {
    return (
        <div className="article">
            <div className="article__topBar">
                <div className="article__topBar__name">
                    <div>HP</div>
                </div>
                <div className="article__topBar__links">
                    <div className="article__topBar__links__text link">
                        Главная страница
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
            <div className="article__title">Безумные истории</div>
            <div className="article__personalities">
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
                            Василий Яковлевич Баранщиков
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
