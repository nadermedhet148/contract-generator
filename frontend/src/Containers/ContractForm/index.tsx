import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import ContractData from "./ContractData";
import Pdf from "./Pdf";
import { Review } from "./Review";

import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: '90%',
      position: 'relative',
      width: '90%',
      margin: '25px auto',
      padding: '15px',
      background: '#f2f2f2',
      boxShadow: '4px 4px 20px 2px #00000026',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const defaultData = {
  name: '',
  phone: '',
  email: '',
  address: '',
  rentAmount: '',
};

const steps: any = [
  { id: "Info" },
  { id: "pdf" },
  { id: "review" },
  { id: "submit" },
];

const ContactForm = () => {
  const classes = useStyles();

  const [formData, setForm] = useForm(defaultData);
  const [pdf, setPdf] = useState(null);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });


  const props = { formData, setForm, navigation, setPdf, pdf };

  switch ((step as any).id) {
    case "Info":
      return (
        <div className={classes.container}>
          <ContractData {...props} />
        </div>
      );
    case "pdf":
      return (
        <div className={classes.container}>
          <Pdf {...props} />
        </div>
      );
    case "review":
      return (
        <div className={classes.container}>
          <Review {...props} />
        </div>
      );
  }

  return (<div>

  </div>)

};

export default ContactForm;