import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const Pdf = ({ setPdf, navigation, pdf }: any) => {
  const [pdfError, setPdfError] = useState(false);

  const handelChange = (e) => {
    if (e.target.files[0].type !== "application/pdf") {
      setPdfError(true)
    } else {
      setPdfError(false)
      setPdf(e.target.files[0])
    }
  }
  const handelNext = () => {
    if (!pdf) {
      return setPdfError(true);
    }
    navigation.next();

  }
  return (
    <div>
      <Container maxWidth="xs">
        <h2 style={{
          textAlign: 'center',
          color: 'rgb(0, 139, 255)',
        }} >Pdf Template</h2>
        <label htmlFor="upload-photo">
          <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="pdf"
            type="file"
            onChange={handelChange}
          />
          <div style={{
            height: '90px',
            width: '300px',
            margin: '0 auto',
            background: !pdf ? 'rgb(220 220 220)' : 'rgb(0 219 37)',
            color : !pdf ? 'black' : 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.5s linear ',

          }}>
            {!pdf ? 'Upload or Drop Your Pdf File' : 'Done'}
          </div>


          <br />
          <br />


        </label>
        <p style={{ textAlign: "center", color: "red" }} >{pdfError ? 'You should upload a valid pdf' : ''}</p>

      </Container>
      <div style={{
        marginTop: "1rem", display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button
          color="secondary"
          variant="contained"
          style={{
            marginRight: "1rem",


          }}
          onClick={() => navigation.previous()}
        >
          Back
          </Button>
        <Button
          color="primary"
          style={{
            backgroundColor: "#008bff",
            color: "#fff",

          }}
          variant="contained"
          onClick={handelNext}
        >
          Next
          </Button>
      </div>
    </div>
  );
};

export default Pdf;