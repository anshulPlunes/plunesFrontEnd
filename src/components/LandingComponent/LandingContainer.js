import React from 'react';
import './Landing.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollMenu from 'react-horizontal-scrolling-menu';

import RegistrationContainer from '../RegistrationComponent/RegistrationComponent'
import axios from 'axios';
import { Redirect } from 'react-router'
import ScrollProfileComponent from './ScrollProfileComponent'


class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.root, "Landing Container");
        // console.log(props)
        this.root = props.root;
        this.state = {
            filter: '',
            emailid: '',
            password: '',
            proceduresList: [],
            selectedData: [],
            docList: [],
            showDropdown: false,
            showDiv: false,
            showSelectedProcedures: false,
            showSignup: false
            // redirect: true
        };
        this.baseUrl = 'https://plunes.co/v3/'
        this.data = [];
        this.selectedProcedures = [];
        this.showForm = false;
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onSearchQuery = this.onSearchQuery.bind(this);
        this.settingBid = this.settingBid.bind(this);
        this.viewAllBid = this.viewAllBid.bind(this);
        this.sendToSignUpPage = this.sendToSignUpPage.bind(this);

    }

    sendToSignUpPage() {
        this.setState({
            showSignup: true
        })
    }


    async viewAllBid(id) {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGI5MmYyZDVlYTYzYTIzMjMwMWFjMTgiLCJpYXQiOjE1NzI1MjE2OTJ9.vracwZa90DFsPC0tPWrwn_Z8uElqUYnfpy8HKD79le8'
        let response = await axios.get(this.baseUrl + 'bidding/view_bids/' + id, { headers: { "Authorization": `Bearer ${token}` } })
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    console.log(data.err)
                } else {
                    console.log(data)
                    return data
                }
            })
        // console.log(response)
        return response;

    }

    async  viewBidsProcedures(bidId) {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGI5MmYyZDVlYTYzYTIzMjMwMWFjMTgiLCJpYXQiOjE1NzI1MjE2OTJ9.vracwZa90DFsPC0tPWrwn_Z8uElqUYnfpy8HKD79le8'
        let response = await axios.get(this.baseUrl + 'bidding/view_bids_of_procedure/' + bidId, { headers: { "Authorization": `Bearer ${token}` } })
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    console.log(data.err)
                } else {
                    // console.log(data)
                    return data
                }
            })
        // console.log(response)
        return response;
    }

    async settingBid(proceduresArray) {
        console.log(proceduresArray);
        let proceduresString = proceduresArray.join();
        console.log(proceduresString);
        let body = {
            "Userid": '5db92f2d5ea63a232301ac18',
            "Username": "Demo user",
            "Location": "90b, Delhi - Jaipur Expy, Sector 18, Gurugram, Haryana 122008, India",
            "Diagnostics": 'Amalgam Fillings,Composite Fillings',
            "Long": "77.0749492",
            "Lat": "28.4851501",
            "Concern": "",
            "Images": "",
            "Quantity": "1,1"
        }
        let response = await axios.post(this.baseUrl + 'bidding/setting_bid', body)
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    //message.error(data.msg);
                    console.log(data.err)
                }
                else {
                    // console.log('anshul')
                    // console.log(data)
                    return data
                }
            })
        return response;
    }


    async handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.selectedData);

        let settingBid = await this.settingBid(this.state.selectedData);
        let userId = '5db92f2d5ea63a232301ac18';
        let viewBids = await this.viewAllBid(userId)
        let bidId = viewBids.user[0]._id
        let viewBidsOfProcedures = await this.viewBidsProcedures(bidId);
        let listOfDoc = viewBidsOfProcedures.user.data;
        //    console.log(listOfDoc);
        this.root.doctorList = listOfDoc
        this.setState({
            docList: listOfDoc
        })
        this.setState({
            searchInput: true
        })
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async componentDidMount() {
        return await axios.get(this.baseUrl + 'bidding/list_of_procedures')
            .then(({ data }) => {
                console.log(data)
                if (data.err) {
                    console.log(data.err)
                }
                else {
                    // console.log(data, 'list of procedures');
                    //Copy from NoSQLBooster for MongoDB free edition. This message does not appear if you are using a registered version.

                    this.setState({ proceduresList: data.user })
                }
            })
    }

    handleClick(e) {
        let selectedValue = e.currentTarget.dataset.value;
        // console.log(selectedValue);
        this.selectedProcedures.push(selectedValue);
        // console.log(this.selectedProcedures);
        this.setState({
            selectedData: this.selectedProcedures,
            showDropdown: false,
            showDiv: false,
            showSelectedProcedures: true
        })
        this.showForm = true;

        // console.log(this.context);
    }
    onSearchQuery(e) {
        // console.log('anshul')
        // console.log(e.target.value);
        this.setState({ filter: e.target.value });

        if (this.state.filter.length > 1) {
            const { filter, proceduresList } = this.state;
            const lowercasedFilter = filter.toLowerCase();
            const filteredData = proceduresList.filter(item => {
                let result = false;
                Object.keys(item).forEach(key => {
                    if (key == 'procedure' || key == 'tag') {
                        let smallData = item[key].toString().toLowerCase();
                        if (smallData.includes(lowercasedFilter)) {
                            result = true;
                        }
                    }
                });
                return result;
            });
            this.data = filteredData
            this.setState({
                showDropdown: true,
                showDiv: true
            })
        }

    }

    render() {
        // const { isAuth } = this.root;
        const { showSignup } = this.state
        if (showSignup) {
            return <Redirect to='/signup' />;
        }

        return <Router>
            <div class="container">
        <div class="text-center">
             <h1 class="h11">Find the best offer on Dignostic Tests <br></br> & Medical Procedures. </h1>
            <form action="">
          <div  class="autocomplete form-group">
            <input class="form-control"  type="text" name="search" placeholder="Name the procedure or test here .." id="myInput" onChange={this.onSearchQuery} />
            {this.state.showDiv ? <div className='row' >
                <ul style={{ listStyleType: 'none' }} className='searchDropdown'>
                    {
                        this.state.showDropdown ?
                            this.data.map(item => (
                                <li key='' data-value={item.procedure} className='row procedureListClass' onClick={this.handleClick} >
                                    {item.procedure}
                                </li>
                            )) : null
                    }
                </ul>
            </div> : null

            }
            {
                this.state.showSelectedProcedures ? <div className='row selectedProceduresList'>
                    <ul style={{ listStyleType: 'none' }} >
                        {
                            this.showForm ? <form onSubmit={this.handleSubmit}>
                                {
                                    this.state.selectedData.map(item =>
                                        (
                                            <li key='' className='row procedureListClass'>{item}</li>
                                        ))
                                }

                            </form> : null
                        }
                    </ul>
                </div> : null
            }
            {
                this.showForm ?
                    <button type='button' className='btn btn-success proceedButton' onClick={this.sendToSignUpPage}> Proceed </button>
                    : null
            }

          </div>
            </form>

        </div>
    </div>
    
  <div style={{backgroundColor: '#f2f2f2'}}>
           <div style={{paddingTop: '1px'}}> <h3 class="header"> Avail upto 50% of on Medical
              procedures, diagnostics & appointments. 
               </h3></div>
        <div class="main-content">
    <div id="owl-demo" class = 'row cardItemsRow owl-carousel owl-theme'>
        <div class="item">
            <div class="card bg-light" style={{width: '18rem'}}>
                <img src="Dentist.png" class="card-img-top" alt="..." />
                <div class="card-body carousel-text">
                  <h5 class="card-title carousel-header">Dentist</h5>
                  <p class="card-text">Root canal Treatment (TCT)<br></br>Teeth whitening<br></br>Scaling & Polishing Dentel Filling..</p>
                  <a href="#" class="btn btn-primary button-view">view more</a>
                </div>
              </div>
        </div>
        <div class="item">
            <div class="card bg-light" style={{width: '18rem'}}>
                <img src="orp.png" class="card-img-top" alt="..." />
                <div class="card-body carousel-text">
                  <h5 class="card-title carousel-header">Orthopedics</h5>
                  <p class="card-text">Root canal Treatment (TCT)<br></br>Teeth whitening<br></br>Scaling & Polishing Dentel Filling..</p>
                  <a href="#" class="btn btn-primary button-view">view more</a>
                </div>
              </div>
        
        </div>
      
        <div class="item">
            <div class="card bg-light" style={{width: '18rem'}}>
                <img src="Dentist.png" class="card-img-top" alt="..." />
                <div class="card-body carousel-text">
                  <h5 class="card-title carousel-header">Dermatologists</h5>
                  <p class="card-text">Root canal Treatment (TCT)<br></br>Teeth whitening<br></br>Scaling & Polishing Dentel Filling..</p>
                  <a href="#" class="btn btn-primary button-view">view more</a>
                </div>
              </div>
        
        </div>
       
        <div class="item">
            <div class="card bg-light" style={{width: '18rem'}}>
                <img src="Dentist.png" class="card-img-top" alt="..." />
                <div class="card-body carousel-text">
                  <h5 class="card-title carousel-header">Gynaecologist</h5>
                  <p class="card-text">Root canal Treatment (TCT)<br></br>Teeth whitening<br></br>Scaling & Polishing Dentel Filling..</p>
                  <a href="#" class="btn btn-primary button-view">view more</a>
                </div>
              </div>
        </div>
      
        <div class="item">
            <div class="card bg-light " style={{width: '18rem'}}>
                <img src="Dentist.png" class="card-img-top" alt="..." />
                <div class="card-body carousel-text">
                  <h5 class="card-title carousel-header">Psychiatrists</h5>
                  <p class="card-text">Root canal Treatment (TCT)<br></br>Teeth whitening<br></br>Scaling & Polishing Dentel Filling...</p>
                  <a href="#" class="btn btn-primary button-view">view more</a>
                </div>
                
              </div>
            
        </div>
        </div>
            <div // <div className='container'> */}
class="owl-theme">
        <div class="owl-controls">
            <div class="custom-nav owl-nav"></div>
            
        </div>
    </div>
    </div>
    </div>
  

           
        </Router>
    }
}

export default LandingContainer

{/* // <div className='container'> */}
{/* <div className='row landingTopRow'>
<div className='col-md-2'>
</div>
<div className='col-md-8' style={{ paddingTop: '10%' }}>
    <center>
        <div className='row'>
            <h4 className='landingCenterHeading'>Find the best offers on Diagnotic Tests <br></br> &
                Medical Procedures.</h4>
        </div>
        <div className="row">
            <input type="text" className="searchInput" placeholder="Name the procedure or test here..." onChange={this.onSearchQuery} >
            </input>
            <img className='searchImage' src='./search.png' alt='Search Img' height='25px' width='25px'></img>
            {this.state.showDiv ? <div className='row' >
                <ul style={{ listStyleType: 'none' }} className='searchDropdown'>
                    {
                        this.state.showDropdown ?
                            this.data.map(item => (
                                <li key='' data-value={item.procedure} className='row procedureListClass' onClick={this.handleClick} >
                                    {item.procedure}
                                </li>
                            )) : null
                    }
                </ul>
            </div> : null

            }
            {
                this.state.showSelectedProcedures ? <div className='row selectedProceduresList'>
                    <ul style={{ listStyleType: 'none' }} >
                        {
                            this.showForm ? <form onSubmit={this.handleSubmit}>
                                {
                                    this.state.selectedData.map(item =>
                                        (
                                            <li key='' className='row procedureListClass'>{item}</li>
                                        ))
                                }

                            </form> : null
                        }
                    </ul>
                </div> : null
            }
            {
                this.showForm ?
                    <button type='button' className='btn btn-success proceedButton' onClick={this.sendToSignUpPage}> Proceed </button>
                    : null
            }


        </div>
    </center>
</div>

</div>
<hr style={{ marginTop: '120px' }}></hr>
<div className='row ' style={{ paddingTop: '40px' }}>
<div className='row '>
    <center>
        <h4 className='discountHeading'>
            Avail upto 50% off on medical procedures,<br></br>
            diagnostics & appointments.
        </h4>
    </center>
</div>

<div id="demo" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="row">
                <div class="col" style={{ paddingLeft: '30px' }}>
                    <img src="./Dentist.png" height='295px' width='320px' /><br></br>
                </div>
                <div class="col" style={{ paddingRight: '30px' }}>
                    <img src="./Orthopedics.png" height='295px' width='320px' />
                </div>
            </div>
            <div class="row">
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Dentist</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Root Canal Treatment (RCT) <br></br>
                        Teeth Whitening <br></br>
                        Scaling & Polishing Dental Filling ...
                    </p>
                    <button className='viewMoreButton' >View More</button>
                </div>
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Orthopedics</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Spinal Fusion Surgery <br></br>
                        Arthroplasty <br></br>
                        Bone Grafting ...
                    </p>
                    <button className='viewMoreButton' >View More</button>
                </div>
            </div>
        </div>
       
        <div class="carousel-item">
            <div class="row">
                <div class="col" style={{ paddingLeft: '30px' }}>
                    <img src="./Dermatologist.png" height='295px' width='320px' /><br></br>
                </div>

                <div class="col" style={{ paddingRight: '30px' }}>
                    <img src="./Gynaecologist.png" height='295px' width='320px' />
                </div>
            </div>
            <div class="row">
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Dermatologists</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Botox Treatment <br></br>
                        Anti-Aging Treatment <br></br>
                        Skin Boosters & Fillers ...
                    </p>
                    <button className='viewMoreButton' >View More</button>
                </div>
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Gynaecologist</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Cervical Amputation <br></br>
                        Viginal Hysterectomy <br></br>
                        Cyst Removal ...
                    </p>
                    <button className='viewMoreButton'>View More</button>
                </div>
            </div>
        </div>

      
        <div class="carousel-item">
            <div class="row">
                <div class="col" style={{ paddingRight: '30px' }}>
                    <img src="./PSYCHIATRISTS.png" height='295px' width='320px' />
                </div>
                <div class="col" style={{ paddingRight: '30px' }}>
                    <img src="./Neurologist.png" height='295px' width='320px' />
                </div>
            </div>
            <div class="row">
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Psychiatrists</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Autism Assessment <br></br>
                        Stress Management <br></br>
                        Conduct Disorder ...
                    </p>
                    <button className='viewMoreButton'>View More</button>
                </div>
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Neurologist</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Surgical Cliping <br></br>
                        Chemotherapy <br></br>
                        Brain Tumor Surgery ...
                    </p>
                    <button className='viewMoreButton'>View More</button>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row">
                <div class="col" style={{ paddingLeft: '30px' }}>
                    <img src="./OPHTHAMOLOGIST.png" height='295px' width='320px' /><br></br>
                </div>
                <div class="col" style={{ paddingRight: '30px' }}>
                    <img src="./Pathology.png" height='295px' width='320px' />
                </div>
            </div>
            <div class="row">
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Opthamalogist</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Micro Incision Surgery <br></br>
                        Ptosis Surgery <br></br>
                        Corneal Tear Repair ...
                    </p>
                    <button className='viewMoreButton'>View More</button>
                </div>
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Pathology</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Ammonia Blood Test <br></br>
                        Montaux Test <br></br>
                        Pregnancy Test ...
                    </p>
                    <button className='viewMoreButton'>View More</button>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row">
                <div class="col" style={{ paddingLeft: '30px' }}>
                    <img src="./PEDIATRICIAN.png" height='295px' width='320px' /><br></br>
                </div>
                <div class="col" style={{ paddingRight: '30px' }}>
                    <img src="./Physiotherapy.png" height='295px' width='320px' />
                </div>
            </div>
            <div class="row">
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Pediatrician</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Heart Murmur Treatment <br></br>
                        Hip Examination <br></br>
                        Venipuncture ...
                    </p>
                    <button className='viewMoreButton'>View More</button>
                </div>
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Physiotherapy</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Electrotherapy <br></br>
                        Laser Therapy <br></br>
                        Fitting of Orthosis ...
                    </p>
                    <button className='viewMoreButton' >View More</button>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row">
                <div class="col" style={{ paddingLeft: '30px' }}>
                    <img src="./RADIOLOGIST.png" height='295px' width='320px' /><br></br>
                </div>
                <div class="col" style={{ paddingRight: '30px' }}>
                    <img src="./PSYCHIATRISTS.png" height='295px' width='320px' />
                </div>
            </div>
            <div class="row">

                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Radiologists</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>X-RAY Ankle AP <br></br>
                        MRI Abdomen <br></br>
                        USG Breast One Sided ...
                    </p>
                    <button className='viewMoreButton'>View More</button>
                </div>
                <div class="col" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h5 style={{ fontSize: '25px' }}>Psychiatrists</h5>
                    <p style={{ color: '#7e7e7e', fontSize: '20px' }}>Autism Assessment <br></br>
                        Stress Management <br></br>
                        Conduct Disorder ...
                    </p>
                    <button className='viewMoreButton'>View More</button>
                </div>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span><img src='./arrow_left.png' alt='...' height='40px' width='40px'></img></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
        <img src='./arrow_right.png' alt='...' height='40px' width='40px'></img>
    </a>
</div>
</div>

<hr className='hrClass'></hr>
</div> */}