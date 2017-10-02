import React from 'react';
import Tooltip from 'material-ui/Tooltip';
import Table, { TableBody, TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import './styles.css';

const columnData = [
  { id: 'date', numeric: false, label: 'Дата' },
  { id: 'customer', numeric: false, label: 'Заказчик' },
  { id: 'weight', numeric: true, label: 'Вес (кг)' },
  { id: 'price_per_kilo', numeric: true, label: 'Цена за кг' },
  { id: 'summary', numeric: true, label: 'Сумма' },
];

class BasturTable extends React.Component {
  componentWillMount() {
    this.handleSort(this.props.orders.orderBy, this.props.orders.order);
  }

  handleSort(orderBy) {
    if (this.props.orders.orderBy !== orderBy) {
      this.props.onSetOrderBy(orderBy);
    }

    if (this.props.orders.order === 'desc') {
      this.props.onSetOrder('asc');
      this.props.orders.items.sort((a, b) => b[orderBy] < a[orderBy]);
    } else {
      this.props.onSetOrder('desc');
      this.props.orders.items.sort((a, b) => a[orderBy] < b[orderBy]);
    }
  }

  render() {
    return (
      <Paper className="paper">
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
                      onClick={() => this.handleSort(column.id)}
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
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
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
}

export default BasturTable;
