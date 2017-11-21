import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import { Field, reduxForm } from 'redux-form';
import validate from './validateOrder';

const styles = {
  minWidth: '400px',
};

class NewOrderDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.props.handleSubmit;
    this.state = {
      open: false,
    };
  }

  onSubmit = (values) => {
    const newOrder = Object.assign({}, values);
    newOrder.sold_at = moment(newOrder.sold_at).format();
    newOrder.weight = Number(newOrder.weight);
    console.log(newOrder);
    this.handleRequestClose();
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      label={label}
      error={touched && !!error}
      helperText={touched && error}
      value={input.value}
      autoComplete="off"
      margin="normal"
      fullWidth
      {...input}
      {...custom}
    />
  )

  renderDateField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      type="date"
      label={label}
      error={touched && error}
      helperText={touched && error}
      value={input.value}
      autoComplete="off"
      margin="normal"
      fullWidth
      {...custom}
    />
  )

  render() {
    return (
      <div>
        <Button color="contrast" onClick={() => this.handleClickOpen()}>Добавить Заказ</Button>
        <Dialog
          ignoreEscapeKeyUp
          open={this.state.open}
          onRequestClose={() => this.handleRequestClose()}
        >
          <DialogTitle>Добавить Заказ</DialogTitle>
          <DialogContent style={styles}>
            <form>
              <div>
                <Field name="customer" label="Заказчик" component={this.renderTextField} />
              </div>
              <div>
                <Field name="weight" label="Вес" component={this.renderTextField} />
              </div>
              <div>
                <Field name="price_per_kilo" label="Цена за кг" component={this.renderTextField} />
              </div>
              <div>
                <Field name="sold_at" label="Дата продажи" component={this.renderDateField} />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleRequestClose()} color="primary">
              Отмена
            </Button>
            <Button type="submit" onClick={this.handleSubmit(this.onSubmit)} color="primary">
              Добавить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default reduxForm({
  form: 'newOrder',
  initialValues: {
    price_per_kilo: 330,
    sold_at: moment().format('YYYY-MM-DD'),
  },
  validate,
})(NewOrderDialog);
