import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";

import Button from "react-bootstrap/Button";
const CarouselComp = () => {
    return (
        <div className="hello">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="d-flex justify-content-end align-items-center  ">
                            <div>
                                <Fade left>
                                    <h1>
                                        Производство Боксерских рингов,
                                        восьмиугольников
                                    </h1>
                                    <Button variant="primary" size="lg">
                                        Посмотреть каталог
                                    </Button>{" "}
                                </Fade>
                            </div>
                            <div>
                                <Fade right>
                                    <div className="align-self-center">
                                        <img src="https://pngimg.com/uploads/boxing_gloves/boxing_gloves_PNG10489.png" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="d-flex justify-content-end align-items-center  ">
                            <div>
                                <Fade left>
                                    <h1>
                                        Производство Боксерских рингов,
                                        восьмиугольников
                                    </h1>
                                    <Button variant="primary" size="lg">
                                        Посмотреть каталог
                                    </Button>{" "}
                                </Fade>
                            </div>
                            <div>
                                <Fade right>
                                    <div className="align-self-center">
                                        <img src="https://pngimg.com/uploads/boxing_gloves/boxing_gloves_PNG10489.png" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="d-flex justify-content-end align-items-center  ">
                            <div>
                                <Fade left>
                                    <h1>
                                        Производство Боксерских рингов,
                                        восьмиугольников
                                    </h1>
                                    <Button variant="primary" size="lg">
                                        Посмотреть каталог
                                    </Button>{" "}
                                </Fade>
                            </div>
                            <div>
                                <Fade right>
                                    <div className="align-self-center">
                                        <img src="https://pngimg.com/uploads/boxing_gloves/boxing_gloves_PNG10489.png" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselComp;
