import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CreatorImg from "./image/creator-icon.png";
import FanImg from "./image/fan-icon.png";
import BookImg from "./image/book-icon.png";
import AmazonImg from "./image/amazon.png";
import SpotifyImg from "./image/spotify.png";
import YoutubeImg from "./image/youtube.png";
import TidalImg from "./image/tidal.png";
import Logo from "./image/logo.png";
import BackImg from "./image/image-back.png";
import BackImgP from "./image/image-back-points.png";
import Image11 from "./image/image1.png";
import Image12 from "./image/image2.png";
import Image21 from "./image/image4.png";
import Image22 from "./image/image3.png";
import ArrowDown from "./image/arrowdown.png";
import ArrowRight from "./image/arrow-right.png";
import Symbol1 from "./image/symbol1.png";
import ImgCheck from "./image/check-circle.png"
import ImgWithdraw from "./image/withdrawl-circle.png"
import KMark from "./image/kmark.png";
import VectorLeft from "./image/Vector-left.png";
import VectorRight from "./image/Vector-right.png";
import Vectorbottom from "./image/Vector-bottom.png";

class CreatorFans extends Component {
  render() {
    return (
      <div className="creator-fans">
        <img className="vector vector-left" src={VectorLeft} alt=""/>
        <img className="vector vector-right" src={VectorRight} alt=""/>
        <img className="vector vector-bottom" src={Vectorbottom} alt=""/>
        <div className="creator-fans-top">
          <div className="arrow-down"></div>
          <div className="container">
            <div className="item-creator">
              <div className="img-creator">
                <img src={CreatorImg} alt="" />
              </div>
              <div className="text-creator">
                <div className="text-title">how to</div>
                <div className="text-content">Become a Creator</div>
              </div>
            </div>
            <div className="item-fan">
              <div className="img-fan">
                <img src={FanImg} alt="" />
              </div>
              <div className="text-fan">
                <div className="text-title">steps to</div>
                <div className="text-content">Become a Fan</div>
              </div>
            </div>
          </div>
          <div className='symbol'>
            <img src={Symbol1} alt=""/>
          </div>
        </div>
        <div className="creator-fans-content">
          <div className="container">
            <div className="img-book">
              <img src={BookImg} alt="" />
            </div>
            <div className="text-header">
              <div className="text-title">Becoming a Creator on GoKnack</div>
              <div className="text-content">
                As a creator, wouldn’t it be great to share your work across
                different platforms and earn passive income as a fan admires and
                engages with your work?! Well now you can, let’s compare! Use
                our share widget and receive a minimum $.06 per engagement.
                Share on Facebook, Twitter and any other social media platform!
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
                    <div className="card-content-price-text">$0.65</div>
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
                <h1>Becoming a Creator on GoKnack</h1>
                <p>Receive a minimum $.05 a play with our widget player. Share on Facebook, Twitter, Instagram or any other social media platform. The best part, it’s easy to earn!</p>
                <p>Our user-centric platform is able to match your play activity to your fan engagement to determine your true earnings. That’s how we’re able to pay more per play confindently.</p>
                <div className="downarrow">
                  <img src={ArrowDown} alt=""/>
                </div>
              </div>
              <div className="content-image">
                <img className="back-img" src={BackImg} alt=""/>
                <img className="back-img-p" src={BackImgP} alt=""/>
                <div className="img11">
                  <img className="k-mark" src={KMark} alt="" />
                  <img src={Image11} alt=""/>
                </div>
                <img className="img12" src={Image12} alt=""/>
              </div>
            </div>
            <div className='symbol'>
              <img src={Symbol1} alt=""/>
            </div>
            <div className="content-text-image">
              <div className="content-image">
                <img className="back-img-c" src={BackImg} alt=""/>
                <img className="back-img-p" src={BackImgP} alt=""/>
                <img className="img21" src={Image21} alt=""/>
                <img className="img22" src={Image22} alt=""/>
              </div>
              <div className="content-text">
                <span className="mark">Lipsum</span>
                <h1>It’s Simple,  Here’s How.</h1>
                <p>After creating an account and you’re ready to  head to the upload button. Praesent ut erat elit. Maecenas <img src={ImgWithdraw} alt=""/> , sapien quis hendrerit molestie, velit sem varius sem, eget vestibulum arcu urna eget augue.</p>
                <p>Vivamus quis feugiat dui. Sed <img src={ImgCheck} alt=""/> vinar ate. Aenean luctus leo turpis, ut commodo lorem sollicitudin eget. In eu nisl at tellus efficitur tristique non nec nulla.</p>
                <a className="start-btn">
                  <p>START EARNING</p>
                  <img src={ArrowRight} alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreatorFans;
