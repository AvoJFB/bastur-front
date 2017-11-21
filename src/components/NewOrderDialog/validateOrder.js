export default (values) => {
  const errors = {};
  if (!values.customer) {
    errors.customer = 'Required';
  }
  if (!values.weight) {
    errors.weight = 'Required';
  } else if (isNaN(Number(values.weight))) {
    errors.weight = 'Weight must be a number';
  }
  if (!values.price_per_kilo) {
    errors.price_per_kilo = 'Required';
  } else if (isNaN(Number(values.price_per_kilo))) {
    errors.price_per_kilo = 'Price per kilo must be a number';
  }
  if (!values.sold_at) {
    errors.sold_at = 'Required';
  }
  return errors;
};
