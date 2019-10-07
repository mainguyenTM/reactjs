import React from 'react'; 
class Person{
    constructor(props){  
        this.name = 'Mai'; 
    } 
    render(){
        return this.name
    }
    isMyself(others){
        if(others === this.name){
            return 'This is myself!';
        }else{
            return 'Oh..oh!'
        }
    }
}
export default Person;