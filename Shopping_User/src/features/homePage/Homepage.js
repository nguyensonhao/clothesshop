import React, { useEffect, useState } from 'react'
import '../../features/homePage/Homepage.css'
import { Link } from 'react-router-dom'
import NavigateComponent from '../../components/nav/navigateComponent'
import { getListProductAsync } from '../../api/axiosClient'
import photo1 from '../../assets/image1.jpg'
import photo2 from '../../assets/image2.jpg'
import photo3 from '../../assets/image3.jpg'


const HomePage = () => {
    const [productState, setproductState] = useState([]);
    async function getlistProduct(page, size) {
        // const productlistResponse = await getListProductAsync(page, size)
        // setproductState(productlistResponse.data);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const pageLimit = productState.length / pageSize;

    var pagesArray = [];
    for (var i = 0; i < pageLimit; i++) {
        pagesArray.push(<button class="btn btn-danger">{i + 1}</button>);
    }

    useEffect(() => {
        getlistProduct(1, 6)
    }, []);

    return (
        <div>
            <NavigateComponent />
            <body>
                <div class="banner header-text">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src={photo2} class="d-block w-100 " height={600} width={500} alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={photo1} class="d-block w-100 " height={600} width={500} alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h1 className='banner-text'>Grab last minute deals</h1> */}

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={photo3} class="d-block w-100 " height={600} width={500} alt="..." />
                                <div class="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="products">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="filters-content">
                                    <div class="row">
                                        {productState.map((product, index) => {
                                            return (
                                                <div class="col-md-4" key={index}>
                                                    <div class="product-item">
                                                        <Link><img src="https://kinhnghiemquy.com/upload/img/2020/11/14/11_mau_vay_dam_xoe_du_tiec_dep_1_1605344050893.jpg" alt="#" /></Link>
                                                        <hr></hr>
                                                        <div class="down-content">
                                                            <a href={"/products/" + product.productId}><h4>Dam da hoi</h4></a>
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
                                    <button class="btn btn-warning">{'<<'}</button>
                                    {pagesArray}
                                    <button class="btn btn-warning">{'>>'}</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default HomePage