import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
const RNNativeListviewItemView =
  requireNativeComponent('NativeListviewItemView', null);

class NativeListviewItem extends Component {
  constructor(props) {
    super(props);
    this.onUpdateView = this.onUpdateView.bind(this);
    this.state = {
      innerRowID: this.props.rowID
    };
  }

  componentWillUnmount() {
    this.props.renderRow = undefined;
  }

  onUpdateView(event) {
    const { rowID } = event.nativeEvent;
    if (this.state.innerRowID !== rowID) {
      this.props.rowID = rowID;
      this.setState({ innerRowID: rowID });
    }
  }

  render() {
    return (
      <RNNativeListviewItemView
        {...this.props}
        onUpdateView={this.onUpdateView}
      >
				{this.props.renderRow(this.state.innerRowID)}
			</RNNativeListviewItemView>
		);
  }
}

NativeListviewItem.propTypes = {
  rowID: React.PropTypes.number,
  renderRow: React.PropTypes.func.isRequired
};

NativeListviewItem.defaultProps = {
  rowID: -1,
  renderRow: undefined
};

export default NativeListviewItem;
