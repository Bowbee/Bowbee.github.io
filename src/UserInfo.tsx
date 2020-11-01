import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import Data from './Data';
import ProfilePic from "./ppic.jpg";
import GitLogo from "./GitHub-64px.png";

interface Props {
    data:UserData
}
interface State {
}

interface UserData{
    name: string;
    bio: string;
    links: {
        email: string,
        github: string,
    }
}

class UserInfo extends Component<Props, State> {
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
            <div className="UserInfo striped col m-0 p-1">
                <div className="borderLeft"></div>
                <div className="borderRight"></div>
                <div className="borderTop"></div>
                <div className="borderBottom"></div>
                <div className="row m-0 p-3">
                    <img id="ppic" src={ProfilePic} alt="" className="mb-2 mt-0 mx-auto"></img>
                </div>
                <p className="py-1 m-0 mt-1" id="nameText">{this.props.data.name.toLowerCase()}</p>
                <p id="bioText">{this.props.data.bio.toLowerCase()}</p>
                <div className="row m-0 p-0 mb-2">
                    <div className="userLink col p-0 p-0 mx-0 mt-3 mb-3 mx-auto">
                        <a className="mx-auto" target="_blank" rel="noreferrer" href={this.props.data.links.github}><img className="userIcon" id="ghub" src={GitLogo} alt=""></img></a>
                    </div>
                    <div className="userLink col p-0 mx-0 mt-3 mb-3 mx-auto">
                        <a className="mx-auto" target="_blank" rel="noreferrer" href={"mailto:"+this.props.data.links.email}>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-envelope-fill userIcon" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(module)(UserInfo);