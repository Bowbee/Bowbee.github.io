import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import Data from './Data';
import ProfilePic from "./ppic.jpg";

interface Props {
    userInfo:UserInfo
}
interface State {
}

interface UserInfo{
    name: string;
    bio: string;
    links: {
        email: string,
        github: string,
    }
}

class MainContainer extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
        }
    }

    componentDidMount = function():void {
        console.log(Data);
    }

    render():JSX.Element {
        return (
            <div className="UserInfo col">
                <img id="ppic" src={ProfilePic} alt="" className="my-2"></img>
                <p id="nameText">{this.props.userInfo.name}</p>
                <p>{this.props.userInfo.bio}</p>
                <p>Links</p>
            </div>
        )
    }
}

export default hot(module)(MainContainer);