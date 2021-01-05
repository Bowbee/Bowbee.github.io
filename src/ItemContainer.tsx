import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import ReactMarkdown from "react-markdown";
import GalleryImage from './GalleryImage';

interface Props {
    data: ContentStructure;
    parentKey: string;
}
interface State {
    clicked: boolean;
    tags: JSX.Element[];
}

interface ContentStructure{
    title: string,
    link: string,
    tags: string[],
    text: string,
    images: string[]
}

class ItemContainer extends Component<Props, State> {

    
    constructor(props: Props){
        super(props);
        this.state = {
            clicked: false,
            tags: []
        }
    }

    componentDidMount():void {
        this.setState({tags: this.getTags()});
    }

    getTags(){
        let out: JSX.Element[] = []
        let counter = 0;
        this.props.data.tags.forEach(element => {
            out.push(<p className="pr-4 m-0 tag" key={this.props.parentKey + "$t" + counter}>{element}</p>);
            counter += 1;                               
        });
        return out;
    }
    getImages(){
        let out: JSX.Element[] = []
        let counter = 0;
        this.props.data.images.forEach(element => {
            out.push(<GalleryImage src={element} key={this.props.parentKey + "$i" + counter} />)
            counter += 1;
        })
        return out;
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
                        <div className="row m-0 py-3 pl-3" onClick={() => this.setState({clicked: !this.state.clicked})}>
                            <div className="col m-0 p-0 text-left">
                                <p className="p-0 my-2 title">{this.props.data.title.toLowerCase()}</p>
                            </div>
                            <div className="col-auto m-0 p-0 pr-4 pt-2 text-right">
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>

                    </div>
                :
                    <div className="col m-0 p-0">
                        <div className="row m-0 pt-3 pl-3" onClick={() => this.setState({clicked: !this.state.clicked})}>
                            <div className="col m-0 p-0 text-left">
                                <p className="p-0 my-2">{this.props.data.title.toLowerCase()}</p>
                            </div>
                            <div className="col-auto m-0 p-0 pl-3 text-right">
                                { this.props.data.link.length > 0 ? <a target="_blank" rel="noreferrer" href={this.props.data.link}><p className="p-0 m-0 pr-3" id="GHLink">View on GitHub</p></a>: null }
                            </div>
                        </div>
                        <div className="row m-0 p-0 pb-2 pl-3">
                            {this.state.tags}
                        </div>
                        <div className="col m-0 p-3 text-left ItemText">
                            <ReactMarkdown children={this.props.data.text} />
                        </div>
                        {this.props.data.images.length > 0 ? 
                            <div className="col p-0 m-0 ImageGallery">
                                <div className="row align-items-center justify-content-center p-0 m-3">
                                    {this.getImages()}
                                </div>
                            </div>
                        : null}
                        
                    </div>
                }
                
            </div>
        )
    }
}

export default hot(module)(ItemContainer);