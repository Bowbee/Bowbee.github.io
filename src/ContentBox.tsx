import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import Data from './Data';
import ItemContainer from './ItemContainer';

interface Props {
    data: ContentStructure[]
}
interface State {
}
interface ContentStructure{
    title: string,
    link: string,
    tags: string[],
    text: string
}

class ContentBox extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
        }
    }

    componentDidMount = function():void {
        console.log(Data);
    }

    getItemContainers() {
        let out: JSX.Element[] = []
        let counter = 0;
        this.props.data.forEach(element => {
            out.push(<ItemContainer data={element} key={counter} />);
            counter += 1;         
        });
        return out;
    }

    render():JSX.Element {
        return (
            <div className="ContentBox col m-0 p-1">
                <div className="borderLeft"></div>
                <div className="borderRight"></div>
                <div className="borderTop"></div>
                <div className="borderBottom"></div>
                <div className="col m-0 p-3">
                    {this.getItemContainers()}
                </div>
            </div>
        )
    }
}

export default hot(module)(ContentBox);