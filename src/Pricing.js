import React, { Component } from "react";
import Benefit from "./image/benefit.png";
import AmazonImg from "./image/amazon.png";
import SpotifyImg from "./image/spotify.png";
import YoutubeImg from "./image/youtube.png";
import TidalImg from "./image/tidal.png";
import Logo from "./image/logo.png";
import BackImg from "./image/image-back.png";
import BackImgP from "./image/image-back-points.png";
import Image12 from "./image/image5.png";
import Symbol1 from "./image/symbol1.png";
import Symbol2 from "./image/symbol2.png";
import KMark from "./image/mark-triangle.png";
import VectorLeft from "./image/Vector-left.png";
import VectorRight from "./image/Vector-right.png";
import Vectorbottom from "./image/Vector-bottom.png";
import Faq from "react-faq-component";

const data = {
  rows: [
      {
          title: "How lorem ipsum dolor set quintos valor GoKnack?",
          content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ullamcorper urna sit amet blandit vehicula. Pellentesque quam nisl, convallis nec hendrerit a, tincidunt sed enim. Curabitur ut placerat purus. Morbi at dolor vel mauris eleifend ultrices in et risus. Duis vel rhoncus quam. Nam eget ultricies leo. Integer semper, ligula nec imperdiet efficitur, lorem risus pharetra enim, at consectetur elit turpis sit amet diam. Phasellus condimentum at velit nec tempus. Sed iaculis finibus hendrerit.",
      },
      {
          title: "Quintos donec mattis dolor et GoKnack?",
          content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ullamcorper urna sit amet blandit vehicula. Pellentesque quam nisl, convallis nec hendrerit a, tincidunt sed enim. Curabitur ut placerat purus. Morbi at dolor vel mauris eleifend ultrices in et risus. Duis vel rhoncus quam. Nam eget ultricies leo. Integer semper, ligula nec imperdiet efficitur, lorem risus pharetra enim, at consectetur elit turpis sit amet diam. Phasellus condimentum at velit nec tempus. Sed iaculis finibus hendrerit.",
      },
      {
          title: "Praesent tempus lorem vitae nulla elementum tempor?",
          content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ullamcorper urna sit amet blandit vehicula. Pellentesque quam nisl, convallis nec hendrerit a, tincidunt sed enim. Curabitur ut placerat purus. Morbi at dolor vel mauris eleifend ultrices in et risus. Duis vel rhoncus quam. Nam eget ultricies leo. Integer semper, ligula nec imperdiet efficitur, lorem risus pharetra enim, at consectetur elit turpis sit amet diam. Phasellus condimentum at velit nec tempus. Sed iaculis finibus hendrerit.",
      },
      {
          title: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
          content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ullamcorper urna sit amet blandit vehicula. Pellentesque quam nisl, convallis nec hendrerit a, tincidunt sed enim. Curabitur ut placerat purus. Morbi at dolor vel mauris eleifend ultrices in et risus. Duis vel rhoncus quam. Nam eget ultricies leo. Integer semper, ligula nec imperdiet efficitur, lorem risus pharetra enim, at consectetur elit turpis sit amet diam. Phasellus condimentum at velit nec tempus. Sed iaculis finibus hendrerit.",
      },
  ],
};

const styles = {
  bgColor: 'transparent',
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "#696969",
  arrowColor: "#696969",
  rowTitleTextSize: '22px',
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

class Pricing extends Component {
  render() {
    return (
      <div className="creator-fans">
        <div className="vector vector-top">
          <img src={Symbol2} alt=""/>
        </div>
        <img className="vector vector-left" src={VectorLeft} alt=""/>
        <img className="vector vector-right" src={VectorRight} alt=""/>
        <img className="vector vector-bottom" src={Vectorbottom} alt=""/>
        <div className="creator-fans-content">
          <div className="container">
            <div className="img-book">
              <img src={Benefit} alt="" />
            </div>
            <div className="text-header">
              <div className="text-title">A platform that finally benefits you</div>
              <div className="text-content">
              As a creator, wouldn’t it be great to share your work across different platforms and earn passive income as a fan admires and engages with your work?!  Well now you can, let’s compare!
              </div>
            </div>
            <div className="pricing-cardlist">
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={AmazonImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={SpotifyImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-card selected-card">
                <div className="social-icon">
                  <img src={Logo} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                  <div className="card-maintain">
                    <p>
                      Maintain 100% rights
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={YoutubeImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={TidalImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-dsc">
              <p>*All platforms include an additional payment processing fee</p>
            </div>
            <div className="content-text-image">
              <div className="content-text">
                <span className="mark">Lipsum</span>
                <h1>Quintos Dolor en Set Valor</h1>
                <p>Proin ut tellus maximus, posuere lectus in, laoreet sem. Nulla vulputate pharetra tortor, sit amet congue ex ullamcorper quis. Phasellus faucibus sed tortor quis porttitor. Curabitur consectetur sodales eros at mattis. </p>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur aliquam in nisl sit amet finibus.</p>
              </div>
              <div className="content-image">
                <img className="back-img" src={BackImg} alt=""/>
                <img className="back-img-p" src={BackImgP} alt=""/>
                <div className="img31">
                  <img className="k-mark" src={KMark} alt="" />
                  <img src={Image12} alt=""/>
                </div>
              </div>
            </div>
            <div className='symbol'>
              <img src={Symbol1} alt=""/>
            </div>
            <div className="faq">
              <div className="title-desc">
                <h1>Commonly Asked Questions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas dui ac enim pharetra, in imperdiet.</p>
              </div>
              <div className="faq-content">
                <Faq
                  data={data}
                  styles={styles}
                  config={config}
                />
              </div>
              <div className="contact-us">
                <h1>Can’t find your answer?</h1>
                <a className="contact-btn">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pricing;
