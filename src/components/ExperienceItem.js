import React from 'react';

class ExperienceItem extends React.Component{
    render(){
        let {experience_blo} = this.props;
        return(
            <div className="card">
                <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-experience-header">
                        <p>{experience_blo.date_range}</p>
                        <div className="h5">{experience_blo.company_name}</div>
                    </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                        <div className="h5">{experience_blo.candidate_position}</div>
                        <p>{experience_blo.job_desc}</p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export {ExperienceItem}