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

  }, [selectedContract, history]);

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
    <Container style={{
      width : '330px',
      textAlign : 'center'
    }} >
      <h3 style={{
        textAlign: 'center',
        color: 'rgb(0, 139, 255)',
      }}  >Review</h3>
      <RenderAccordion summary="Info" go={go} details={[
        { 'Name': name },
        { 'Phone': phone },
        { 'Email': email },
        { 'Address': address },
        { 'Rent Amount': rentAmount },
      ]} />
      <div style={{
        textAlign: 'center',
      }} >
        <Button
          color="primary"
          variant="contained"
          style={{
            backgroundColor: "#008bff",
            color: "#fff",
            marginTop: '10px',
          }}
          onClick={handelSubmit}
        >
          Submit
      </Button>
      </div>

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
