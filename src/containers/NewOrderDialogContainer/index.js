import { connect } from 'react-redux';
import { getCustomers } from '../../actions/customerActions';
import NewOrderDialog from '../../components/NewOrderDialog';

const mapDispatchToProps = dispatch => ({
  onGetCustomers: () => dispatch(getCustomers()),
});

const NewOrderDialogContainer = connect(
  null,
  mapDispatchToProps,
)(NewOrderDialog);

export default NewOrderDialogContainer;

