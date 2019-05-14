import React from 'react';

export default class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { spans: 0 }
        this.imageRef = React.createRef()
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10) + 1
        this.setState({ spans })
    }
    render() {
        const { alt_description, urls } = this.props.image;
        return (
                <img
                    ref={this.imageRef}
                    alt={alt_description}
                    src={urls.regular}
                    style={{ gridRowEnd: `span ${this.state.spans}` }}
                />
        )
    }

}