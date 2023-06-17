const LoginForm = (props) => {
    const {onForgetPassword} = props;
    return (
        <>
            <input
                className="user-name"
                placeholder="Tài khoản"
                type="text"
            />
            <input className="pass" placeholder="Mật khẩu" type="text"/>
            <button className="login">Đăng nhập</button>
            <div className="row">
                <div className="col-6 save">
                    <input type="checkbox"/>
                    Lưu mật khẩu
                </div>
                <div className="col-6 forget text-end">
                    <button
                        className="email-forget"
                        onClick={onForgetPassword}
                        type="button"
                    >
                        Quên mật khẩu
                    </button>
                </div>
            </div>
            <p className="text-center">Hoặc</p>
            <div className="oline d-flex justify-content-center">
                <a href="">
                    <img alt="" src="img/facebook.png"/>
                </a>
                <a href="">
                    <img alt="" src="img/google.png"/>
                </a>
            </div>
                                    </>
    )
}
export default LoginForm;