import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import ReactMarkdown from "react-markdown";

interface Props {
    data: ContentStructure;
}
interface State {
    clicked: boolean
}

interface ContentStructure{
    title: string,
    link: string,
    tags: string[],
    text: string
}

class ItemContainer extends Component<Props, State> {
    
    constructor(props: Props){
        super(props);
        this.state = {
            clicked: false
        }
    }

    render():JSX.Element {
        return (
            <div className="ItemContainer striped col m-0 p-1 mb-3">
                <div className="borderLeft"></div>
                <div className="borderRight"></div>
                <div className="borderTop"></div>
                <div className="borderBottom"></div>
                {!this.state.clicked ? 
                    <div className="col m-0 p-0">
                        <div className="row m-0 p-3" onClick={() => this.setState({clicked: !this.state.clicked})}>
                            <p className="p-0 my-2">{this.props.data.title.toLowerCase()}</p>
                        </div>

                    </div>
                :
                    <div className="col m-0 p-0">
                        <div className="row m-0 p-3" onClick={() => this.setState({clicked: !this.state.clicked})}>
                            <div className="col m-0 p-0 text-left">
                                <p className="p-0 my-2">{this.props.data.title.toLowerCase()}</p>
                            </div>
                            <div className="col m-0 p-0 text-right">
                                { this.props.data.link.length > 0 ? <a target="_blank" rel="noreferrer" href={this.props.data.link}><p className="p-0 m-0" id="GHLink">View on GitHub</p></a>: null }
                            </div>
                        </div>
                        <div className="col m-0 p-3 text-left ItemText">
                            <ReactMarkdown children={this.props.data.text} />
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}

export default hot(module)(ItemContainer);