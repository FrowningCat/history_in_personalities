'use client';

import Link from 'next/link';
import { useState } from 'react';

let first = 'testBlock1';
let second = 'testBlock2None';
let third = 'testBlock3None';
let fourth = 'testBlock4None';
let fifth = 'testBlock5None';

export default function Text() {
    const [testBlock1, setStyle1] = useState(first);
    const [testBlock2, setStyle2] = useState(second);
    const [testBlock3, setStyle3] = useState(third);
    const [testBlock4, setStyle4] = useState(fourth);
    const [testBlock5, setStyle5] = useState(fifth);

    function handleClick() {
        if (first == 'testBlock1') {
            setStyle1((first = 'testBlock1None'));
            setStyle2((second = 'testBlock2'));
        }
    }

    function handleClick2() {
        if (second == 'testBlock2') {
            setStyle2((second = 'testBlock2None'));
            setStyle3((third = 'testBlock3'));
        }
    }

    function handleClick3() {
        if (third == 'testBlock3') {
            setStyle3((third = 'testBlock3None'));
            setStyle4((fourth = 'testBlock4'));
        }
    }

    function handleClick4() {
        if (fourth == 'testBlock4') {
            setStyle4((fourth = 'testBlock4None'));
            setStyle5((fifth = 'testBlock5'));
        }
    }

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
                <div className="article__test__block" id={testBlock1}>
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
                    <div
                        className="article__test__block__next link"
                        onClick={handleClick}
                    >
                        Далее
                    </div>
                </div>
                <div className="article__test__block" id={testBlock2}>
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
                    <div
                        className="article__test__block__next link"
                        onClick={handleClick2}
                    >
                        Далее
                    </div>
                </div>
                <div className="article__test__block" id={testBlock3}>
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
                    <div
                        className="article__test__block__next link"
                        onClick={handleClick3}
                    >
                        Далее
                    </div>
                </div>
                <div className="article__test__block" id={testBlock4}>
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
                    <div
                        className="article__test__block__next link"
                        onClick={handleClick4}
                    >
                        Далее
                    </div>
                </div>
                <div className="article__test__block" id={testBlock5}>
                    <div className="article__test__block__question">
                        Ваш результат
                    </div>
                    <div className="article__test__block__answer">
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Вы верно ответили на $ вопросов из 4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
