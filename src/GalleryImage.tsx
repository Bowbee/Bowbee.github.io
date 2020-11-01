import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

interface Props {
    src: string;
}
interface State {
    clicked: boolean;
}

class GalleryImage extends Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {
            clicked: false,
        }
    }

    componentDidMount():void {
    }

    render():JSX.Element {
        return (
            <div className="GalleryImage col-3 p-0 mx-2 my-1">
                <div className="row align-items-center p-0 m-0">
                    <div className="col p-0 m-0">
                        <img src={"showcase/items/" + this.props.src} alt="" onClick={() => this.setState({clicked : true})}></img>
                        <div className="borderLeft"></div>
                        <div className="borderRight"></div>
                        <div className="borderTop"></div>
                        <div className="borderBottom"></div>
                    </div>
                    {this.state.clicked ? 
                        <div className="FullScreenImage row">
                            <div className="col m-0 p-0 align-self-center">
                                <div className="svgContainer" onClick={() => this.setState({clicked: false})}>
                                    <button type="button" className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <img src={"showcase/items/" + this.props.src} alt=""></img>
                            </div>
                        </div>
                    :
                        <div className="FullScreenImage row d-none"></div>
                    }


                </div>
            </div>
        )
    }
}

export default hot(module)(GalleryImage);