import React from 'react'; 
import * as FileLibrary from './components';
import Mock from './mock/Mock'

function SummaryInfo(){
    let {about} = Mock.person;
    let {basic_info} = Mock.person;
    return (
        <div className="section" id="about">
            <div className="container">
            <div className="card" data-aos="fade-up" data-aos-offset="10">
                <FileLibrary.PersonalInfo about_prop={about} basic_info_prop={basic_info}></FileLibrary.PersonalInfo>
            </div>
            </div>
        </div>
    )
}
export default SummaryInfo;