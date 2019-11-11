import React from 'react';
import '../LandingComponent/Landing.css';
// import LandingHeader from '../LandingComponent/LandingHeader'
// import RegistrationContainer from '../RegistrationComponent/'
import axios from 'axios';
// import Redirect from 'react-dom'
import  { Redirect } from 'react-router-dom'

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.root, "Registration")
        this.root = props.root
        this.state = {
            fullName: '',
            emailId: '',
            phoneNumber: '',
            password: '',
            gender: '',
            showLogin: false
        };

        // this.baseUrl = 'https://plunes.co/v3/';
        this.baseUrl = 'http://10.34.18.136:8000/'
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        //console.log(this.state)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(event) {
        console.log("Anshul")

        event.preventDefault();


        //Api for Registration
        let data = {
            'email': this.state.emailId,
            'mobileNumber': this.state.phoneNumber,
            'password': this.state.password,
            'name': this.state.fullName,
            'address': 'XXXXXXX',
            // 'userType': 'General User',
            // 'dateOfBirth' : Date.now(),
            // 'latitude': this.root.latitude,
            // 'longitude': this.root.longitude,
            // 'qualification': '',
            // 'imageUrl': '',
            // 'user_location': this.root.address,
            // 'experience': '',
            'gender': 'M',
            // 'specialist': '',
            // 'specialistbio': '',
            // 'commondisease': '',
            // 'specialistservices': '',
            // 'symptoms': '',
            // 'referral_code': ''

        }

        // this.props.history.push("/dashboard");
        // console.log(history, "Anshul")

        axios.post(this.baseUrl + 'user/register', data)
            .then(({ data }) => {
                console.log(data);
                if (data.err) {
                    //message.error(data.msg);
                    console.log(data.err)
                }
                else {
                    this.setState({ showLogin : true})
                }
            })
    }



    render() {
        const { showLogin } = this.state

        if(showLogin){
             return <Redirect to='/login'  />
        }

        return <div>
                Anshul
            </div>
        
    }
}
export default RegistrationComponent

/* <div className='container'>
<div class="row signUpContainer" >
    <div class="col-sm">

    </div>
    <div class="col-sm signUp">
        <div className='row' style={{ paddingLeft: '100px' }}>
            <h1>Sign Up</h1>
        </div>
        <form className='form' onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label >Full Name</label>
                <input type="text" className="form-control" name="fullName" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label >Email</label>
                <input type="text" className="form-control" name="emailId" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Mobile Number</label>
                <input type="password" className="form-control" name="phoneNumber" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2"  >Password</label>
                <input type="text" className="form-control" onChange={this.handleChange} name="password" />
            </div>
            <div className="form-group" className='buttonSignUp'>
                <button type="submit" className="btn btn-success btn-lg btn-block">Sign Up</button>
            </div>
        </form>
        <div  className='row backButton'>
            <p> <i className="arrow left"></i></p>
            <a href='/' style={{ color: 'grey' }}>Back</a>
        </div>
    </div>
    <div class="col-sm">

    </div>
</div>
</div> */