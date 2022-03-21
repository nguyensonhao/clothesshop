import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavigateComponent from '../../components/nav/navigateComponent';
import '../productDetailPage/productDetail.css';
import { getDetailProductAsync } from '../../api/axiosClient';
import { useNavigate } from "react-router-dom";
import { TOKEN, USER_ID, KEY_CART, USER_EMAIL } from '../../constant/Constant';

const Productdetail = () => {

    // build object send to cart
    const objectCart = {
        "userEmail": '',
        "productId": '',
        "productName": '',
        "totalPrice": 0,
        "price": 0,
        "quantity": 0,
        "urlImage": '',
        "amount": 0
    }
    let listCarts = [];

    const navigate = useNavigate();
    let { id } = useParams();
    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(1);
    const [disabled, setDisabled] = useState(false);

    async function getDetailProductById() {
        const response = getDetailProductAsync(id);
        setProduct((await response).data);
    }

    const handleChange = (event) => {
        if (event.target.value <= 1) {
            alert("Số lượng sản phẩm mua không được nhỏ hơn 1. Số lượng được phép mua: " + product.amount);
            return;
        }
        if (amount > product.amount) {
            setAmount(product.amount);
            alert("Số lượng sản phẩm mua đã vượt quá số lượng còn lại của sản phẩm. Số lượng được phép mua: " + product.amount);
            return;
        } else {
            setAmount(event.target.value);
        }
    }

    const addToCart = () => {
        const token = sessionStorage.getItem(TOKEN);
        const userEmail = sessionStorage.getItem(USER_EMAIL);
        if (token !== null && token !== 'undefined' && userEmail !== null && userEmail !== 'undefined') {
            objectCart.userEmail = userEmail;
            objectCart.productId = product.productId;
            objectCart.productName = product.productName;
            objectCart.price = product.price;
            objectCart.totalPrice = (amount * product.price);
            objectCart.quantity = amount;
            objectCart.urlImage = product.productImage
            objectCart.amount = Number.parseInt(product.amount);
            let newListCart = sessionStorage.getItem(KEY_CART + userEmail) ? JSON.parse(sessionStorage.getItem(KEY_CART + userEmail)) : listCarts;
            let checkDuplicate = false;
            if (newListCart !== null && newListCart.length > 0) {
                newListCart.forEach((item) => {
                    if (item.productId === product.productId) {
                        item.quantity = Number.parseInt(amount) + Number.parseInt(item.quantity);
                        item.totalPrice = item.quantity * product.price;
                        checkDuplicate = true;
                    }
                });
                if (!checkDuplicate) {
                    newListCart.push(objectCart);
                }
                sessionStorage.setItem(KEY_CART + userEmail, JSON.stringify(newListCart));
            } else {
                listCarts.push(objectCart);
                sessionStorage.setItem(KEY_CART + userEmail, JSON.stringify(listCarts));
            }
            navigate('/cart');
        }
        if (token === null || token === 'undefined') {
            navigate('/login');
        }
    }

    useEffect(() => {
        getDetailProductById();
    }, []);

    return (
        <div>
            <NavigateComponent />
            <div className="card-wrapper">
                <div class="card">
                    <div class="img-showcase">
                        <img src={product.productImage} alt={product.productName} />
                    </div>
                    <div class="product-content">
                        <h2 class="product-title">{product.productName}</h2>
                        <p class="product-logo">{product.productName}</p>
                        <div class="product-price">
                            <p class="new-price">Price: <span>{Number(product.price).toLocaleString()} đ</span></p>
                        </div>
                        <div class="product-detail">
                            
                        </div>
                        <div class="purchase-info">
                            <p>Số lượng</p><input type="number" value={amount} onChange={handleChange} disabled={disabled} /><br />
                            <button type="button" class="btn" onClick={addToCart}>Add to Cart <i class="fa fa-shopping-cart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Productdetail;
