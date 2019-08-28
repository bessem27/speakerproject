import React, { Component } from 'react'
import logo from './img/logo.png'

export default class Footerhome extends Component {
    render() {
        return (
            <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-info">
                    <img src={logo} alt="TheEvenet" />
                    <p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.</p>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i className="fa fa-angle-right" /> <a href="#">Home</a></li>
                      <li><i className="fa fa-angle-right" /> <a href="#">About us</a></li>
                      <li><i className="fa fa-angle-right" /> <a href="#">Services</a></li>
                      <li><i className="fa fa-angle-right" /> <a href="#">Terms of service</a></li>
                      <li><i className="fa fa-angle-right" /> <a href="#">Privacy policy</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i className="fa fa-angle-right" /> <a href="#">Home</a></li>
                      <li><i className="fa fa-angle-right" /> <a href="#">About us</a></li>
                      <li><i className="fa fa-angle-right" /> <a href="#">Services</a></li>
                      <li><i className="fa fa-angle-right" /> <a href="#">Terms of service</a></li>
                      <li><i className="fa fa-angle-right" /> <a href="#">Privacy policy</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                      A108 Adam Street <br />
                      New York, NY 535022<br />
                      United States <br />
                      <strong>Phone:</strong> +1 5589 55488 55<br />
                      <strong>Email:</strong> info@example.com<br />
                    </p>
                    <div className="social-links">
                      <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                      <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                      <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
                      <a href="#" className="google-plus"><i className="fa fa-google-plus" /></a>
                      <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="copyright">
                © Copyright <strong>TheEvent</strong>. All Rights Reserved
              </div>
              <div className="credits">
                {/*
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent
            */}
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer>
        )
    }
}
