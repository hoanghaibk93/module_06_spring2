const RegisterForm = () => {
    return (
    <div className="regis">
        <input
            className="user-name"
            placeholder="Tài khoản"
            type="text"
        />
        <input className="pass" placeholder="Mật khẩu" type="text"/>
        <input
            className="again"
            placeholder="Nhập lại mật khẩu"
            type="text"
        />
        <button className="register-button">Đăng kí</button>
    </div>
    )
}
export default RegisterForm;