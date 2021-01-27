import React, { useState } from "react";
import { useForm, useStep  } from "react-hooks-helper";
import ContractData from "./ContractData";
import Pdf from "./Pdf";
import { Review } from "./Review";
const defaultData = {
  name : '',
  phone : '',
  email : '',
  address : '',
  rentAmount : '',
};

const steps : any = [
  { id: "contractData" },
  { id: "pdf" },
  { id: "review" },
  { id: "submit" },
];

const ContactForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const [pdf , setPdf] = useState(null);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });


  const props = { formData, setForm, navigation , setPdf , pdf };

  switch ((step as any).id) {
    case "contractData":
      return <ContractData {...props} />;
    case "pdf":
      return <Pdf {...props} />;
    case "review":
      return <Review {...props} />;
  }
  return (<div></div>)

};

export default ContactForm;