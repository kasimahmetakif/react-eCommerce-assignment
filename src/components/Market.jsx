import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Market({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/Categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-xl-3 col-lg-4 col-md-12">
          <div className="sidebar">
            <div className="product-widget">
              <h3 className="widget-title mb-30">Product categories</h3>
              <ul className="product-categories">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link to={`/Shop`}>{category.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Diğer Widget'lar */}
            <div className="product_list_widget">
              <h3 className="widget-title mb-30 pt-50">Top rated</h3>
              {/* Ürün Listesi Örnekleri */}
              <div className="item-widget">{/* Ürün Örneği */}</div>
              {/* Diğer ürün örnekleri */}
            </div>

            {/* Ürün Etiketleri */}
            <div className="product-widget pt-50">
              <h3 className="widget-title mb-30">Product tags</h3>
              <div className="tags mb-50">{/* Etiket Örnekleri */}</div>
            </div>
          </div>
        </div>

        {/* Ürün Listesi */}
        <div className="col-xl-9 col-lg-8 col-md-12">
          <div className="shop-page-product pt-50 pb-100">
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-xl-6 col-lg-6 col-md-12">
                  <div className="product product-4">
                    <div className="product__thumb">
                      <a href="single.html">
                        <img
                          className="product-primary"
                          src={product.image}
                          alt={product.title}
                        />
                        {/* Ürün galerisi varsa göster */}
                        {product.gallery && product.gallery.length > 0 && (
                          <img
                            className="product-secondary"
                            src={product.gallery[0]}
                            alt={product.title}
                          />
                        )}
                      </a>
                    </div>
                    <div className="product__name">
                      <h4>
                        <a href="single.html">{product.title}</a>
                      </h4>
                      <div className="pro-price">
                        <p className="p-absoulute pr-1">
                          <span>₺</span>
                          {product.price}
                        </p>
                        <a
                          className="p-absoulute pr-2"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                        >
                          add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
