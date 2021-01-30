import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const Footer = () => {
    return (
        <div className=" footer ">
            <div className="d-flex container footer-in justify-content-between align-items-center pt-5 pb-5">
                {/* <div>
                        <h2>СпортЗавод</h2>
                    </div> */}
                <div>
                    <h4 className="pl-5">Мы в Социальных Сетях</h4>
                    <ul className="text-center d-flex justify-content-between ">
                        <li>
                            <a href="https://www.whatsapp.com/?lang=ru">
                                <WhatsAppIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/sportzavod.kg/">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.whatsapp.com/?lang=ru">
                                <FacebookIcon />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.whatsapp.com/?lang=ru">
                                <TelegramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.whatsapp.com/?lang=ru">
                                <MailIcon />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-center col-5">
                    <h4>Контакты</h4>
                    <ul className="text-center d-flex justify-content-between align-items-center">
                        <li>
                            <PhoneIcon />
                            <span className="pl-2 text-center">0505050505</span>
                        </li>

                        <li className="pt-2">
                            <LocationOnIcon />
                            <span className="pl-2">
                                улица Льва Толстого 148
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
