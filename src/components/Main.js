import React, {Component} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
import {Link, Redirect} from "react-router-dom";
import LoginModel from "./LoginModel";
import 'swiper/swiper-bundle.css';
import './Main.css';
import './Footer.css';
import './Navigation-with-Button.css';
import './Simple-Slider.css';
import Footer from "./Footer";

SwiperCore.use([Autoplay]);

class Main extends Component {

    render() {
        if (localStorage.getItem("username")) {
            return <Redirect to="/mydisk"/>
        }
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                    <div className="container"><Link className="navbar-brand" to="/">Sun Cloud Storage</Link>
                        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span
                            className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse"
                             id="navcol-1">
                            <ul className="nav navbar-nav mr-auto">
                                <li className="nav-item"/>
                                <li className="nav-item"><Link className="nav-link" to="/price">Pricing</Link></li>
                            </ul>
                            <span className="navbar-text actions">
                                <button className="btn btn-light action-button"
                                        data-toggle="modal"
                                        data-target="#loginModel">
                                    Sign In</button>
                            </span></div>
                    </div>
                </nav>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <Swiper
                                autoplay={{delay: 500}}
                                spaceBetween={50}
                                slidesPerView={1}
                            >
                                <SwiperSlide data-swiper-autoplay="2000"><img src="slider/first.png" alt=""/></SwiperSlide>
                                <SwiperSlide data-swiper-autoplay="2000"><img src="slider/second.png" alt=""/></SwiperSlide>
                                <SwiperSlide data-swiper-autoplay="2000"><img src="slider/third.png" alt=""/></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-md-4">
                            <form>
                                <h3>Join SunCloud for free</h3>
                                <p>Sign up today and get 5 GB free cloud storage</p>
                                <div className="form-group">
                                    <input className="form-control email-signup"
                                           type="email"
                                           placeholder="Email"
                                           name="email"/>
                                    <input className="form-control"
                                           type="password"
                                           placeholder="Password"
                                           name="password"/>
                                    <div className="form-check">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               id="formCheck-1"/>
                                        <label className="form-check-label terms-label">I accept suncloud's&nbsp;
                                            <Link
                                                to="https://www.pcloud.com/terms_and_conditions.html">Terms &amp; Conditions</Link><br/></label>
                                    </div>
                                    <button
                                        className="btn btn-primary btn-block btn-signup" type="button">Create
                                        account
                                    </button>
                                </div>
                                <p className="text-center continue-service-label">or continue with:</p>
                                <div className="form-group">
                                    <div className="btn-group d-flex justify-content-between" role="group">
                                        <button className="btn btn-primary service-continue" type="button"><i
                                            className="fa fa-apple"/></button>
                                        <button className="btn btn-primary service-continue" type="button"><i
                                            className="fa fa-facebook-square"/></button>
                                        <button className="btn btn-primary service-continue"
                                                type="button"><i className="fa fa-google"/></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
                <LoginModel/>
            </div>
        )
    }
}

export default Main;
