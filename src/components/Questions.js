"use client";
import React, {useState} from 'react';

const Questions = () => {


        const [allBlocks, setAllBlocks] = useState(1);





    // const handleClick = (e) => {
    //     if (typeof window !== "undefined" && subtitle) {
    //         setWidth(document.querySelectorAll(".qblock"));
    //
    //         allBlocks.forEach(block => block.classList.remove("big"));
    //
    //         const target = e.currentTarget;
    //         target.classList.add("big");
    //     }
    //
    // };
    // const handleClick = (e) => {
    //     if (typeof window !== "undefined") {
    //         // Barcha bloklardan .big class'ini olib tashlaymiz
    //         document.querySelectorAll(".qblock").forEach(block => {
    //             block.classList.remove("big");
    //         });
    //
    //         // Bosilgan elementga .big qo'shamiz
    //         const target = e.currentTarget;
    //         target.classList.add("big");
    //     }
    // };




    return (
        <div className="questions">
            <div  onClick={() => setAllBlocks(1)} className={allBlocks === 1 ? "big qblock" : "qblock"}>
                <div className="text">
                    <h3>&laquo;Стоит&nbsp;ли лечить рак на&nbsp;поздних стадиях? Имеют&nbsp;ли смысл
                        паллиативные
                        операции?&raquo;</h3>
                    <p>Цель паллиативных хирургических вмешательств&nbsp;&mdash; не&nbsp;удалить
                        злокачественную
                        опухоль, а&nbsp;улучшить состояние пациента. Это помогает восстановить функцию
                        пораженного
                        органа, избавиться от&nbsp;мучительных симптомов, продлить жизнь. Такие операции
                        однозначно
                        имеют смысл. Также в&nbsp;паллиативных целях врач может назначить
                        противоопухолевые
                        препараты, лучевую терапию. Для каждого пациента составляют индивидуальную,
                        оптимальную в&nbsp;данном
                        случае, программу лечения.</p>
                </div>

                <div className="pic" >
                    <img src="./img/que.jpg" alt=""/>
                </div>
            </div>
            <div onClick={() => setAllBlocks(2)} className={allBlocks === 2 ? "big qblock" : "qblock"}>
                <div className="text">
                    <h3>&laquo;В&nbsp;каких случаях стоит получить второе мнение
                        у&nbsp;эксперта?&raquo;</h3>
                    <p>В&nbsp;онкологии необходимость второго врачебного мнения возникает часто,
                        особенно при раке
                        на&nbsp;поздних стадиях. Эту услугу стоит получить в&nbsp;любых сложных,
                        сомнительных
                        случаях:</p>
                    <ul>
                        <li>если лечащий врач говорит, что больше не&nbsp;может помочь;
                        </li>
                        <li>если лечение не&nbsp;помогает;
                        </li>
                        <li>если до&nbsp;конца не&nbsp;ясен диагноз, врач затрудняется с&nbsp;выбором
                            оптимального
                            лечения;
                        </li>
                        <li>если лечащий врач долго ничего не&nbsp;предпринимает, не&nbsp;объясняет
                            пациенту, что с&nbsp;ним
                            происходит и&nbsp;каков прогноз;
                        </li>
                        <li>если хирург предлагает обширную, калечащую операцию, и&nbsp;пациент
                            хотел&nbsp;бы узнать
                            об&nbsp;альтернативах.
                        </li>
                    </ul>
                    <p>
                        Многие пациенты обращаются к&nbsp;Обид Собирович уже после того, как
                        посещали&nbsp;других
                        врачей, проходили лечение в&nbsp;других клиниках.
                    </p>
                </div>

                <div className="pic">
                    <img src="./img/q4.png" alt=""/>
                </div>
            </div>
            <div onClick={() => setAllBlocks(3)}  className={allBlocks === 3 ? "big qblock" : "qblock"}>
                <div className="text">
                    <h3>&laquo;Как попасть на&nbsp;прием к&nbsp;Обид Собирович?&raquo;</h3>
                    <p>Вы&nbsp;можете оставить заявку на&nbsp;нашем сайте или связаться
                        с&nbsp;администратором
                        клиники Medica&nbsp;24 по&nbsp;телефону <span className="number">+998 (97) 044-88-68</span>.
                        Вас проконсультируют и&nbsp;запишут на&nbsp;прием в&nbsp;удобный для вас день,
                        время.
                    </p>
                </div>
                <div className="pic">
                    <img src="./img/q5.png" alt=""/>
                </div>
            </div>
            <div onClick={() => setAllBlocks(4)}  className={allBlocks === 4 ? "big qblock" : "qblock"}>
                <div className="text">
                    <h3>&laquo;В&nbsp;чем преимущества малоинвазивных операций?&raquo;</h3>
                    <p>Эндоскопические и&nbsp;интервенционные вмешательства сопровождаются меньшей
                        травматизацией
                        тканей, более низкими рисками кровотечения и&nbsp;других осложнений, после них
                        короче
                        восстановительный период. Однако, имеются и&nbsp;важные нюансы, ограничения:
                    </p>
                    <ul>
                        <li>малоинвазивная хирургия применима не&nbsp;всегда, иногда оптимальным выбором
                            является
                            открытая операция через разрез;
                        </li>
                        <li>такие вмешательства зачастую сложны в&nbsp;исполнении, они требуют
                            от&nbsp;врача
                            соответствующего опыта, уровня мастерства;
                        </li>
                        <li>необходимо соответствующее оборудование, оснащение операционной.</li>
                    </ul>
                    <p>
                        Обид Собирович обладает необходимым опытом, умеет правильно определять
                        показания и&nbsp;выбирать
                        оптимальную хирургическую тактику в&nbsp;каждой конкретной ситуации.
                    </p>
                </div>

                <div className="pic">
                    <img src="./img/q3.png" alt=""/>
                </div>
            </div>
            <div onClick={() => setAllBlocks(5)}  className={allBlocks === 5 ? "big qblock" : "qblock"}>
                <div className="text">
                <h3>Что такое стентирование?</h3>
                    <p>Стент&nbsp;&mdash; короткая трубка с&nbsp;сетчатой металлической стенкой.
                        Ее&nbsp;устанавливают
                        в&nbsp;полые органы, чтобы восстановить их&nbsp;проходимость. Нередко
                        к&nbsp;этой процедуре
                        прибегают в&nbsp;онкологии, когда просвет органа оказывается перекрыт
                        злокачественной
                        опухолью. Стенты можно устанавливать в&nbsp;пищевод, кишку, желчные протоки
                        и&nbsp;другие
                        органы. Вмешательство выполняется эндоскопически, без разрезов. </p>
                </div>

                <div className="pic">
                    <img src="./img/que.jpg" alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Questions;