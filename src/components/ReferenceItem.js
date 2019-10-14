import React, {Component} from 'react';
class ReferenceItem extends Component{
    render(){
        let {reference_info} = this.props;
        return(
            <div className="row">
                <div className="col-lg-2 col-md-3 cc-reference-header">
                    {/*<img src="images/reference-image-2.jpg" alt="Image"/>*/}
                    <div className="h5 pt-2">{reference_info.person_name}</div>
                    <p className="category">{reference_info.person_position}</p>
                </div>
                <div className="col-lg-10 col-md-9">
                    <p>{reference_info.desc}</p>
                </div>
            </div>
        );
    }
}
export {ReferenceItem} //expoert component