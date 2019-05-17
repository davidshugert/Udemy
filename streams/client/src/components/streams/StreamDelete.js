import React from 'react';
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    renderActions = () => {
        return (
            <>
                <button className="ui button negative" onClick={()=>this.props.deleteStream(this.props.stream.id)}>Delete</button>
                <button className="ui button" onClick={history.goBack}>Cancel</button>
            </>
        )
    }
    render() {
        return (
            <Modal
                title="Delete Stream"
                content={`Are you sure you want to delete thes stream${!this.props.stream ? '' : ` with title: ${this.props.stream.title}`}?`}
                actions={this.renderActions()}
                onDismiss={history.goBack} />
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete)