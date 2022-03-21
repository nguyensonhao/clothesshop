import React, { useState, useEffect } from 'react'
import NavigateComponent from '../../components/nav/navigateComponent'
import '../cartPage/cart.css'
import { useNavigate } from "react-router-dom";
import { TOKEN, KEY_CART, USER_ID, USER_EMAIL, DATA_USER } from '../../constant/Constant';
import { checkOutShoppingCartAsync } from '../../api/axiosClient';

function Cartpage() {

  const navigate = useNavigate();
  const [dataCart, setDataCart] = useState([]);
  const [totalChagre, setTotalChagre] = useState(0);
  const token = sessionStorage.getItem(TOKEN);
  const userEmail = sessionStorage.getItem(USER_EMAIL);
  const [dataUser, setDataUser] = useState({});

  const sumTotalChagre = (carts) => {
    let total = 0;
    carts.forEach(cart => {
      total += cart.totalPrice;
    });
    setTotalChagre(total);
  }

  async function checkOutShoppingCart(data) {
    // const response = await checkOutShoppingCartAsync(data);
    // console.log("Response when checkOut Shopping cart", response);
  }

  const handlerCheckOutShoppingCart = () => {
    let listDataCheckOut = [];
    const numberUserId = sessionStorage.getItem(USER_ID);
    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let dateString = "";
    let monthString = "";
    if(date < 10){
      dateString = "0" + date;
    }else{
      dateString = date
    }
    if(month < 10){
      monthString = "0" + month;
    }else{
      monthString = month;
    }
    if (dataCart.length > 0) {
      dataCart.forEach(cart => {
        const data = {
          "userId": numberUserId,
          "productId": cart.productId,
          "totalPrice": cart.totalPrice,
          "orderDate": date,
          "modifiDate": date,
          "status": '',
          "price": cart.price,
          "quantity": cart.quantity,
          "address": "475 Bùi Ngọc Thu, Phường Tương Bình Hiệp, Thành phố Thủ Dầu Một, Bình Dương"
        }
        listDataCheckOut.push(data);
      });
    }
    checkQuantityWhenCheckout(dataCart);
    // Call API checkout shopping cart
    checkOutShoppingCart(JSON.stringify(listDataCheckOut));
  }

  const checkQuantityWhenCheckout = (carts) => {
      let callBack = false;
      carts.forEach(item => {
          if ((item.quantity > item.amount) && !callBack) {
            alert("Số lượng của sản phẩm " + item.productName + " đã vượt quá số lượng còn lại " + (Number.parseInt(item.quantity - item.amount)) + " .Số lượng được phép mua là " + item.amount);
            callBack = true;
          }
      });
  }

  const handleDeleteProductInCart = (productId) => {
    const data = dataCart.filter(i => i.productId !== productId);
    // update total changre
    sumTotalChagre(data);
    setDataCart(data);
    // update session
    sessionStorage.setItem(KEY_CART + userEmail, JSON.stringify(data));
  }

  const handleIncreseQuantity = (quantityValue, productId) => {
      // find product with productId
      dataCart.find(item => {
        if (item.productId === productId) {
            quantityValue = Number.parseInt(quantityValue) + 1;
            if (quantityValue > item.amount) {
                alert("Số lượng sản phẩm mua đã vượt quá số lượng còn lại của sản phẩm. Số lượng được phép mua: " + item.amount);
                return;
            } else {
                item.quantity = Number.parseInt(quantityValue);
                item.totalPrice = Number.parseInt(quantityValue) * Number.parseInt(item.price);
            }
        }
      });
      setDataCart(dataCart);
      sumTotalChagre(dataCart);
      sessionStorage.removeItem(KEY_CART + userEmail);
      sessionStorage.setItem(KEY_CART + userEmail, JSON.stringify(dataCart));
  }

  const handleUncreseQuantity = (quantityValue, productId) => {
      // find product with productId
      dataCart.find(item => {
        if (item.productId === productId) {
            quantityValue = Number.parseInt(quantityValue) - 1;
            if (quantityValue === 0) {
              alert("Số lượng sản phẩm mua không được nhỏ hơn 1. Số lượng được phép mua: " + item.amount);
                return;
            } else {
                item.quantity = Number.parseInt(quantityValue);
                item.totalPrice = Number.parseInt(quantityValue) * Number.parseInt(item.price);
            }
        }
      });
      setDataCart(dataCart);
      sumTotalChagre(dataCart);
      sessionStorage.removeItem(KEY_CART + userEmail);
      sessionStorage.setItem(KEY_CART + userEmail, JSON.stringify(dataCart));
  }

  useEffect(() => {
    if (token !== null || token !== 'undefined') {
      const data = sessionStorage.getItem(KEY_CART + userEmail);
      let carts = data ? JSON.parse(data) : [];
      setDataCart(carts);
      sumTotalChagre(carts);
      const dataUser = sessionStorage.getItem(DATA_USER);
      setDataUser(JSON.parse(dataUser));
    }
    if (token === null || token === 'undefined') {
      navigate('/home');
    }
  }, []);

  return (
    <div>
      <NavigateComponent />
      <section id="cart">
        <div>
          <div class="row">
            <div class="cart_2 clearfix">
              <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-6">
                  <table class="table">
                    <tr>
                      <th></th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total Price</th>
                    </tr>
                    {dataCart.map((cart) => {
                      return (
                        <tr>
                          <td class="text-left"><img class="mgt" src={cart.urlImage} /></td>
                          <td>{cart.productName}</td>
                          <td>
                            <button class="btn" onClick={() => {handleUncreseQuantity(cart.quantity, cart.productId)}}><i class="fa fa-minus"></i></button>
                            <label>{cart.quantity}</label>
                            <button class="btn" onClick={() => {handleIncreseQuantity(cart.quantity, cart.productId)}}><i class="fa fa-plus"></i></button>
                          </td>
                          <td>{Number(cart.price).toLocaleString()}</td>
                          <td><span id="total_price" class="col-11"> {Number(cart.totalPrice).toLocaleString()} <span>đ</span></span></td>
                          <td class="actions" data-th="">
                            <button class="btn btn-danger btn-sm" onClick={() => handleDeleteProductInCart(cart.productId)}><i class="fa fa-trash-o"></i></button>
                          </td>
                        </tr>
                      )
                    })}

                  </table>
                </div>
                <div class="col-4">
                  <div class="cart_3 join_1  clearfix">
                    <div class="row">
                      <div class="col-9">
                        <h4 id="delivery_to">Delivery to</h4>
                      </div>
                      <div class="col-3" id="address_edit">
                        <a href="editAddress.html" class="address_edit">Edit</a>
                      </div>
                    </div>

                    <div class="row">
                      <label class="col-5" id="fullname">{ dataUser.fullName }</label>
                      <label class="col-1" id="phone">{ dataUser.phone }</label> <br />
                      <label id="address">{ dataUser.address }</label>
                    </div>

                   
                    <div className="abc">
                      
                      <div class="row" id="block_total">
                        <div class="col-8">
                          <h4 className="info-price-bill">Total</h4>
                        </div>
                        <div class="col-4">
                          <div class="row" id="row-price">
                            <span class="total_price_1">{Number(totalChagre).toLocaleString()} <span>đ</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart_4 text-right clearfix">
                    <button class="btncheckout" onClick={handlerCheckOutShoppingCart}>Check out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Cartpage