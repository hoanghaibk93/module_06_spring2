import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import { apiLogin } from "../../service/LoginService";
import { useNavigate } from "react-router";
import { useState } from "react";
const LoginForm = (props) => {
    const { onForgetPassword } = props;
    const navigate = useNavigate();
    const [failedAccount, setFailedAccount] = useState(null);
    const[modal,setModal] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .required("Tên đăng nhập bắt buộc phải nhập")
                        .matches(/\w{8,35}/, "Tên đăng nhập bắt buộc từ 8 đến 35 ký tự"),
                    password: Yup.string()
                        .required("Mật khẩu bắt buộc phải nhập")
                        .matches(/\w{8,35}/, "Mật khẩu bắt buộc từ 8 đến 35 ký tự")
                })}
                onSubmit={(values) => {
                    const loginUser = async () => {
                        try {
                            const data = await apiLogin(values);
                            console.log(data);
                            setFailedAccount(null);
                            localStorage.setItem("token", data.token);
                            localStorage.setItem("username", data.username);
                            localStorage.setItem("account", JSON.stringify(data));
                            setModal(true);
                            
                            window.location.href = "/";
                            
                        } catch (error) {
                            setFailedAccount("Tên đăng nhập hoặc mật khẩu không đúng")
                        }
                    };
                    loginUser();
                }}
            >
                <Form>
                    {failedAccount && (
                        <p className="text-danger">{failedAccount}</p>
                    )}
                    <Field
                        className="user-name"
                        placeholder="Tài khoản"
                        type="text"
                        name="username"
                    />
                    <ErrorMessage name="username" component={"p"} className="text-danger" />

                    <Field className="pass" placeholder="Mật khẩu" type="password" name="password" />
                    <ErrorMessage name="password" component={"p"} className="text-danger" />
                    <button className="login" type="submit" data-bs-dismiss={`${modal==true ? 'modal' : ''}`}>Đăng nhập</button>
                    <div className="row">
                        <div className="col-6 save">
                            <Field type="checkbox" />
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
                            <img alt="" src="img/facebook.png" />
                        </a>
                        <a href="">
                            <img alt="" src="img/google.png" />
                        </a>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default LoginForm;