
import { Checkbox, Form } from "antd";
import BaseFormInput from "../../components/core/input/formInput";
import { ButtonCore, PaddingDiv } from "../../components/core/button/buttonCore";
import styled from "styled-components";
import { MainColor } from "../../components/core/variable/variable";
import { useDispatch } from "react-redux";
import { login } from "../../stores/authSlice";
import { LoginApi } from "../../api/login.api";

const LoginStyle = styled.div`
    margin: 0 auto;
    border: 2px solid ${MainColor};
    margin-top: 10rem;
    width: 20%;
    padding: 2rem;
    .form{
      text-align: center;
    }
    .forget{
      display: flex;
      justify-content: space-between;
    }
    h2{
      margin-bottom:2rem;
    }
`

const LoginForm = () => {
  const dispatch = useDispatch();


  const onFinish = async (value: { username: string, password: string }) => {
    let configLogin = await LoginApi(value)
    let token = configLogin
    console.log("configLogin", configLogin);
    dispatch(login(configLogin?.data?.data));

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
