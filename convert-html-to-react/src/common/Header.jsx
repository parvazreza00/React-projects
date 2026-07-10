import React, { Component } from 'react'
import {Link} from 'react-router'

export class Header extends Component {
  render() {
    return (
      <div>

         <header>       
        <div class="header-area">
                <div class="main-header  header-sticky">
                    <div class="container-fluid">
                        <div class="row align-items-center">                            
                            <div class="col-xl-2 col-lg-2 col-md-1">
                                <div class="logo mb-3">
                                    <Link to='/'>Home<img src="assets/img/logo/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-10 col-md-10">
                                <div class="menu-main d-flex align-items-center justify-content-end">
                                    
                                    <div class="main-menu f-right d-none d-lg-block">
                                        <nav> 
                                            <ul id="navigation">
                                                <li> <Link to='/'>Home</Link> </li>
                                                <li><Link to='/about'>About</Link></li>
                                                <li><Link to='/services'>Services</Link></li>
                                                <li><Link to='/portfolio'>Portfolio</Link></li>
                                                <li><a href="#">Page</a>
                                                    <ul class="submenu">
                                                        <li><Link to='/blog'>Blog</Link></li>
                                                        <li><Link to='/blog-details'>Blog Details</Link></li>
                                                        <li><Link to='/entertainment'>Element</Link></li>                                                       
                                                    </ul>
                                                </li>
                                                <li><Link to='contact'>Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div class="header-right-btn f-right d-none d-xl-block ml-20">
                                        <a href="#" class="btn header-btn">Get Free Consultent</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>        
    </header>
        
      </div>
    )
  }
}

export default Header
