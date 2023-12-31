import React from 'react';

function BlogSmall(props) {
    return (
        <>
            <div className="blog-area mb-100 mt-100">
                <div className="container">
                    <div className="section-wrapper text-center mb-35">
                        <h2 className="section-title"><a href="blog.html">from our blog</a></h2>
                        <p>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis<br/> eget maecenas
                            sed urna malesuada.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="blog" style={{backgroundImage: `url('assets/img/blog/9.jpg')`}}></div>
                            <div className="blog__content">
                                <span className="mb-15">Shoes, Clothing</span>
                                <h3 className="blog-title "><a href="blog.html">Mauris rhoncus aliquet purus</a>
                                </h3>
                                <p>By Erentheme /<span>September 16, 2019</span></p>
                                <a href="blog.html">Continue reading</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="bpost">
                                <div className="bpost__thumb">
                                    <img src="assets/img/blog/blog1.jpg" alt="blog_post"/>
                                </div>
                                <div className="bpost__content">
                                    <span>Shoes, Clothing</span>
                                    <h3 className="blog-title title-2"><a href="blog.html">Simple & Easy DIY Flower
                                        Deco</a></h3>
                                    <p>By <span>Erentheme </span>/September 16, 2019</p>
                                    <p>Sapien luctus id justo suscipit nonummy eget hymenaeos...</p>
                                </div>
                            </div>
                            <div className="bpost">
                                <div className="bpost__thumb">
                                    <img src="assets/img/blog/blog2.jpg" alt="blog_post"/>
                                </div>
                                <div className="bpost__content">
                                    <span>Shoes, Clothing</span>
                                    <h3 className="blog-title title-2"><a href="blog.html">Take A Look At The Most
                                        Photo</a></h3>
                                    <p>By <span>Erentheme </span>/September 16, 2019</p>
                                    <p>Sapien luctus id justo suscipit nonummy eget hymenaeos...</p>
                                </div>
                            </div>
                            <div className="bpost m-0">
                                <div className="bpost__thumb">
                                    <img src="assets/img/blog/blog3.jpg" alt="blog_post"/>
                                </div>
                                <div className="bpost__content">
                                    <span>Shoes, Clothing</span>
                                    <h3 className="blog-title title-2"><a href="blog.html">Mauris rhoncus aliquet
                                        purus</a></h3>
                                    <p>By <span>Erentheme </span>/September 16, 2019</p>
                                    <p>Sapien luctus id justo suscipit nonummy eget hymenaeos...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
}

export default BlogSmall;