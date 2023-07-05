import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/navigation";
import 'swiper/css';
import { apiGetAllProductByTypeProduct } from '../../service/ShopService';
import { useEffect, useState } from 'react';
import { FormatPrice } from "../../service/FormatPrice";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ValueIconCartContext } from '../../service/ValueIconCartProvider';
import { apiCreateCart } from "../../service/CartService";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SuggestProduct = (props) => {
    const { productData } = props;
    const { valueIconCart, setValueIconCart } = useContext(ValueIconCartContext);
    const [productListByType, setProductListByType] = useState([]);
    const fetchProductListByType = async () => {
        const productList = await apiGetAllProductByTypeProduct(parseInt(productData?.productType?.idProductType));
        setProductListByType(productList)
    }
    const username = localStorage.getItem("username");

    const handleAddCartItem = async (product) => {
        try {
            const value = {
                quantity: 1,
                product: product
            }
            const data = await apiCreateCart(value);
            if (data?.status === 201) {
                setValueIconCart(valueIconCart + 1);
                toast.success("Sản phẩm đã được thêm vào giỏ hàng", { autoClose: 3000 });
            }
        } catch (error) {
            if (error.response.status === 400) {
                toast.error("Sản phẩm trong kho đã hết, vui lòng chọn sản phẩm khác", { autoClose: 3000 })
            }
        }
    }
    useEffect(() => {
        fetchProductListByType()
    }, [])
    // const suggestProduct = [1, 2]
    return (
        <div className="suggest">
            <div className="suggest-heading">Sản phẩm gợi ý</div>
            <div className="slider">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        900: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        }
                    }}
                    spaceBetween={20}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {productListByType.map(product =>
                        <SwiperSlide key={product}>

                            <div className="product">
                                <Link to={`/detail/${product.idProduct}`} >
                                    <img
                                        alt=""
                                        className="product-img"
                                        src={product.image}
                                    />
                                </Link>
                                <div className="product-info">
                                    <Link to={`/detail/${product.idProduct}`}>
                                        <p className="name-product text-center">
                                            {product.nameProduct}
                                        </p>
                                        <div
                                            className="price-product text-center d-flex align-items-center">
                                            <p className="price">{FormatPrice(product?.originalPrice)}<span> đ</span></p>
                                            <p className="root-price">{FormatPrice(product?.salePrice)}<span> đ</span></p>
                                        </div>
                                        <div className="rate d-flex">
                                            <div className="stars">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rate-number">
                                                <p>21 đánh giá</p>
                                            </div>
                                        </div>
                                    </Link>
                                    {product?.quantity > 0 ?
                                        (<div className="buttons d-flex ">
                                            {username !== null ?
                                                (<button className="addCart" onClick={() => { handleAddCartItem(product) }}>

                                                    <i className="fas fa-cart-plus" /> Thêm vào giỏ
                                                </button>) :
                                                (<button className="addCart" data-bs-target="#exampleModal"
                                                    data-bs-toggle="modal">
                                                    <i className="fas fa-cart-plus" /> Thêm vào giỏ
                                                </button>)
                                            }
                                        </div>) :

                                        <div className="buttons d-flex ">
                                            <button className="addCart-empty">
                                                <i className="fas fa-exclamation-circle" /> Hết hàng
                                            </button>
                                        </div>
                                    }
                                </div>

                                {product?.originalPrice != product?.salePrice ? (
                                    <div className="discount">{(-(product?.originalPrice - product?.salePrice) / product.originalPrice * 100).toFixed(0)}<span>%</span></div>) : ''}
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
}
export default SuggestProduct;