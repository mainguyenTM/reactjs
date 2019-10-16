import React from 'react';

class Item extends React.Component{
    render(){
        let {info} = this.props;
        return(
            <div className="row">
                <div className="col-sm-4"><strong className="text-uppercase">{info.label}:</strong></div>
                <div className="col-sm-8">{info.content}</div>
            </div>
        );
    }
}
export {Item}