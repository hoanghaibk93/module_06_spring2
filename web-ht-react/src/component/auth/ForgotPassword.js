export const ForgotPassword = () => {
    return (
        <div className="" id="email-confirm">
            <h1 className="text-center">Quên mật khẩu</h1>
            <p style={{color: "gray"}}>
                Vui lòng nhập email mà bạn đã đăng ký tài khoản để lấy lại
                mật khẩu của bạn.
            </p>
            <input
                className="email-again"
                placeholder="Nhập email của bạn"
                type="email"
            />
            <div className="col-auto">
                <button className="login" type="submit">
                    Tìm lại mật khẩu
                </button>
            </div>
        </div>
    )
}