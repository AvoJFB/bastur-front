import React from 'react';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Paper,
  withStyles,
} from 'material-ui';

moment.locale('ru');
const columnData = [
  { id: 'sold_at', numeric: false, label: 'Дата' },
  { id: 'customer_name', numeric: false, label: 'Заказчик' },
  { id: 'weight', numeric: true, label: 'Вес (кг)' },
  { id: 'price_per_kilo', numeric: true, label: 'Цена за кг' },
  { id: 'summary', numeric: true, label: 'Сумма' },
];

const styles = {
  paper: {
    margin: '50px 200px',
    overflowX: 'auto',
  },
};

class BasturTable extends React.Component {
  componentWillMount() {
    this.props.onGetOrders();
  }

  handleSort() {
    console.log('Handle sort');
    const getProp = (obj, prop) => {
      if (obj[prop].name) {
        return obj[prop].name;
      }
      return obj[prop];
    };

    const orderBy = this.props.orders.orderBy;

    if (this.props.orders.order === 'desc') {
      this.props.orders.items.sort((a, b) => getProp(a, orderBy) < getProp(b, orderBy));
    } else {
      this.props.orders.items.sort((a, b) => getProp(b, orderBy) < getProp(a, orderBy));
    }
  }

  handleChangeSort(orderBy) {
    if (this.props.orders.orderBy !== orderBy) {
      this.props.onSetOrderBy(orderBy);
    }
    if (this.props.orders.order === 'asc') {
      this.props.onSetOrder('desc');
    } else {
      this.props.onSetOrder('asc');
    }
    this.handleSort();
  }

  render() {
    const classes = this.props.classes;
    let content = 'Please Wait.';
    if (this.props.orders.items) {
      this.handleSort();
      content = (
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columnData.map(column => (
                  <TableCell
                    key={column.id}
                    numeric={column.numeric}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={this.props.orders.orderBy === column.id}
                        direction={this.props.orders.order}
                        onClick={() => this.handleChangeSort(column.id)}
                      >
                        {column.label}
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.orders.items.map(order => (
                <TableRow hover key={order.id}>
                  <TableCell>{moment(order.sold_at).format('LL')}</TableCell>
                  <TableCell>{order.customer_name}</TableCell>
                  <TableCell numeric>{order.weight}</TableCell>
                  <TableCell numeric>{order.price_per_kilo}</TableCell>
                  <TableCell numeric>{order.summary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
    return content;
  }
}

export default withStyles(styles)(BasturTable);
