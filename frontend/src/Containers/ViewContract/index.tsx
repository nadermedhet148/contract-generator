import React from "react";
import { useParams } from "react-router";
import { getContract } from "../../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import { APP_URL } from "../../Store/constants/EndPoints";
import './index.css';

const ViewContract = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedContract = useSelector((state) => state.contracts.contract);


  if (!selectedContract) {
    dispatch(getContract(id));
  }

  return (
    <div>
      <iframe
        title="pdf"
        src={`${APP_URL}/${selectedContract?.pdfTemplateUrl}`}
      />
    </div>
  );
};

export default ViewContract;
