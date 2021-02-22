import React, {Component} from 'react';
import '../loading.css';

class Loading extends Component {
    render() {
        return (
            <div className="d-flex m-auto">
                <div class="cssload-loader mt-5">
                    <div className="cssload-inner cssload-one"></div>
                    <div className="cssload-inner cssload-two"></div>
                    <div className="cssload-inner cssload-three"></div>
                </div>
            </div>
        )
    }
}

export default Loading;
