import React from "react";
import CardBanner from "../components/CardBanner";
import Footer from "../components/Footer";

function Card({ cart }) {
  // Toplam fiyatı hesapla
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
      <CardBanner />
      <div className="f_cart_area pt-110 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="cart_table">
                <table>
                  <thead>
                    <tr>
                      <td>Product</td>
                      <td>Price</td>
                      <td>Quantity</td>
                      <td>Total</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product, index) => (
                      <tr key={index} className="max-width-set">
                        <td>
                          <img src={product.image} alt={product.title} />
                        </td>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
                        <td>
                          <div className="viewcontent__action single_action pt-30">
                            <span>
                              <input type="number" defaultValue="1" />
                            </span>
                          </div>
                        </td>
                        <td>${product.price}</td>{" "}
                        {/* Örnek olarak ürün fiyatını gösteriyorum */}
                        <td className="width-set">
                          <a href="javascript:void(0)">
                            <i className="fal fa-times-circle"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>{/* ... Diğer tablo ayakları ... */}</tfoot>
                </table>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="cart__acount">
                <h5>Cart totals</h5>
                <table>
                  <tr className="first-child">
                    <td>Subtotal</td>
                    <td>${totalPrice.toFixed(2)}</td>
                  </tr>
                  {/* ... Diğer toplam fiyat detayları ... */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Card;
