import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../listProductPage/listProduct.css'
import NavigateComponent from '../../components/nav/navigateComponent'
import '../../features/listProductPage/listProduct.css'
import { connect } from 'react-redux'
import { getListProductAsync } from '../../api/axiosClient';

function ListProduct(props) {
    const [productState, setproductState] = useState([]);

    const [disableCurrentPage, setDisableCurrentPage] = useState(false);
    const [currentPage, setCurrentPage] = useState("");
    const [pageLimit, setPageLimit] = useState(10);
    // const [pageSize, setPageSize] = useState(10);

    async function getlistProduct(page, size) {
        console.log(page);
        // const productlistResponse = await getListProductAsync(page, size)
        // setproductState(productlistResponse.data);
    }

    var pagesArray = [];
    for (let i = 0; i < pageLimit; i++) {
        pagesArray.push(<li class="page-item" ><button onClick={() => getlistProduct(i + 1, 6)} class="page-link" href="#">{i + 1}</button></li>);
        // pagesArray.push(<li class="page-item" onClick={getlistProduct}><a class="page-link" href="#">{i + 1}</a></li>);
    }

    useEffect(() => {
        getlistProduct(1, 6);
    }, []);

    return (
        <div>
            <NavigateComponent />
            <div class="products">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="filters">
                                <h7>All Products</h7>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="filters-content">
                                <div class="row">
                                    {productState.map(product => {
                                        return (
                                            <div class="col-md-4" key={product}>
                                                <div class="product-item">
                                                    <Link to={"/products/" + product.productId}><img src={product.productImage} alt={product.productName} /></Link>
                                                    <hr></hr>
                                                    <div class="down-content">
                                                        <a href={"/products/" + product.productId}><h4>{product.productName}</h4></a>
                                                        <h6>{Number(product.price).toLocaleString()} đ</h6>
                                                        <p>{product.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <ul class="pages">
                                <li class="page-item" ><a class="page-link" style={{width:"70px"}} href="#">Prev</a></li>
                                {pagesArray}
                                <li class="page-item"><a class="page-link" style={{width:"70px"}} href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        navType: state.nav
    }
}
const mapDispatchToPros = dispatch => {
    return {
        setNavType: (payload) => dispatch({
            type: 'setNav',
            payload: payload
        })
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(ListProduct)