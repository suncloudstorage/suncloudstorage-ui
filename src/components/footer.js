import React, {Component} from "react";
import {Link} from "react-router-dom";
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <Link to="#"><i className="icon ion-social-instagram"/></Link>
                        <Link to="#"><i className="icon ion-social-snapchat"/></Link>
                        <Link to="#"><i className="icon ion-social-twitter"/></Link>
                        <Link to="#"><i className="icon ion-social-facebook"/></Link>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#">Home</Link></li>
                        <li className="list-inline-item"><Link to="#">Services</Link></li>
                        <li className="list-inline-item"><Link to="#">About</Link></li>
                        <li className="list-inline-item"><Link to="#">Terms</Link></li>
                        <li className="list-inline-item"><Link to="#">Privacy Policy</Link></li>
                    </ul>
                    <p className="copyright">suncloud © 2020</p>
                </footer>
            </div>
        )
    }
}

export default Footer;
