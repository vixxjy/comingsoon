import React from "react"
// import { Link } from "gatsby"
import Newsletter from '../components/Newsletter'
import Layout from "../components/layout"
// import Image from "../components/image"
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import SEO from "../components/seo"
const bgVideo = require('../dist/mp4/bg.mp4')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="overlay"></div>
      <video playsinline="playsInline" autoplay="autoPlay" muted="muted" loop="loop">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="masthead" style={{
         height: '100%',
         minHeight: 0,
         width: '40.5rem',
         paddingBottom: 0
      }}>
        <div className="masthead-bg"></div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <h1 className="mb-3">Coming Soon!</h1>
                <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is
                  <strong>January 2019</strong>! Sign up for updates using the form below!</p>
                  <Newsletter />
                {/* <div className="input-group input-group-newsletter">
                  <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">Notify Me!</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <ul className="list-unstyled text-center mb-0">
          <li className="list-unstyled-item">
            <a href="#!">
              {/* <i className="fab fa-twitter"></i> */}
              <FaTwitter />
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#!">
              {/* <i className="fab fa-facebook-f"></i> */}
              <FaFacebookF />
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#!">
              {/* <i className="fab fa-instagram"></i> */}
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
  </Layout>
)

export default IndexPage
