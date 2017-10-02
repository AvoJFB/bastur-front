import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import './styles.css';

const data = [
  {
    id: '1',
    customer: 'Zefir',
    date: '1',
    weight: '2.4',
    price_per_kilo: '330',
    summary: '774',
  },
  {
    id: '2',
    customer: 'Al Capone',
    date: '5',
    weight: '1',
    price_per_kilo: '330',
    summary: '330',
  },
  {
    id: '3',
    customer: 'Mozart',
    date: '8',
    weight: '1.2',
    price_per_kilo: '330',
    summary: '400',
  },
];

const BasturTable = () => (
  <Paper className="paper">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Дата</TableCell>
          <TableCell>Заказчик</TableCell>
          <TableCell numeric>Вес</TableCell>
          <TableCell numeric>Цена за кг</TableCell>
          <TableCell numeric>Сумма</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(order => (
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

export default BasturTable;
