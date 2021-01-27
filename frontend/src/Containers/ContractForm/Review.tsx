import React, { useEffect } from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router-dom";

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { createContract } from "../../Store/actions";

export const Review = ({ formData, pdf, navigation }: any) => {
  const { go } = navigation;
  const dispatch = useDispatch();
  let history = useHistory();

  const selectedContract = useSelector((state) => state.contracts.contract);
  const user = useSelector(
    (state) => state.users.user
  );
  useEffect(() => {
    console.log(selectedContract);
    if (selectedContract) history.push('/contract/view/' + selectedContract.uniqueIdentifer);

  }, [selectedContract , history]);

  const {
    name,
    phone,
    email,
    address,
    rentAmount,
  } = formData;
  const handelSubmit = () => {
    dispatch(createContract({ ...formData, pdf, user }))
  }
  return (
    <Container maxWidth='sm'>
      <h3>Review</h3>
      <RenderAccordion summary="contractData" go={go} details={[
        { 'Name': name },
        { 'Phone': phone },
        { 'Email': email },
        { 'Address': address },
        { 'Rent Amount': rentAmount },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '1.5rem' }}
        onClick={handelSubmit}
      >
        Submit
      </Button>

    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (

  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(summary)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)
