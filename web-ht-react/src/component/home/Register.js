export const Register =()=>{
return(
    <div className="register text-center">
    <div className="container">
        <div className="register-inner">
            <h2 className="register-title">ĐĂNG KÝ NHẬN TIN</h2>
            <p className="register-text">
                Đăng ký với chúng tôi để nhận thông tin mới nhất về khuyến mãi, các
                sản phẩm mới và tin tức bạn cần. Nhập email tại đây
            </p>
            <div className="email">
                <input className="email-dk" placeholder="Email của bạn" type="text"/>
                <button className="email-btn">Gửi</button>
            </div>
        </div>
    </div>
</div>
);
}

