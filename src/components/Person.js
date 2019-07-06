import React, {Component} from 'react';
import { thisExpression } from '@babel/types';

class Person extends Component {
    render(){
        return(
            <div>
                <img src={this.props.img} />
                <h1>{this.props.name}</h1>
                <h2>{this.props.job}</h2>
            </div>
        );
    }
}
 export default Person ;