import React from "react";

const Advantages = () => {
    return (
        <div className="advantages container pb-5">
            <h2 className="text-center pt-5">Наши преимущества</h2>
            <div className="d-flex justify-content-between pt-5 text-center ">
                <div>
                    <img
                        src="https://img.icons8.com/fluent/96/000000/guarantee.png"
                        alt="#"
                    />
                    <h5 className="pt-5">Гарантия до 3-х лет</h5>
                </div>
                <div>
                    <img
                        src="https://img.icons8.com/cotton/96/000000/delivery.png"
                        alt="#"
                    />
                    <h5 className="pt-5">Бесплатная доставка по КР</h5>
                </div>
                <div>
                    <img
                        src="https://img.icons8.com/dusk/96/000000/good-quality.png"
                        alt="#"
                    />
                    <h5 className="pt-5">100 % гарантия качества </h5>
                </div>
            </div>
            <div className="d-flex justify-content-between pt-5 text-center pt-5 mt-5">
                <div>
                    <img
                        src="https://img.icons8.com/doodle/96/000000/handshake--v1.png"
                        alt="#"
                    />
                    <h5 className="pt-5">Индивидуальный подход</h5>
                </div>
                <div>
                    <img
                        src="https://img.icons8.com/officel/96/000000/time.png"
                        alt="#"
                    />
                    <h5 className="pt-5">Соблюдение сроков</h5>
                </div>
                <div>
                    <img
                        src="https://img.icons8.com/dusk/96/000000/workers-male.png"
                        alt="#"
                    />
                    <h5 className="pt-5">Профессиональная команда</h5>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
