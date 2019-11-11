import React, { Component } from 'react'

export default class LandingFooter extends Component {
    render() {
        return (
  <div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col">
        <img style={{height: '52px', width:'130px'}}  src="logo.png" />
        <ul style={{paddingInlineStart: '0'}}>

          <div class="ftr3 footerfont">FOLLOW US AT </div>
          <li style={{display: 'inline-block'}}>
            <span style={{fontSize:'11px'}}>

              <a href="#"><img class="ftr" src="linkedin.png" /><br /></a></span>
          </li>
          <li style={{display: 'inline-block'}}>
            <span style={{fontSize:'11px'}}>
              <a href="#"><img class="ftr1" src="instagram.png" /><br /></a></span>
          </li>
          <li style={{display: 'inline-block'}}>
            <span style={{fontSize:'11px'}}>
              <a href="#"><img class="ftr2" src="facebook.png" /><br /></a></span>
          </li>
        </ul>
      </div>

      <div class="col-sm-3 col ">
        <h5 class="footerfont">SERVICES</ h5>
            <ul class="services footerele ">
              <li><a href="http://www.google.com">SOLUTIONS </a> </li><br></br>
              <li><a href="http://www.google.com">DIGNOSTIC </a> </li><br></br>
              <li><a href="http://www.google.com">PROCEDURE</a> </li><br></br>
              <li><a href="http://www.google.com"> PLOCKR</a> </li><br></br>
              <li><a href="http://www.google.com">EARN </a> </li><br></br>
              <li> </li><br></br>

            </ul>
      </div>
      <div class="col-sm-3 col">
        <h5 class="footerfont">GET IN TOUCH WITH </ h5>
            <ul class="services footerele">
              <li><a href="http://www.google.com">ABOUT US</a> </li><br></br>
              <li><a href="http://www.google.com">CONTATC US </ a></li><br></br>
              <li class="footerfont">REACH US AT </li><br></br>
              <li><a href="http://www.google.com" /><b>info@plunes.com </b><br></br></li>
            </ul>
      </div>
      <div class="col-sm-3 col">
        <h5 class="footerfont">CAREERS</h5>
            <ul class="services"><br></br>
              <li class="footerfont">AVAILAVEL ON</li><br></br>
              <li>
                <ul style={{paddingInlineStart: '0'}}>
                  <li style={{display: 'inline-block'}}>
                    <span style={{fontSize:'11px'}}>
                    <a href="#"><img
                    style={{height:'65px', width:'60px', marginTop:'-6px' , marginLeft:'1px' , marginRight: '11px'}}
                      src="play.png" /></a></span>
                  </li>
               <li style={{display: 'inline-block'}}>
                <span style={{fontSize:'11px'}}>
                    <div class="footer-pic">
                    <a href="#"><img  src="apple.png" /></a></div></span>
                  </li>
                </ul>
              </li>
            </ul>
      </div>

    </div>
    <div class="footer-bottom">
      <div class="row align-items-center _brdr_bt">
       <p class="col-lg-12 col-sm-12 footer-text m-0 text-center footerlast ">
          © 2019 Plunes · All rights reserved · Terms of use · Privacy Policy
       </p>
      </div>
    </div>
  </div>

</div>
            
        )
    }
}

 {/* <div className='container landingFooter'>
            //     <div className='row '>
            //         <div className='col'>
            //             <div className='row'>
            //                 <img src='./logo.png' alt='no image' height='60px' width='150px'  />
            //             </div>
            //             <div className='row' style={{ marginTop: '30px' }}>
            //                 <h6 className = 'headingFooter'>FOLLOW US AT</h6>
            //             </div>
            //             <div className='row'>
            //                 <span className = 'icon'>
            //                     <img src = './Facebook.png' height = '35px' width = '35px'>
            //                     </img>
            //                 </span>
            //                 <span className = 'icon'>
            //                     <img src = './Linkedin.png' height = '35px' width = '35px'>
            //                     </img>
            //                 </span>
            //                 <span className ='icon'>
            //                 <img src = './Instagram.png' height = '35px' width = '35px'>
            //                     </img>
            //                 </span>
            //             </div>
            //         </div>
            //         <div className='col'>
            //             <h6 className = 'headingFooter'>SERVICES</h6>
            //             <a href='http://plunes.com/solutions.html' style={{ color: 'grey', fontSize : '14px' }}>SOLUTIONS<br></br></a>
            //             <a href='./' style={{ color: 'grey', fontSize : '14px' }}>DIAGNOSTICS<br></br></a>
            //             <a href='./' style={{ color: 'grey', fontSize : '14px' }}>PROCEDURES<br></br></a>
            //             <a href='http://plunes.com/plocker.html' style={{ color: 'grey', fontSize : '14px' }}>PLOCKR<br></br></a>
            //             <a href='http://plunes.com/earn.html' style={{ color: 'grey', fontSize : '14px' }}>EARN<br></br></a>
            //         </div>
            //         <div className='col'>
            //             <div className='row'>
            //                 <div className = 'col'>
            //                     <h6 className = 'headingFooter'>GET IN TOUCH WITH</h6>
            //                     <a href='http://plunes.com/about.html' style={{ color: 'grey', fontSize : '14px' }}>ABOUT US<br></br></a>
            //                     <a href='./' style={{ color: 'grey', fontSize : '14px' }}>CONTACT US<br></br></a>
            //                 </div>
            //             </div>
            //             <div className='row' style = {{marginTop: '20px'}}>
            //                 <div className = 'col'>
            //                     <h6 className = 'headingFooter' style = {{marginBottom:'0px'}}>REACH US AT</h6>
            //                     <a href='./' style={{ color: 'grey', fontSize : '14px' }}>info@plunes.com<br></br></a>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className='col'>
            //             <a href = 'http://plunes.com/careers.html' className = 'headingFooter' ><h6 >CAREERS</h6></a>
            //             <h6 className = 'headingFooter' style = {{marginTop : '30px'}}>AVAILABLE ON</h6>
            //             <a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en"><img src= './Play-Store.png' alt = '../' height = '57px' width = '50px'></img></a>
                        

            //            <a href="https://apps.apple.com/us/app/plunes/id1463747553?ls=1"> <img src= './Apple.png' alt = '../' height = '57px' width = '50px' style = {{marginLeft : '20px'}} ></img></a>
            //         </div>
            //     </div>
            //     <footer style = {{marginTop : '30px' , marginBottom: '30px'}}>
            //         <p style = {{fontSize: '14px', color:'grey'}}>© 2019 Plunes <span><b>&#183;</b></span> All rights reserved <span><b>&#183;</b></span> Terms of use <span><b>&#183;</b></span> Privacy Policy</p>
            //     </footer>

            // </div> */}