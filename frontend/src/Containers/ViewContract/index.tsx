import React from "react";
import { useParams } from "react-router";
import { getContract } from "../../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import { APP_URL } from "../../Store/constants/EndPoints";


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
    },
    iframe: {
      backgroundColor: '#777',
      position: 'absolute',
      width: '98%',
      height: '95%',
      margin: '0 auto',
      display: 'block',
      borderStyle: 'none',
    }
  })
);

const ViewContract = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const selectedContract = useSelector((state) => state.contracts.contract);


  if (!selectedContract) {
    dispatch(getContract(id));
  }

  return (
    <div className={classes.container} >

      <iframe
        className={classes.iframe}
        title="pdf"
        src={`${APP_URL}/${selectedContract?.pdfTemplateUrl}`}
      />
    </div>
  );
};

export default ViewContract;
