import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
const RNNativeListviewItemView =
  requireNativeComponent('NativeListviewItemView', null);

class NativeListviewItem extends Component {
  constructor(props) {
    super(props);
    this.onUpdateView = this.onUpdateView.bind(this);
    this.state = {
      innerRowID: this.props.rowId
    };
  }

  componentWillUnmount() {
    this.props.renderRow = undefined;
  }

  onUpdateView(event) {
    const { rowId } = event.nativeEvent;
    if (this.state.innerRowID !== rowId) {
      this.props.rowId = rowId;
      this.setState({ innerRowID: rowId });
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
  rowId: React.PropTypes.number,
  renderRow: React.PropTypes.func.isRequired
};

NativeListviewItem.defaultProps = {
  rowId: -1,
  renderRow: undefined
};

export default NativeListviewItem;
