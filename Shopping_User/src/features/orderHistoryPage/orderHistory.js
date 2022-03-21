import React from 'react'
import '../../features/orderHistoryPage/orderHistory.css'
import NavigateComponent from '../../components/nav/navigateComponent'
import { IoStorefrontOutline } from "react-icons/io5";
function OrderHistory() {
    return (
        <div>
            <NavigateComponent />
            <div class="container_page">
                <h1>RECENT ORDERS</h1>
                <div class="row" id="search_bar">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="Find orders by order number" />
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>

                <div className="row" id="listProductOrder">
                    <div class="row" id="productOrder">
                        <img class="col-3" src="https://trungnguyencoffeevn.com/wp-content/uploads/2018/09/ca-phe-hat-moc-legend-success-1-trung-nguyen-1231613f12208.jpg" />
                        <div class="col-7">
                            <a href="https://trungnguyencoffeevn.com/product/cafe-ha%CC%A3t-arabica-robusta/">Cafe Nguyên Hạt</a>
                            <p id="brand"> <IoStorefrontOutline className="icon" /> Trung Nguyên</p>
                            <h7 class="statusOrder">Completed</h7>
                        </div>
                        <h6 class="col-2"> 45.000 đ</h6>
                    </div>
                    <div class="total_div">
                        <span class="a">Total: </span>
                        <span>45.000 đ</span>
                    </div>
                </div>
                <div className="row" id="listProductOrder">
                    <div class="row" id="productOrder">
                        <img class="col-3" src="https://trungnguyencoffeevn.com/wp-content/uploads/2018/09/ca-phe-hat-moc-legend-success-1-trung-nguyen-1231613f12208.jpg" />
                        <div class="col-7">
                            <a href="https://trungnguyencoffeevn.com/product/cafe-ha%CC%A3t-arabica-robusta/">Cafe Nguyên Hạt</a>
                            <p id="brand"> <IoStorefrontOutline className="icon" /> Trung Nguyên</p>
                            <h7 class="statusOrder">Completed</h7>
                        </div>
                        <h6 class="col-2"> 45.000 đ</h6>
                    </div>
                    <div class="total_div">
                        <span class="a">Total: </span>
                        <span>45.000 đ</span>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default OrderHistory
