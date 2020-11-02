import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

interface Props {
}
interface State {
}

class HeaderBox extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
        }
    }

    render():JSX.Element {
        return (
            <div className="UserInfo striped col m-0 p-1 mb-3">
                <div className="borderLeft"></div>
                <div className="borderRight"></div>
                <div className="borderTop"></div>
                <div className="borderBottom"></div>
                <div className="row m-0 p-3">
                    <h3 className="text-right ml-auto">projects</h3>
                </div>
            </div>
        )
    }
}

export default hot(module)(HeaderBox);