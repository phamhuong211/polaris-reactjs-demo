import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {
        Layout, 
        Page, 
        Card, 
        Button, 
        Form, 
        FormLayout
} from '@shopify/polaris';
import ReCAPTCHA from "react-google-recaptcha";
import validator from 'validator';
import PlacesAutocomplete from 'react-places-autocomplete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register(){

    const [name, setName] = useState(''),
          [email, setEmail] = useState(""),
          [phone, setPhone] = useState(''),
          [address, setAddress] = useState(''),
          [password, setPassword] = useState('');


    /**
     * Status
     * true: valid
     * false: not valid
     * ERR: khi sử dụng autofill email của chrome, email được trả về kết quả is not valid
     * và email Status trả về bị false??
     * ??chưa rõ tại sao
     */
    const[emailStatus,setEmailStatus] = useState();
    // console.log("email Status " + emailStatus)
    const[passwordStatus, setPasswordStatus] = useState()
    // console.log('pw status ' + passwordStatus)
    
    /**
     * Validate Email by validator
     */
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        console.log("email target value"+e.target.value)
        setEmail(e.target.value)
        console.log('set email '+email)
        console.log(email)
        if (validator.isEmail(email)) {
            setEmailError('')
            setEmailStatus(true)
        } else {
            setEmailError('Email is not valid!')
            setEmailStatus(false)
        }
    }

    /**
     * Validate password strong or not
    */
    const [errorMessage, setErrorMessage] = useState('')
    const validatePassword = (e) => {

        setPassword(e.target.value)
        console.log(password)
        if (validator.isStrongPassword(password, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 0, minSymbols: 0
        })) {
          setErrorMessage('')
          setPasswordStatus(true)
        } else {
          setErrorMessage('must be at least 8 characters long and 1 uppercase(A-Z)')
          setPasswordStatus(false)
        }
    }

    /**
     * Declare captcha
     */
    var ggCaptcha = false;

    /**
     * For redirect to users when click button
     */
    const navigate = useNavigate();
    function handleClick() {
      if(!emailStatus || !passwordStatus || name=="" || address==""){
        toast.error('Please fill in all the required fields!')
      } else if(!ggCaptcha){
        toast.error("Captcha Error!")
      } else {
        toast.success("Register Successfully!")
        navigate("/users")
      }
    }

    /**
     * Lỗi render thẻ Layout của Polaris, không tự căn giữa theo chiều dọc mà bị cắt mất phần bên trên
     * đẩy vào div center và css nó :V
     * thẻ TextField không thể typed in, đổi qua thẻ input
     */
    
    return(
      <div className='wrap-body'>
        <ToastContainer />
        <Page className="page">
            <div className="center-layout">
              <Card sectioned className='resgister-form' title="REGISTER FORM">
                  <Form >
                      <FormLayout>
                          <div className="inline-block">
                              <div className='inline-half half-item-1'>
                                <label className="label">Name *</label>
                                <input
                                    label="Name"
                                    type="text"
                                    value={name}
                                    onChange={(e)=> setName(e.target.value)}
                                    placeholder="Junio"/>
                              </div>
                              <div className='inline-half half-item-2'>

                              <label className="label">Phone Number</label>
                              <input
                                  label="Phone number"
                                  type="tel"
                                  autoComplete=""
                                  value={phone}
                                  onChange={(e)=>setPhone(e.target.value)}
                              />
                              </div>
                          </div>
                          <label className="label">Email *</label>
                          <input
                              label="Email"
                              type="text"
                              autoComplete="off"
                              onChange={(e)=> validateEmail(e)}
                              onFocus={(e)=> validateEmail(e)}
                              onBlur={(e)=> validateEmail(e)}

                              placeholder="123@example.com"
                          />
                          <span className='error' style={{
                            // color: 'red',
                            // fontWeight: 'bold',
                            // height: '5px'
                          }}>{emailError}</span>

                          <label className="label">Address *</label>
                          <input
                              label="Address"
                              type="text"
                              autoComplete=""
                              value={address}
                              onChange={(e)=>setAddress(e.target.value)}
                              autoFocus={(e)=>setAddress(e.target.value)}
                          />
                          <label className="label">Password *</label>
                          <input
                              label="Password"
                              type="password"
                              autoComplete="password"
                              onChange={(e)=>validatePassword(e)}
                          />
                          <span className="error" style={{
                            // color: 'red',
                            // fontWeight: 'bold'
                          }}>{errorMessage}
                          </span>
                          <ReCAPTCHA width="100%" className="reCaptcha"
                          // test sitekey
                              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                              onChange={() => ggCaptcha = true}
                          />

                          <Button 
                              className="register-button"
                              onClick={handleClick}

                          >
                              Submit
                          </Button>
                      </FormLayout>
                  </Form>
              </Card>
          </div>
        </Page>
      </div>
    )
}


export default Register;