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
        setEmail(e.target.value)
        console.log(email)
        if (validator.isEmail(email)) {
            setEmailError('')
            setEmailStatus(true)
        } else {
            setEmailError('is not valid Email!')
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
          setErrorMessage('Passwords must be at least 8 characters long and 1 uppercase(A-Z)')
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
        alert('Please fill in all the required fields')
      } else if(!ggCaptcha){
        alert('reCaptcha Error')
      } else {
        navigate("/users")
      }
    }

    
    return(
        <Page className="page">
            <Layout>
                <Card sectioned title="Register" className='resgister-form'>
                    <Form >
                        <FormLayout>
                            <label className="label">Name*</label>
                            <input
                                label="Name"
                                type="text"
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                              placeholder="Junio"/>
                            <label className="label">Email *</label>
                            <input
                                label="Email"
                                type="text"
                                autoComplete="email"
                                onChange={(e)=> validateEmail(e)}
                                placeholder="123@example.com"
                            />
                            <span style={{
                              color: 'red',
                            }}>{emailError}</span>
                            <label className="label">Phone Number</label>
                            <input
                                label="Phone number"
                                type="tel"
                                autoComplete=""
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                            />
                            <label className="label">Address *</label>
                            <input
                                label="Address"
                                type="text"
                                autoComplete=""
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                            />
                            <label className="label">Password *</label>
                            <input
                                label="Password"
                                type="password"
                                autoComplete="password"
                                onChange={(e)=>validatePassword(e)}
                            />
                            <span style={{
                              color: 'red',
                            }}>{errorMessage}
                            </span>
                            <ReCAPTCHA width="100px"
                            // test sitekey
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={() => ggCaptcha = true}
                            />

                            <Button 
                                primary
                                onClick={handleClick}

                            >
                                Submit
                            </Button>
                        </FormLayout>
                    </Form>
                </Card>
            </Layout>
        </Page>
    )
}


export default Register;