import React from "react";
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/poojabasarikatti.basarikatti'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.instagram.com/poojabasarikatti/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                    </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Pooja</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Java Dev",
                                1000,
                                "Python Dev",
                                1000,
                                "MERN Stack Dev",
                                1000,
                                "Android Dev",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building applications with front and back end operations.  
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='PoojaB.pdf' download='Pooja PoojaB.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}
