import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Add } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { Fab } from "@material-ui/core";

const Pdf = ({ setPdf, navigation, pdf }: any) => {
  const [pdfError, setPdfError] = useState(false);

  const handelChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0].type !== "application/pdf") {
      setPdfError(true)
    } else {
      setPdfError(false)
      setPdf(e.target.files[0])
    }

  }
  return (
    <Container maxWidth="xs">
      <h3>Address</h3>
      <label htmlFor="upload-photo">
        <input
          style={{ display: 'none' }}
          id="upload-photo"
          name="pdf"
          type="file"
          onChange={handelChange}
        />

        <Fab
          color="secondary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
        >
          <Add /> Upload photo
        </Fab>
        <br />
        <br />


      </label>
      <p>{pdfError ? 'you should upload a valid pdf' : ''}</p>
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!(!!pdf)}
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Pdf;