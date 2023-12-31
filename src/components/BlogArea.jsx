import React, { useState, useEffect } from "react";

function BlogArea(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className="blog__area mb-100 pt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="bigpost-wrapper">
                <div className="grid_blog mb-40 text-center">
                  <div>
                    {blogs.map((blog) => (
                      <div key={blog.id} className="blog-thumb">
                        <img src={blog.img} alt="" />
                        <div className="grid_blog__content">
                          <h4 className="pt-20">{blog.subtitle}</h4>
                          <h2 className="b-title mb-20">
                            <a href={`blog-details/${blog.id}`}>{blog.title}</a>
                          </h2>
                          <p>{blog.summary}</p>
                          <div className="post-meta pt-10">
                            <p>
                              Post Date: <span> {blog.postDate} </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="bigpost-wrapper">
                <div className="grid_blog mb-40 text-center">
                  <div>
                    {blogs.map((blog) => (
                      <div key={blog.id} className="blog-thumb">
                        <img src={blog.img} alt="" />
                        <div className="grid_blog__content">
                          <h4 className="pt-20">{blog.subtitle}</h4>
                          <h2 className="b-title mb-20">
                            <a href={`blog-details/${blog.id}`}>{blog.title}</a>
                          </h2>
                          <p>{blog.summary}</p>
                          <div className="post-meta pt-10">
                            <p>
                              Post Date: <span> {blog.postDate} </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6">
              <div className="sidebar__wrapper">
                <div className="mainBlog text-center mb-50">
                  <div className="blog__widget">
                    <div className="mainBlog__thumb">
                      <img src="assets/img/blog/widget-blog.png" alt="" />
                    </div>
                    <div className="mainBlog__content pt-10">
                      <p>
                        There are many variations of passages of
                        <br /> lorem ipsum available, but the majority have
                        <br /> suffered alteration in some form, by injected
                        <br /> humour or randomised words which don’t <br />
                        look even slightly believable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="search__widget mb-35">
                  <h4 className="mb-40 blog-s-title">Search</h4>
                  <div className="custom-form">
                    <form action="#" method="POST">
                      <input type="text" placeholder="search . . ." />
                      <button type="submit">
                        <i className="fal fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="common-widget mb-50">
                  <h4 className="mb-40 blog-s-title">Popular Post</h4>
                  <div className="singleBlog mb-30">
                    <img src="assets/img/blog/1.jpg" alt="" />
                    <div className="singleBlog__content">
                      <p>
                        <a href="blog-details.html">
                          {" "}
                          Diam arcu, fringilla a sem con{" "}
                        </a>
                      </p>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src="assets/img/blog/7.jpg" alt="" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-grid.html">
                        Top 10 Outdoor Items For Your{" "}
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src="assets/img/blog/1.jpg" alt="" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-grid.html">
                        Take A Look At The Most Photo{" "}
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src="assets/img/blog/8.jpg" alt="" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-grid.html">
                        Simple & Easy DIY Flower Deco{" "}
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src="assets/img/blog/3.jpg" alt="" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-grid.html">
                        Sunglasses To Wear This Summer{" "}
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                </div>
                <div className="common-widget mb-50">
                  <h4 className="mb-40 blog-s-title">Categories</h4>
                  <div className="blog-category">
                    <ul>
                      <li>
                        <a href="blog-grid.html">
                          creative<span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid.html">
                          image <span>(4)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid.html">
                          music<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid.html">
                          travel<span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid.html">
                          uncategorized<span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid.html">
                          videos<span>(3)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogArea;
