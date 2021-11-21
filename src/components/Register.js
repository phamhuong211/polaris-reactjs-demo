import {useState} from "react";
import {
        Layout, 
        Page, 
        Card, 
        Button, 
        Form, 
        FormLayout,
        // TextField
} from '@shopify/polaris';
import ReCAPTCHA from "react-google-recaptcha";
import validator from 'validator';

function Register(){

    const[name, setName] = useState('');
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState('');
    const[address, setAddress] = useState('');
    const[password, setPassword] = useState('');


    //Validate
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
      var email = e.target.value
      if (validator.isEmail(email)) {
        setEmailError(' is valid Email :)')
      } else {
        setEmailError('is not valid Email!')
      }
    }


    var ggCaptcha = false;
    let user = {
      name: name,
      email: email,
      address: address,
      phone: phone,
      password: password
  }
  console.log(user)
    
    return(
        <Page>
            <Layout>
                <Card sectioned title="Register">
                    <Form>
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
                              type=""
                              autoComplete=""
                              value={password}
                              onChange={(e)=>setPassword(e.target.value)}
                            />
                            <ReCAPTCHA width="100px"
                            // test sitekey
                              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                              onChange={() => ggCaptcha = true}
                            />
                            <Button primary disabled>Submit</Button>
                        </FormLayout>
                    </Form>
                </Card>
            </Layout>
      </Page>
)
}


export default Register;