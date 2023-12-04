'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import court from '../../../../public/person/philippePetain/test/court.png';

let first = 'testBlock1';
let second = 'testBlock2None';
let third = 'testBlock3None';
let fourth = 'testBlock4None';
let fifth = 'testBlock5None';

let correctAnswers = 0;
let number1 = 0;
let number2 = 0;
let number3 = 0;

export default function Text() {
    const [testBlock1, setStyle1] = useState(first);
    const [testBlock2, setStyle2] = useState(second);
    const [testBlock3, setStyle3] = useState(third);
    const [testBlock4, setStyle4] = useState(fourth);
    const [testBlock5, setStyle5] = useState(fifth);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);
    const [checked10, setChecked10] = useState(false);
    const [checked11, setChecked11] = useState(false);

    const [buttonText1, setButtonText1] = useState(0);
    const [buttonText2, setButtonText2] = useState(0);
    const [buttonText3, setButtonText3] = useState(0);

    function handleClick() {
        if (first == 'testBlock1') {
            setStyle1((first = 'testBlock1None'));
            setStyle2((second = 'testBlock2'));
        }
        if (number1 == 1 && number2 == 3 && number3 == 2) {
            correctAnswers += 1;
        }
    }

    function handleClick2() {
        if (second == 'testBlock2') {
            setStyle2((second = 'testBlock2None'));
            setStyle3((third = 'testBlock3'));
        }
        if (checked1 && checked2 && !checked3) {
            correctAnswers += 1;
        }
    }

    function handleClick3() {
        if (third == 'testBlock3') {
            setStyle3((third = 'testBlock3None'));
            setStyle4((fourth = 'testBlock4'));
        }
        if (checked4 && !checked5 && !checked6 && !checked7 && !checked8) {
            correctAnswers += 1;
        }
    }

    function handleClick4() {
        if (fourth == 'testBlock4') {
            setStyle4((fourth = 'testBlock4None'));
            setStyle5((fifth = 'testBlock5'));
        }
        if (checked9 && !checked10 && !checked11) {
            correctAnswers += 1;
        }
    }

    function number1Change() {
        if (number1 < 3) {
            number1 += 1;
            setButtonText1(number1);
        } else {
            number1 = 0;
            setButtonText1(number1);
        }
    }

    function number2Change() {
        if (number2 < 3) {
            number2 += 1;
            setButtonText2(number2);
        } else {
            number2 = 0;
            setButtonText2(number2);
        }
    }

    function number3Change() {
        if (number3 < 3) {
            number3 += 1;
            setButtonText3(number3);
        } else {
            number3 = 0;
            setButtonText3(number3);
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
                                <button
                                    className="article__test__block__answer__div__chekbox__but"
                                    id="btn"
                                    onClick={number1Change}
                                >
                                    {number1}
                                </button>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Суд над Петеном
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <button
                                    className="article__test__block__answer__div__chekbox__but"
                                    id="btn2"
                                    onClick={number2Change}
                                >
                                    {number2}
                                </button>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Захват парижа союзниками
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <button
                                    className="article__test__block__answer__div__chekbox__but"
                                    id="btn3"
                                    onClick={number3Change}
                                >
                                    {number3}
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
                                <input
                                    type="checkbox"
                                    checked={checked1}
                                    onChange={() => setChecked1(!checked1)}
                                ></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Петен был ярым стороником Гитлера
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="checkbox"
                                    checked={checked2}
                                    onChange={() => setChecked2(!checked2)}
                                ></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Франция позже других пострадали от мирового
                                кризиса
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="checkbox"
                                    checked={checked3}
                                    onChange={() => setChecked3(!checked3)}
                                ></input>
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
                                <input
                                    type="checkbox"
                                    checked={checked4}
                                    onChange={() => setChecked4(!checked4)}
                                ></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Петена оправдали
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="checkbox"
                                    checked={checked5}
                                    onChange={() => setChecked5(!checked5)}
                                ></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Петен был вивезин из Щвейцарии тайной полицией
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="checkbox"
                                    checked={checked6}
                                    onChange={() => setChecked6(!checked6)}
                                ></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                У франции было мало танков на начало войны
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="checkbox"
                                    checked={checked7}
                                    onChange={() => setChecked7(!checked7)}
                                ></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Во франции было стабильное правительство
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="checkbox"
                                    checked={checked8}
                                    onChange={() => setChecked8(!checked8)}
                                ></input>
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
                    <Image
                        src={court}
                        alt="court"
                        className="article__test__block__question__img linkImg"
                    />
                    <div className="article__test__block__answer">
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Суд над маршелом
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="radio"
                                    checked={checked9}
                                    onChange={() => setChecked9(!checked9)}
                                ></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Встреча Петена и Гитлера в Монтье
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="radio"
                                    checked={checked10}
                                    onChange={() => setChecked10(!checked10)}
                                ></input>
                            </div>
                        </div>
                        <div className="article__test__block__answer__div">
                            <div className="article__test__block__answer__div__text">
                                Забастовка франузских рабочих
                            </div>
                            <div className="article__test__block__answer__div__chekbox">
                                <input
                                    type="radio"
                                    checked={checked11}
                                    onChange={() => setChecked11(!checked11)}
                                ></input>
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
                                Вы верно ответили на {correctAnswers} вопросов
                                из 4
                            </div>
                        </div>
                        <div className="article__test__block__next link">
                            <Link href="/article" className="link">
                                Разделы
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
