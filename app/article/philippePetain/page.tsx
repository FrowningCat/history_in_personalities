import Image from 'next/image';
import p1 from '../../../public/person/philippePetain/1.png';
import p2 from '../../../public/person/philippePetain/2.png';
import p3 from '../../../public/person/philippePetain/3.png';
import p4 from '../../../public/person/philippePetain/4.png';
import p5 from '../../../public/person/philippePetain/5.png';
import p6 from '../../../public/person/philippePetain/6.png';
import p7 from '../../../public/person/philippePetain/7.png';
import p8 from '../../../public/person/philippePetain/8.png';
import p9 from '../../../public/person/philippePetain/9.png';

export default function Petain() {
    return (
        <div className="petain">
            <div className="petain__links">
                <div className="petain__links__a">
                    <a href="#1" className="petain__links__a__text link">
                        - Франция после ПМВ
                    </a>
                    <a href="#2" className="petain__links__a__text link">
                        - Экономическое состояние
                    </a>
                    <a href="#3" className="petain__links__a__text link">
                        - Политическа стабильность в стране
                    </a>
                    <a href="#4" className="petain__links__a__text link">
                        - Линия Мажинo
                    </a>
                    <a href="#5" className="petain__links__a__text link">
                        - Вооружение
                    </a>
                    <a href="#6" className="petain__links__a__text link">
                        - Союзс Великoбританией
                    </a>
                    <a href="#7" className="petain__links__a__text link">
                        - Монтуарская встреча Адольфа Гитлера и Филиппа Петена
                    </a>
                    <a href="#8" className="petain__links__a__text link">
                        - Петен как глава Виши
                    </a>
                    <a href="#9" className="petain__links__a__text link">
                        - Сопротивление
                    </a>
                    <a href="#10" className="petain__links__a__text link">
                        - Виши внутри
                    </a>
                    <a href="#11" className="petain__links__a__text link">
                        - Суд
                    </a>
                </div>
            </div>
            <div className="petain__title">Aнри Филипп Петен</div>
            <div className="petain__subtitle">Герой Предатель Патриот</div>
            <div className="petain__introductoryText">
                Перед рассказом о Вишиской франции и роли Петена в ней, думаю
                стоить удалить немного времени межвоенной франции. Это поможет
                луче разобраться как в поступках Петена, так и в общих
                упаднических настроениях французов.
            </div>
            <div className="petain__blokTypeOne">
                <div className="petain__blokTypeOne__text">
                    <div className="petain__blokTypeOne__text__title" id="1">
                        <text className="petain__blokTypeOne__text__title__letter">
                            Ф
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ц
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            я
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;п
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;П
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            М
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            В
                        </text>
                    </div>
                    <div className="petain__blokTypeOne__text__textual">
                        <text>
                            <text className="textSelected">
                                По окончанию первой мировой войны франция
                                потеряла около 1,4 миллиона солдат, не меньшее
                                число осталось калеками.
                            </text>{' '}
                            Доля призванных мужчин на военную службу во Франции
                            в возрасте 19–49 лет составила 80 %. При этом в ходе
                            войны французская пехота лишилась 22 % своего
                            боевого состава – молодых и здоровых мужчин, а самые
                            большие потери, около 30 %, понесла самая молодая
                            возрастная группа солдат 18–25 лет. Это оказало
                            существенное влияние на демографию и желание вести
                            новые войны.
                        </text>
                        <br />
                        <br />
                        <text>
                            <text className="textSelected">
                                Десятая часть страны лежала в руинах.
                            </text>{' '}
                            Около 150 млрд франков было потрачено на ведение
                            войны, кроме того, в результате Октябрьской
                            революции Франция потеряла в России половину
                            вывезенных за границу капиталов: советское
                            правительство отказалось признавать долги прежних
                            правительств и возвращать сделанные во Франции
                            займы, а капиталы, вложенные в угольную и
                            металлургическую промышленность России, были
                            потеряны с национализацией этой промышленности.
                        </text>
                    </div>
                </div>
                <div className="petain__blokTypeOne__img">
                    <Image
                        src={p1}
                        alt="p1"
                        className="petain__blokTypeOne__img__imgSize linkImg"
                    />
                </div>
            </div>
            <div className="petain__blokTypeTwo">
                <div className="petain__blokTypeTwo__img">
                    <Image
                        src={p2}
                        alt="p2"
                        className="petain__blokTypeTwo__img__imgSize linkImg"
                    />
                </div>
                <div className="petain__blokTypeTwo__text">
                    <div className="petain__blokTypeTwo__text__title" id="2">
                        <text className="petain__blokTypeTwo__text__title__letter">
                            Э
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            м
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ч
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            я
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                    </div>
                    <div className="petain__blokTypeTwo__text__textual">
                        <text>
                            Сразу же в послевоенный период правительство
                            сосредоточило значительную часть всей своей энергии
                            на восстановлении экономики. Была принята обширная
                            программа по восстановлению опустошенных войной
                            территорий, и в основном правительство выполнило эту
                            задачу к 1925 году. Так, чтобы хоть как-то
                            компенсировать потери рабочей силы, иммиграционные
                            барьеры были снижены, и в страну хлынул
                            двухмиллионный поток иностранных рабочих.
                        </text>
                        <br />
                        <br />
                        <text>
                            К концу 1920-х годов укрепление национальной
                            финансовой системы начало показывать уверенный
                            экономический рост, и к 1927 году французская
                            индустриальная мощь уже в три раза начала превышать
                            довоенный уровень.
                        </text>
                        <br />
                        <br />
                        <text>
                            Но к 1935 году, когда великая депрессия докатилась и
                            до Франции,{' '}
                            <text className="textSelected">
                                промышленное производство упало до 79 % от
                                уровня 1928 года, а экспорт – до 55 %.
                            </text>
                            Зарегистрированная безработица колебалась на уровне
                            менее 500 000 человек.
                        </text>
                        <br />
                        <br />
                        <text>
                            После кризиса новый промышленный подъем не наступил.
                            Кризис сменился депрессией, затем очень слабым
                            экономическим оживлением. Если до кризиса
                            французская промышленность росла быстрее, чем в
                            других странах, то теперь она снова отстает от них.
                            В 1938 г. было выпущено столько же продукции, что и
                            в 1913 г. Застой наблюдался и в сельском хозяйстве.
                            В 1938 г. сельскохозяйственное производство лишь на
                            10 % превысило уровень 1913 г.
                        </text>
                        <br />
                        <br />
                        <text>
                            К началу Второй мировой войны Франция еще оставалась
                            наполовину аграрной страной: в сельском хозяйстве
                            было занято 37 % самодеятельного населения, а в
                            промышленности – только 25 %. Отсталой была и
                            структура промышленности. Хотя в 20-х годах и стали
                            ускоренно развиваться “новые” отрасли тяжелой
                            промышленности, но легкая промышленность все еще
                            преобладала: в текстильной, обувной и пищевой
                            отраслях было занято больше половины промышленных
                            рабочих. Достаточно сказать, что 40 % промышленных
                            рабочих накануне Второй мировой войны было занято в
                            ремесленных мастерских с ручным трудом и числом
                            рабочих до 10 человек.
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__blokTypeThree">
                <div className="petain__blokTypeThree__text">
                    <div className="petain__blokTypeThree__text__title" id="3">
                        <text className="petain__blokTypeThree__text__title__letter">
                            П
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            ч
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            б
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ь
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ь
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;в
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                    </div>
                    <div className="petain__blokTypeThree__text__textual">
                        <text>
                            Пораженная позже других государств Великой
                            депрессией Франция с февраля 1934 года погружается в
                            серьезный и затяжной политический кризис. Третья
                            республика оказалась неспособной ответить на
                            политические и экономические вызовы времени.
                        </text>
                        <br />
                        <br />
                        <text>
                            Вместо того, чтобы противостоять внешним опасностям
                            как единой нацией, Франция с мая 1936 по апрель 1938
                            года была вовлечена во внутренние проблемы. В то
                            время, когда Германия день и ночь лихорадочно
                            выпускала оружие, промышленные предприятия Франции
                            были выведены из строя из-за трудовых споров,
                            забастовок и бегства капитала из страны.{' '}
                        </text>
                        <br />
                        <br />
                        <text>
                            <text className="textSelected">
                                За время кризиса, общее количество протестных
                                акций увеличилось в 10 раз, и составило 17000 в
                                год, в 1936 году в протестах участвовало 2.5
                                миллиона рабочих.
                            </text>
                        </text>
                        <br />
                        <br />
                        <text>
                            К сожалению, в период между двумя войнами народ
                            Франции страдал от недостатков политической системы
                            Третьей республики. В стране было слишком много
                            политических партий, в результате чего правительства
                            были очень нестабильны. С 1920 по 1939 год в франции
                            сменилось 42 кабинета. Интриги стали обычным
                            явлением. Кругом была коррупция. Лидеры различных
                            политических партий продолжали борьбу между собой и
                            не смогли подготовить страну к войне против
                            Германии.
                        </text>
                        <br />
                        <br />
                        <text>
                            Новая 40-часовая рабочая неделя, навязанная
                            правительством работодателю, не позволяла французам
                            конкурировать с энергично вооружаемыми Германией и
                            Италией, которые работали на своих фабриках
                            сверхурочно. Осенью 1937 года серия бесчинств
                            выявила существование «Секретного комитета
                            революционных действий», который получал оружие и
                            деньги из Германии и Италии для создания фашистского
                            правительства во Франции. Разоблачение заговора было
                            спущено на тормозах, так как в нем было замешано
                            слишком много лиц из армии и крупных финансов.
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__blokTypeOne">
                <div className="petain__blokTypeOne__text">
                    <div className="petain__blokTypeOne__text__title" id="4">
                        <text className="petain__blokTypeOne__text__title__letter">
                            Л
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            я
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;М
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ж
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            o
                        </text>
                    </div>
                    <div className="petain__blokTypeOne__text__textual">
                        <text>
                            Данную оборонительную систему часто упрекают в
                            неэффективности, и обвинения эти не являются
                            беспочвенными, но, как по мне, важно понять, а зачем
                            ее вообще построили и почему только на границе с
                            Германией
                        </text>
                        <br />
                        <br />
                        <text>
                            Вместо строительства непрерывной линию Мажино, от
                            Швейцарских Альп до Ле-Манша, которое бы увеличило
                            шансы стран Бенилюкса на сближение с Германией,
                            <text className="textSelected">
                                Французское правительств выделило кредит на
                                постройку оборонительных сооружений соседям
                            </text>
                            . К сожалению, жесточайший кризис, ударивший по
                            Франции в 30 годы, свел к минимуму размер кредита и
                            заставил выдумывать альтернативный план на случай
                            войны. По новой стратегии, на юге немецкую армию
                            должна сдержать линия Мажино, до прибытия англичан,
                            а на севере Союзники должны выступить единым фронтом
                            на встречу противнику и навязать бой на территории
                            Бельгии. Но и этому план не суждено было сбыться,
                            так как вскоре Бельгийцы сообщили о своём
                            нейтралитете в случаи войны.
                        </text>
                    </div>
                </div>
                <div className="petain__blokTypeOne__img">
                    <Image
                        src={p3}
                        alt="p3"
                        className="petain__blokTypeOne__img__imgSize linkImg"
                    />
                </div>
            </div>
            <div className="petain__blokTypeTwo">
                <div className="petain__blokTypeTwo__img">
                    <Image
                        src={p4}
                        alt="p4"
                        className="petain__blokTypeTwo__img__imgSize linkImg"
                    />
                </div>
                <div className="petain__blokTypeTwo__text">
                    <div className="petain__blokTypeTwo__text__title" id="5">
                        <text className="petain__blokTypeTwo__text__title__letter">
                            В
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            у
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ж
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                    </div>
                    <div className="petain__blokTypeTwo__text__textual">
                        <text>
                            Французскую армию часто упрекают в беспомощности, но
                            была ли она действительно слабой и не способной
                            воевать?
                        </text>
                        <br />
                        <br />
                        <text>
                            <text className="textSelected">
                                На кануне второй мировой войны, армия франции
                                была самой крупной в Европе
                            </text>
                            , однако средний возврат французских комдивов и
                            комендантов превышал 60 лет, а верховного
                            командования 70. Генералы, прошедшие первую мировую
                            войну, были не готовы к изменившимся условиям.
                        </text>
                        <br />
                        <br />
                        <text>
                            Из-за упомянутого выше кризиса вооружение
                            французской армии действительно отставала от
                            немецкого, но голословно заявлять о его
                            неэффективности, а уж нем более об отсутствии я не
                            буду. Те же танки хоть и отставали, в большей
                            степени, в технологическом плане от немецких,
                            <text className="textSelected">
                                {' '}
                                но вот численно их было больше, (3500 на май
                                1940, против 3190)
                            </text>
                            , от чего они играли не в роли прорыва, а в роли
                            поддержки. Кроме того, дивизии располагавшие в своем
                            составе современные танки и находившиеся в середине
                            мая на бельгийском направлена,{' '}
                            <text className="textSelected">
                                вполне успешно дали бой немецкому 16
                                моторизованному корпусу
                            </text>
                            . Не стоит забывать и про битву при Анню, крупнейшее
                            танковое сражении того времени,{' '}
                            <text className="textSelected">
                                где немецкий силы потеряли от 50 до 164 танков ,
                                а французская армия от 100 до 170 машин .{' '}
                            </text>
                            В заключении скажу, Французы проиграли не из-за
                            отсталого вооружение, а скорее из-за более хорошей
                            тактики
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__blokTypeOne">
                <div className="petain__blokTypeOne__text">
                    <div className="petain__blokTypeOne__text__title" id="6">
                        <text className="petain__blokTypeOne__text__title__letter">
                            С
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ю
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            з
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;с
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;В
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            o
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            б
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            й
                        </text>
                    </div>
                    <div className="petain__blokTypeOne__text__textual">
                        <text>
                            Это может показаться странным, но во Франции до
                            войны{' '}
                            <text className="textSelected">
                                на союз с Великобританией многие смотрели
                                довольно скептически
                            </text>
                            , а после катастрофы в Дюнкерке уж подавно. Антанта
                            в первой мировой войне и перед второй, это два
                            совершенно разных по силе союза, где второй
                            значительно уступает. У людей были сомнения “а не
                            бросят ли их британцы, предпочтя отсиживаться у себя
                            на континенте, оставив францию у себя на материке
                            один на один с Германией. Не разумнее ли сразу
                            заключить с этой Германией союз”. К сожалению,{' '}
                            <text className="textSelected">
                                речь не идет о маргинальной прослойки населения,
                                речь идет о довольно крупной консервативно
                                наторенной части
                            </text>
                            .
                        </text>
                    </div>
                </div>
                <div className="petain__blokTypeOne__img">
                    <Image
                        src={p5}
                        alt="p5"
                        className="petain__blokTypeOne__img__imgSize linkImg"
                    />
                </div>
            </div>
            <div className="petain__introductoryText__textP">
                Теперь, когда у нас есть общее представления о политическом и
                социальном устройстве Франции, предлагю перейти сразу к встречи
                в Монтуа, опустив начало войны и капитуляцию Франции.
            </div>
            <div className="petain__blokTypeOne">
                <div className="petain__blokTypeOne__text">
                    <div className="petain__blokTypeOne__text__title" id="7">
                        <text className="petain__blokTypeOne__text__title__letter">
                            Н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ч
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;р
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ж
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            м
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                    </div>
                    <div className="petain__blokTypeOne__text__textual">
                        <text>
                            Во время встречи Петен и Гитлера в Монтуа, первый не
                            только{' '}
                            <text className="textSelected">
                                отказался воевать с англичанами
                            </text>
                            , но и смог убедить фюрера в том, что южная часть
                            франции должна остаться независимой, дабы флот,
                            стоявший в британских портах и колонии, не перешли
                            противнику.
                        </text>
                        <br />
                        <br />
                        <text>
                            Правительство Виши принято назвать
                            коллаборационистским, подразумевая военное и
                            политическое сотрудничество, что является не совсем
                            верным. Когда маршал обращался к французам через
                            несколько дней после встречи в Монтуа, он
                            подразумевал именно экономическое сотрудничество.
                            Когда через несколько дней один журналист спросил
                            его, “а что вообще подразумевается под этим
                            collaborationnisme”, Петен совершенно невозмутимо
                            ответил,{' '}
                            <text className="textSelected">
                                “вообще ничего”.
                            </text>
                        </text>
                        <br />
                        <br />
                        <text>
                            Для французов, результат переговоров маршала и
                            Гитлера выглядели чудом, у них остался флот, все
                            колониальные владения и часть страны, “третья
                            республика довела страну до разгрома, а старый
                            маршал спас францию от Гитлера”.
                        </text>
                    </div>
                </div>
                <div className="petain__blokTypeOne__img">
                    <Image
                        src={p6}
                        alt="p6"
                        className="petain__blokTypeOne__img__imgSize linkImg"
                    />
                </div>
            </div>
            <div className="petain__blokTypeTwo">
                <div className="petain__blokTypeTwo__img">
                    <Image
                        src={p7}
                        alt="p7"
                        className="petain__blokTypeTwo__img__imgSize linkImg"
                    />
                </div>
                <div className="petain__blokTypeTwo__text">
                    <div className="petain__blokTypeTwo__text__title" id="8">
                        <text className="petain__blokTypeTwo__text__title__letter">
                            П
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;к
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;г
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            в
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;В
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ш
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                    </div>
                    <div className="petain__blokTypeTwo__text__textual">
                        <text>
                            На момент “спасения” франции Петен уже был
                            национальным героем, а после подписание мира с
                            Германией,{' '}
                            <text className="textSelected">
                                культ марала взлетел до небес
                            </text>
                            . Он начал социальную революцию:
                            <br /> - Республиканский девиз “свобода, равенство,
                            братство”, был заменен на “труд, семья, отечество”
                            <br /> - Все иностранцы, коммунисты, евреи, масоны и
                            интернационалисты любого происхождения, изгоняются
                            из нового национального государства, на практике же,
                            это означала запрет на занятие государственных и
                            важных общественных должностей. Евреев начали лешать
                            гражданства, а в последствии стали ссылать в
                            концлагерь Дранси
                            <br /> - Почти все партии прекратили свою работу, а
                            те что остались, сталкивались с жёсткой цензурой и
                            репрессиями со стороны правительства
                            <br /> - Религия вернулась в школы, были
                            восстановлены школы церковных сегрегаций, закрыты
                            учительские институты и увеличена поддержка частных
                            школ
                        </text>
                        <br />
                        <br />
                        <text>
                            По договору с Германией французский флот должен был
                            отойти в германию для разоружения, на тот момент{' '}
                            <text className="textSelected">
                                он был четвертным в мире по силе.
                            </text>{' '}
                            Англичан этот момент сильно напряг, поэтому в июле
                            1940 они захватали французские корабли, стоявшие в
                            английских портах, а для устранения самых мощных
                            кораблей, стоявших в южно-французских и
                            североафриканских портах Черчилль отправил эскадру.
                            3 июля английская эскадра прибыла в Марс-Эл-Кабир и
                            потопила находящийся там французский флот. После
                            инцидента, дипломатические отношения между Виши и
                            Велекобратинией были разорваны, а симпатия французов
                            по отношению к немцам, увеличилась.
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__blokTypeThree">
                <div className="petain__blokTypeThree__text">
                    <div className="petain__blokTypeThree__text__title" id="9">
                        <text className="petain__blokTypeThree__text__title__letter">
                            С
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            п
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            в
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                    </div>
                    <div className="petain__blokTypeThree__text__textual">
                        <text>
                            <text className="textSelected">
                                По началу оккупация франции проходила вполне
                                себе мирно, и нацисты там не зверствовали,
                            </text>{' '}
                            но после нападения Германии на СССР, и активизации
                            ком.сопротивления на территории Франции, немцы стали
                            реагировать так же, как и на всех других
                            оккупированных территориях, как пример, за одного
                            убитого своего, убивали 10-100 местных. Именно эти
                            убийства и раскрутили маховик сопротивления.
                        </text>
                        <br />
                        <br />
                        <text>
                            Петен оказался в странной ситуации, с одной стороны
                            он был коллаборантом и его государство было про
                            германское, с другой стороны, многие в Вишиском
                            правительстве поддерживали связи с сопротивлением.
                            Так, будущий французский президент Франсуа Миттеран,
                            с одной стороны работал в военном комиссариате по
                            делам военнопленных, а с другой стороны, был
                            известным человеком в подполье, где выстраивал
                            конспиративные сети. Сам же маршал,{' '}
                            <text className="textSelected">
                                не раз выделял деньги людям, про которых было
                                известно о их связях с сопротивлением.
                            </text>
                        </text>
                        <br />
                        <br />
                        <text>
                            Вообще, множество подтверждений в веру маршала в
                            победу союзника в войне. Так,{' '}
                            <text className="textSelected">
                                в октябре 40 Англию посетил Луи Ружье,
                            </text>{' '}
                            посланника Петена, цель визита состояла в уверении
                            бывшего союзника в сохранении дружеских отношений и
                            ненападении друг на друга.
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__blokTypeOne">
                <div className="petain__blokTypeOne__text">
                    <div className="petain__blokTypeOne__text__title" id="10">
                        <text className="petain__blokTypeOne__text__title__letter">
                            В
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ш
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;в
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            у
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                    </div>
                    <div className="petain__blokTypeOne__text__textual">
                        <text>
                            Начиная с 1942 года Германия старалась выкачать как
                            можно больше ресурсов из франции, от 1 до 2
                            миллионов французов оставалась в германском плену,
                            сотни тысяч молодых людей угонялось в германию на
                            работу, огромная денежная контрибуция, а так же,
                            французы отдавали огромный процент всей
                            произведённой продукции.
                        </text>
                        <br />
                        <br />
                        <text>
                            Без реальных партий, выборов и сми, правительство
                            теряет контакт с реальностью и не имеет возможности
                            отслеживать народное настроение. Пришлось создавать
                            и разрешат некоторые партии, но даже эти,
                            ультраправые партии стали вести свою политику. Между
                            тем, международное положение ухудшалось, Вишиская
                            франция продолжала терять колонии, Мадагаскар,
                            северная африка, Марокко, Алжир и другие.
                        </text>
                        <text>
                            В ноябре 42, после потери большей части колоний
                            Вишиская франция оказалась не нужна немецкому
                            правительству, и то провело операцию Контон,
                            оккупировав всю южную часть франции. После оккупации
                            Виши, сам режим продолжал формально существовать, но
                            сильно ослаб.
                        </text>
                        <br />
                        <br />
                        <text>
                            В 44 году, после высадки союзников в Нормандии и
                            освобождения Парижа, немцы вывезли правительство
                            Виши в Зигмаринген, где организовали совершенно
                            формальное правительство в изгнании, в чей
                            деятельности Петен уже не участвовал. Маршал сначала
                            перебрался в Швейцарию, а затем вернулся во Францию,
                            где состоялся суд.
                        </text>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="petain__blokTypeOne__img">
                    <Image
                        src={p8}
                        alt="p8"
                        className="petain__blokTypeOne__img__imgSize linkImg"
                    />
                </div>
            </div>
            <div className="petain__blokTypeTwo">
                <div className="petain__blokTypeTwo__img">
                    <Image
                        src={p9}
                        alt="p9"
                        className="petain__blokTypeTwo__img__imgSize linkImg"
                    />
                </div>
                <div className="petain__blokTypeTwo__text">
                    <div className="petain__blokTypeTwo__text__title" id="11">
                        <text className="petain__blokTypeTwo__text__title__letter">
                            С
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            у
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            д
                        </text>
                    </div>
                    <div className="petain__blokTypeTwo__text__textual">
                        <text>
                            Кто способен судить Петена? Ответ на этот вопрос не
                            так прост, как может показаться на первый взгляд,
                            так как очень просто превратить суд в расправу
                            победителя над проигравшим. По итогу половина
                            присяжных это видные деятелей подполья, а вторая
                            половина была депутатами нац.собрания голосивших
                            против назначения Петена на должность правителя
                            страны в 40 году.
                        </text>
                        <br />
                        <br />
                        <text>
                            Суд приговорил Петена к смертной казни, но де Голь
                            заменил казнь ссылкой на остров Е, где 89-летний
                            маршал и прожил свои последние 6 лет. Там, к нему
                            каждый день на часовые свидания приходила его жена.
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__sources">
                <text className="petain__sources__title">Источники:</text>
                <a
                    href="https://www.youtube.com/watch?v=hs4-3jCYvxE&ab_channel=Redroom"
                    className="petain__links__a__text link"
                >
                    Маршал Петен и Вишистская Франция: героизм и
                    коллаборационизм (Redroom)
                </a>
                <a
                    href="https://www.youtube.com/watch?v=0fqy3PRGAYU&ab_channel=Sinus"
                    className="petain__links__a__text link"
                >
                    Суд над маршалом Петеном (рассказывает историк Алексей
                    Кузнецов)
                </a>
                <a
                    href="https://www.youtube.com/watch?v=_aBH4aT9go4&embeds_referring_euri=https%3A%2F%2Fvk.com%2F&embeds_referring_origin=https%3A%2F%2Fvk.com&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=WAS%3AПопулярнаяистория"
                    className="petain__links__a__text link"
                >
                    Маршал Петен: от героя до изменника нации
                </a>
                <a
                    href="https://www.youtube.com/watch?v=dtGbm3cidjs&ab_channel=HistoryLab"
                    className="petain__links__a__text link"
                >
                    Мир накануне катастрофы. ХХ век. Странная война.
                    Документальный фильм (2022) | History Lab
                </a>
                <a
                    href="https://topwar.ru/206185-avtor-posle-pervoj-i-vtoroj-francija-mezhdu-mirovymi-vojnami.html"
                    className="petain__links__a__text link"
                >
                    После Первой и перед Второй. Франция между мировыми войнами
                </a>
                <a
                    href="https://naiwen-livejournal-com.turbopages.org/naiwen.livejournal.com/s/1725203.html"
                    className="petain__links__a__text link"
                >
                    Межвоенная история Франции
                </a>
                <a
                    href="https://econ.wikireading.ru/heDqk6Rfvb"
                    className="petain__links__a__text link"
                >
                    Хозяйство Франции в период между мировыми войнами
                </a>
            </div>
        </div>
    );
}
