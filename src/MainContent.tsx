import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import UserInfo from './UserInfo';
import Data from './Data';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}
interface State {
    userDisplayName: string
}

class MainContainer extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            userDisplayName: ""
        }
    }

    componentDidMount = function():void {
        console.log(Data);
    }

    render():JSX.Element {
        return (
            <div className="MainContent row m-0 p-0">
                <div className="SideBar col-md-3 m-0 p-0">
                    <UserInfo userInfo={Data.userInfo} />
                </div>
                <div className="ContentBox col-md-9 m-0 p-0">
                    <p>My Content</p>
                </div>
            </div>
        )
    }
}

export default hot(module)(MainContainer);