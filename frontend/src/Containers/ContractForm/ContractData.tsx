import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



const ContractData = ({ formData, setForm, navigation }) => {
  const {
    name,
    phone,
    email,
    address,
    rentAmount,
  } = formData;

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [rentAmountError, setRentAmountError] = useState('');





  const handelNext = () => {

    let hasError = false;

    if (!name) {
      setNameError('Name is required');
      hasError = true;
    }
    else {
      setNameError('')
    }

    if (!phone) {
      setPhoneError('Phone is required');
      hasError = true;
    }
    else if (isNaN(phone)) {
      hasError = true;
      setPhoneError('Phone should be contained only number');
    } 
    else {
      setPhoneError('')
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      hasError = true;
      setEmailError('Should be a valid email');
    }
    else {
      setEmailError('');
    }

    if (!address) {
      hasError = true;
      setAddressError('Address is required');
    }
    else {
      setAddressError('');
    }

    if (!rentAmount) {
      hasError = true;
      setRentAmountError('Rent Amount is required');
    }
    else if (isNaN(rentAmount)){
      hasError = true;
      setRentAmountError('Rent Amount should be contained only number');
    }
    else{
      setRentAmountError('')
    }

    if (!hasError) {
      navigation.next();
    }
  }

  return (
    <Container maxWidth="xs">
      <h3>Contract Info</h3>
      <TextField
        error={!!nameError}
        helperText={nameError}
        label="Name"
        name="name"
        value={name}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        error={!!phoneError}
        helperText={phoneError}
        label="Phone"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        error={!!emailError}
        helperText={emailError}
        label="Email"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        error={!!addressError}
        helperText={addressError}
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        error={!!rentAmountError}
        helperText={rentAmountError}
        label="Rent Amount"
        name="rentAmount"
        value={rentAmount}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handelNext}
      >
        Next
      </Button>
    </Container>
  );
};

export default ContractData;