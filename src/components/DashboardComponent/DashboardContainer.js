import React from 'react';
import SolutionSearchComponent from '../SolutionSearchComponent/SolutionSearchComponent'
import axios from 'axios';


class  DashboardComponent extends React.Component {
    constructor(props){
        super(props);
        this.root = props.root
    }

    

    render() {
        return <div className = 'row'>
            <SolutionSearchComponent root = {this.root} />
        </div>
            
       
    }
}



export default DashboardComponent



