
import { Checkbox, Form, message } from "antd";
import BaseFormInput from "../../components/core/input/formInput";
import { ButtonCore, PaddingDiv } from "../../components/core/button/buttonCore";
import styled from "styled-components";
import { MainColor } from "../../components/core/variable/variable";
import { useDispatch } from "react-redux";
import { login } from "../../stores/authSlice";
import { LoginApi } from "../../api/login.api";
import { useNavigate } from "react-router-dom";
import { fetchUserById } from "../../stores/param";
import { AppDispatch } from "../../stores";

const LoginStyle = styled.div`
    margin: 0 auto;
    border: 2px solid ${MainColor};
    margin-top: 10rem;
    width: 20%;
    padding: 2rem;
    border-radius: 15px;
    .form{
      /* text-align: center; */
    }
    .forget{
      display: flex;
      justify-content: space-between;
    }
    h2{
      margin-bottom:2rem;
      text-align: center;
    }
    .sc-grXZZQ.eHvWEq{
      text-align: center;
    }
`

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  

  const onFinish = async (value: { username: string, password: string }) => {
    let infoLogin = await LoginApi(value)
    if (infoLogin?.data?.code == '00') {
      navigate("/menu/manageMenu")
      dispatch(fetchUserById())
    }
    else {
      message.error('Sai tên đăng nhập hoặc tài khoản')
    }
    dispatch(login(infoLogin?.data?.data));

  }
  return (
    <LoginStyle>
      <div className="container">
        <div className="form">
          <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
          <Form onFinish={onFinish}>
            <BaseFormInput type="input" label="Tên đăng nhập" name="username" />
            <BaseFormInput label="Mật khẩu" type="input" name="password" password="password" />
            <div className="forget">
              <span><Checkbox /> Nhớ mật khẩu</span>
              <a href="#">Quên mật khẩu ?</a>
            </div>
            <PaddingDiv />
            <ButtonCore type="submit">Đăng nhập</ButtonCore>
          </Form>
        </div>
      </div>
    </LoginStyle>
  );
};

export default LoginForm;
