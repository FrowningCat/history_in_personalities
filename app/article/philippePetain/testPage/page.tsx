import Link from 'next/link';

export default function text() {
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
                            <div className="article__topBar__links__text__sections">
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/undeservedlyVilified"
                                        className="link"
                                    >
                                        Незаслуденно очерненные
                                    </Link>
                                </text>
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/undeservedlyExalted"
                                        className="link"
                                    >
                                        Незаслуденно возвеличены
                                    </Link>
                                </text>
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/crazyStories"
                                        className="link"
                                    >
                                        Безумные истории
                                    </Link>
                                </text>
                            </div>
                        </Link>
                    </div>
                    <div className="article__topBar__links__text link">
                        Партнеры
                    </div>
                    <div className="article__topBar__links__text link">
                        <Link href="/aboutUs" className="link">
                            О нас
                        </Link>
                    </div>
                </div>
            </div>
            <div className="article__test">
                <div className="article__test__block" id="testBlock1">
                    <div className="article__test__block__question">
                        Расставте события в хранологической последовательности
                    </div>
                    <div className="article__test__block__answer">
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Встреча в Монтуа
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <button className="article__test__block__answer__div__chekbox__but">
                                    1
                                </button>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Суд над Петеном
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <button className="article__test__block__answer__div__chekbox__but">
                                    2
                                </button>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Захват парижа союзниками
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <button className="article__test__block__answer__div__chekbox__but">
                                    3
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="article__test__block__next link">Далее</div>
                </div>
                <div className="article__test__block" id="testBlock2">
                    <div className="article__test__block__question">
                        Что из перечисленного ЛОЖ
                    </div>
                    <div className="article__test__block__answer">
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Французская армия была не многочисленной на
                                начало войны
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Петен был ярым стороником Гитлера
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Франция позже других пострадали от мирового
                                кризиса
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                    <div className="article__test__block__next link">Далее</div>
                </div>
                <div className="article__test__block" id="testBlock3">
                    <div className="article__test__block__question">
                        Что из этого являеться ПРАВДОЙ
                    </div>
                    <div className="article__test__block__answer">
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Франузский флот был одним из самых пощных
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Петена оправдали
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Петен был вивезин из Щвейцарии тайной полицией
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                У франции было мало танков на начало войны
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Во франции было стабильное правительство
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                    <div className="article__test__block__next link">Далее</div>
                </div>
                <div className="article__test__block" id="testBlock4">
                    <div className="article__test__block__question">
                        Какое событие показано на фото?
                    </div>
                    <div className="article__test__block__answer">
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Суд над маршелом
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Встреча Петена и Гитлера в Монтье
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Забастовка франузских рабочих
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                    <div className="article__test__block__next link">Далее</div>
                </div>
            </div>
        </div>
    );
}
