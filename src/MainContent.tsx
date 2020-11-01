import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import UserInfo from './UserInfo';
import HeaderBox from './HeaderBox';
import ContentBox from './ContentBox';
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

    render():JSX.Element {
        return (
            <div className="MainContent row m-0 p-0 largeMargin">
                <div className="SideBar col-lg-3 m-0 px-3 mt-3">
                    <UserInfo data={Data.userInfo} />
                </div>
                <div className="ContentBox col-lg-9 m-0 p-0 my-3">
                    <HeaderBox />
                    <ContentBox data={Data.content} />
                </div>
            </div>
        )
    }
}

export default hot(module)(MainContainer);