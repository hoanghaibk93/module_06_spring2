// import { useState } from "react";
// import ReactPaginate from "react-paginate";


//     return (
//         <div className="col-lg-9 col-12">
//             <div className="boloc d-flex">
//                 <div className="search-name">
//                     <input
//                         style={{}}
//                         className="form-control form-control-lg"
//                         type="text"
//                         placeholder="Tìm kiếm..."
//                     />
//                     {/*                            <i class="fas fa-search"></i>*/}
//                 </div>
//                 <p className="giacao">
//                     <i className="fas fa-sort-amount-up" />
//                     Giá cao
//                 </p>
//                 <p className="giathap">
//                     <i className="fas fa-sort-amount-down-alt" />
//                     Giá thấp
//                 </p>
//                 {/*                        <p class="xemnhieu"><i class="fas fa-eye"></i>Xem nhiều</p>*/}
//             </div>
//             <div className="trang1 trang">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-6  nopadding ban">
//                         <div className="product">
//                             <a href="">
//                                 <img
//                                     src="img/ban/ban3/ban3.1.webp"
//                                     alt=""
//                                     className="product-img"
//                                 />
//                                 <div className="product-info">
//                                     <p className="name-product text-center">
//                                         Bàn Narro Black Side
//                                     </p>
//                                     <div className="price-product text-center d-flex align-items-center">
//                                         <p className="price">2.200.000 đ</p>
//                                         <p className="root-price">2.500.000 đ</p>
//                                     </div>
//                                     <div className="rate d-flex">
//                                         <div className="stars">
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                         </div>
//                                         <div className="rate-number">
//                                             <p>16 đánh giá</p>
//                                         </div>
//                                     </div>
//                                     <div className="buttons d-flex ">
//                                         <button className="addCart">
//                                             <i className="fas fa-cart-plus" /> Thêm vào giỏ
//                                         </button>
//                                         {/* <button class="buyNow">Mua ngay</button> */}
//                                     </div>
//                                 </div>
//                             </a>
//                             <div className="discount">-20%</div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 nopadding ban">
//                         <div className="product">
//                             <a href="">
//                                 <img
//                                     src="img/ban/ban2/ban2.1.webp"
//                                     alt=""
//                                     className="product-img"
//                                 />
//                                 <div className="product-info">
//                                     <p className="name-product text-center">
//                                         Bàn hình bầu dục Lenia Walnut
//                                     </p>
//                                     <div className="price-product text-center d-flex align-items-center">
//                                         <p className="price">3.200.000 đ</p>
//                                         {/* <p class="root-price">300.000 đ</p> */}
//                                     </div>
//                                     <div className="rate d-flex">
//                                         <div className="stars">
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="far fa-star" />
//                                         </div>
//                                         <div className="rate-number">
//                                             <p>8 đánh giá</p>
//                                         </div>
//                                     </div>
//                                     <div className="buttons d-flex ">
//                                         <button className="addCart">
//                                             <i className="fas fa-cart-plus" /> Thêm vào giỏ
//                                         </button>
//                                         {/* <button class="buyNow">Mua ngay</button> */}
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 nopadding ge">
//                         <div className="product">
//                             <a href="">
//                                 <img
//                                     src="img/ge/ge2/ge2.1.webp"
//                                     alt=""
//                                     className="product-img"
//                                 />
//                                 <div className="product-info">
//                                     <p className="name-product text-center">
//                                         Ghế Nosh Grey Walnut{" "}
//                                     </p>
//                                     <div className="price-product text-center d-flex align-items-center">
//                                         <p className="price">1.500.000 đ</p>
//                                         <p className="root-price">1.700.000 đ</p>
//                                     </div>
//                                     <div className="rate d-flex">
//                                         <div className="stars">
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="far fa-star" />
//                                         </div>
//                                         <div className="rate-number">
//                                             <p>17 đánh giá</p>
//                                         </div>
//                                     </div>
//                                     <div className="buttons d-flex ">
//                                         <button className="addCart">
//                                             <i className="fas fa-cart-plus" /> Thêm vào giỏ
//                                         </button>
//                                         {/* <button class="buyNow">Mua ngay</button> */}
//                                     </div>
//                                 </div>
//                             </a>
//                             <div className="discount">-16%</div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 nopadding ge">
//                         <div className="product">
//                             <a href="">
//                                 <img
//                                     src="img/ge/ge4/ge4.1.webp"
//                                     alt=""
//                                     className="product-img"
//                                 />
//                                 <div className="product-info">
//                                     <p className="name-product text-center">
//                                         Ghế đẩu màu đen Anco
//                                     </p>
//                                     <div className="price-product text-center d-flex align-items-center">
//                                         <p className="price">1.850.000 đ</p>
//                                         {/* <p class="root-price">300.000 đ</p> */}
//                                     </div>
//                                     <div className="rate d-flex">
//                                         <div className="stars">
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="far fa-star" />
//                                         </div>
//                                         <div className="rate-number">
//                                             <p>33 đánh giá</p>
//                                         </div>
//                                     </div>
//                                     <div className="buttons d-flex ">
//                                         <button className="addCart">
//                                             <i className="fas fa-cart-plus" />
//                                             Thêm vào giỏ
//                                         </button>
//                                         {/* <button class="buyNow">Mua ngay</button> */}
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 nopadding sofa">
//                         <div className="product">
//                             <a href="">
//                                 <img
//                                     src="img/sofa/sofa3/sofa3.1.webp"
//                                     alt=""
//                                     className="product-img"
//                                 />
//                                 <div className="product-info">
//                                     <p className="name-product text-center">
//                                         Sofa Sven Charme Tan
//                                     </p>
//                                     <div className="price-product text-center d-flex align-items-center">
//                                         <p className="price">14.500.000 đ</p>
//                                         <p className="root-price">16.000.000 đ</p>
//                                     </div>
//                                     <div className="rate d-flex">
//                                         <div className="stars">
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="far fa-star" />
//                                         </div>
//                                         <div className="rate-number">
//                                             <p>18 đánh giá</p>
//                                         </div>
//                                     </div>
//                                     <div className="buttons d-flex ">
//                                         <button className="addCart">
//                                             <i className="fas fa-cart-plus" /> Thêm vào giỏ
//                                         </button>
//                                         {/* <button class="buyNow">Mua ngay</button> */}
//                                     </div>
//                                 </div>
//                             </a>
//                             <div className="discount">-20%</div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 nopadding sofa">
//                         <div className="product">
//                             <a href="">
//                                 <img
//                                     src="img/sofa/sofa4/sofa4.1.webp"
//                                     alt=""
//                                     className="product-img"
//                                 />
//                                 <div className="product-info">
//                                     <p className="name-product text-center">
//                                         Sofa gỗ Olio xanh
//                                     </p>
//                                     <div className="price-product text-center d-flex align-items-center">
//                                         <p className="price">15.600.000 đ</p>
//                                         {/* <p class="root-price">300.000 đ</p> */}
//                                     </div>
//                                     <div className="rate d-flex">
//                                         <div className="stars">
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="fas fa-star" />
//                                             <i className="far fa-star" />
//                                         </div>
//                                         <div className="rate-number">
//                                             <p>17 đánh giá</p>
//                                         </div>
//                                     </div>
//                                     <div className="buttons d-flex ">
//                                         <button className="addCart">
//                                             <i className="fas fa-cart-plus" /> Thêm vào giỏ
//                                         </button>
//                                         {/* <button class="buyNow">Mua ngay</button> */}
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ReactPaginate
//                 breakLabel="..."
//                 nextLabel=">"
//                 onPageChange={handlePageClick}
//                 pageCount={listFilm.totalPages}
//                 previousLabel="< "
//                 containerClassName="pagination"
//                 pageLinkClassName="page-num"
//                 nextLinkClassName="page-num"
//                 previousLinkClassName="page-num"
//                 activeClassName="active"
//                 disabledClassName="d-none"
//             />
//         </div>
//     );
// }
// export default AllProductList;