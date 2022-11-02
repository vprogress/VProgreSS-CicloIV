import React from 'react'

export const Inicio = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="slider">
              <div className="img-responsive">
                <ul className="bxslider">
                  <li>
                    <img src={""} alt="" />
                  </li>
                  <li>
                    <img src={""} alt="" />
                  </li>
                  <li>
                    <img src={""} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="text-center">
                <h2>Multi Purpose Theme</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Cras
                  suscipit arcu
                  <br /> vestibulum volutpat libero sollicitudin vitae Curabitur
                  ac aliquam <br /> lorem sit amet scelerisque justo
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="box">
              <div className="col-md-4">
                <div
                  className="wow bounceIn"
                  data-wow-offset={0}
                  data-wow-delay="0.4s"
                >
                  <h4>Responsive</h4>
                  <div className="icon">
                    <i className="fa fa-heart-o fa-3x" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Cras
                    suscipit arcu libero
                  </p>
                  <div className="ficon">
                    <a href="#" className="btn btn-default" role="button">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="wow bounceIn"
                  data-wow-offset={0}
                  data-wow-delay="1.0s"
                >
                  <h4>Multi Purpose</h4>
                  <div className="icon">
                    <i className="fa fa-desktop fa-3x" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Cras
                    suscipit arcu libero
                  </p>
                  <div className="ficon">
                    <a href="#" className="btn btn-default" role="button">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="wow bounceIn"
                  data-wow-offset={0}
                  data-wow-delay="1.6s"
                >
                  <h4>Easy Customize</h4>
                  <div className="icon">
                    <i className="fa fa-location-arrow fa-3x" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Cras
                    suscipit arcu libero
                  </p>
                  <div className="ficon">
                    <a href="#" className="btn btn-default" role="button">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="text-center">
                <h2>Galleries</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Cras
                  suscipit arcu
                  <br /> vestibulum volutpat libero sollicitudin vitae Curabitur
                  ac aliquam <br />
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="grid">
            <figure className="effect-zoe">
              <img src="img/25.jpg" alt="img25" />
              <figcaption>
                <h2>
                  Title <span>Name</span>
                </h2>
                <p className="icon-links">
                  <a href="#">
                    <span className="icon-heart" />
                  </a>
                  <a href="#">
                    <span className="icon-eye" />
                  </a>
                  <a href="#">
                    <span className="icon-paper-clip" />
                  </a>
                </p>
                <p className="description">
                  Zoe never had the patience of her sisters. She deliberately
                  punched the bear in his face.
                </p>
              </figcaption>
            </figure>
            <figure className="effect-zoe">
              <img src="img/26.jpg" alt="img26" />
              <figcaption>
                <h2>
                  Title <span>Name</span>
                </h2>
                <p className="icon-links">
                  <a href="#">
                    <span className="icon-heart" />
                  </a>
                  <a href="#">
                    <span className="icon-eye" />
                  </a>
                  <a href="#">
                    <span className="icon-paper-clip" />
                  </a>
                </p>
                <p className="description">
                  Zoe never had the patience of her sisters. She deliberately
                  punched the bear in his face.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="content">
          <div className="grid">
            <figure className="effect-zoe">
              <img src="img/27.jpg" alt="img27" />
              <figcaption>
                <h2>
                  Title <span>Name</span>
                </h2>
                <p className="icon-links">
                  <a href="#">
                    <span className="icon-heart" />
                  </a>
                  <a href="#">
                    <span className="icon-eye" />
                  </a>
                  <a href="#">
                    <span className="icon-paper-clip" />
                  </a>
                </p>
                <p className="description">
                  Zoe never had the patience of her sisters. She deliberately
                  punched the bear in his face.
                </p>
              </figcaption>
            </figure>
            <figure className="effect-zoe">
              <img src="img/30.jpg" alt="img30" />
              <figcaption>
                <h2>
                  Title <span>Name</span>
                </h2>
                <p className="icon-links">
                  <a href="#">
                    <span className="icon-heart" />
                  </a>
                  <a href="#">
                    <span className="icon-eye" />
                  </a>
                  <a href="#">
                    <span className="icon-paper-clip" />
                  </a>
                </p>
                <p className="description">
                  Zoe never had the patience of her sisters. She deliberately
                  punched the bear in his face.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
