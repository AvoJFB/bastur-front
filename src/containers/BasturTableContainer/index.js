import { connect } from 'react-redux';
import { setOrder, setOrderBy, getOrders } from '../../actions/orderActions';
import BasturTable from '../../components/BasturTable';

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => ({
  onSetOrderBy: orderBy => dispatch(setOrderBy(orderBy)),
  onSetOrder: order => dispatch(setOrder(order)),
  onGetOrders: () => dispatch(getOrders()),
});

const BasturTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasturTable);

export default BasturTableContainer;

