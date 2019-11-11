import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';

class LandingHeader extends React.Component {
    constructor(props){
        super(props);
        // console.log(props.root, "Landing Header");
        this.root = props.root;
    }
    render() {
        // console.log(this.root.isAuth, "Anshul")
        return <div className = 'container-fluid'>
            {/* <header> */}
    {/* <div > */}
  <nav class="navbar navbar-expand-lg navbar-light bg-light b ">
    <a class="navbar-brand" href="#"><img style={{height:'52px', width:'130px'}} src="logo.png" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav2 nav-item active">
          <div class="nav333">
            <a class="nav33  nav-link _app " href="#">
              <h6 class="nn "><span><img src="iOS.png"
                    style={{height: '20px', width :'20px' , float:'left', marginLeft: '-4px'}} />
                  <img src="Android.png" style={{height: '20px', width: '20px', float: 'left', marginLeft: '3px' }}/> Download App</span>
                  </h6>
            </a>
            </div>
        </li>
        <li class="nav-item nav2">
          <a class="nav-link nav3" href="login.html">Login</a>
        </li>
        <li class="nav-item nav2">
          <a class="nav-link nav3" href="#">Signup</a>
        </li>

      </ul>

    </div>
  </nav>
</div>
// </header>
            {/* <div className='col-md-2 logo'>
                <img src='./logo.png' height='60px' width='150px' alt = 'no image' />
            </div>
            <div className='col-md-3'>
            </div>
            <div className='col-md-6' >
                <div className='row topRightHeader'>
                    <button type="button" className="btn btn-success downloadButton "><a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en" style = {{color: 'white', paddingBottom : '10px'}}>Download App</a></button>
                    <button type="button" className="btn  navButton"> <Link to="/login" className = 'linkClass' >Login</Link></button>
                    <button type="button" className="btn navButton"><Link to="/signup" className = 'linkClass'>Sign up</Link></button>
                </div>
            </div> */}
            // </div>
    }
}

export default LandingHeader