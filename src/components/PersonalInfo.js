import React from 'react';

class PersonalInfo extends React.Component{
    render(){
        let {about_prop} = this.props;
        let {basic_info_prop} = this.props;
        console.log(this.props);
        return(
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                        <div className="h4 mt-0 title">{about_prop.title}</div>
                        <div className="text-center pt-20">
                            <p>{about_prop.desc1}</p>
                            <p>{about_prop.desc2}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                        <div className="h4 mt-0 title">{basic_info_prop.title}</div>
                        <div className="text-left pt-20">
                            <div className="row">
                                <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                                <div className="col-sm-8">{basic_info_prop.personal.age}</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                <div className="col-sm-8">{basic_info_prop.email}</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                                <div className="col-sm-8">{basic_info_prop.personal.phone}</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                                <div className="col-sm-8">{basic_info_prop.personal.address}</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                                <div className="col-sm-8">{basic_info_prop.personal.language}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
export {PersonalInfo} 