import { useState } from 'react';
import './auth.css'
import { ForgotPassword } from './ForgotPassword';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const AuthModal = () => {
    const [forgotPasword, setForgotPasword] = useState(false);

    return (
        <div className="modal-login">
        <div
            aria-hidden="true"
            aria-labelledby="exampleModalLabel"
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                aria-controls="pills-home"
                                aria-selected="true"
                                className="nav-link active"
                                data-bs-target="#pills-home"
                                data-bs-toggle="pill"
                                id="pills-home-tab"
                                role="tab"
                                type="button"
                                onClick={() => setForgotPasword(false)}
                            >
                                Đăng nhập
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                aria-controls="pills-profile"
                                aria-selected="false"
                                className="nav-link"
                                data-bs-target="#pills-profile"
                                data-bs-toggle="pill"
                                id="pills-profile-tab"
                                role="tab"
                                type="button"
                            >
                                Đăng kí
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div
                            aria-labelledby="pills-home-tab"
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                        >
                            <div
                                aria-labelledby="home-tab"
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                            >
                                <div className="modal-inner">
                                    {!forgotPasword ? 
                                    <LoginForm onForgetPassword={() => setForgotPasword(true)}/>
                                    :
                                    <ForgotPassword/>
                                    }
                                </div>
                            </div>
                        </div>
                        <div
                            aria-labelledby="pills-profile-tab"
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                        >
                            <div className="modal-inner">
                                <RegisterForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
export default AuthModal;