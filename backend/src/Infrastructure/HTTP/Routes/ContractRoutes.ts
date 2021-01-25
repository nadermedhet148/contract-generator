import * as express from "express";
import ContractController from "../Controllers/ContractController";

const router = express.Router();
const contractController = new ContractController();

export default () => {
  /**
    * @typedef Contact
    * @property {string} pdfTemplateUrl;
    * @property {string} name;
    * @property {string} phone;
    * @property {string} uniqueIdentifer;
    * @property {string} email;
    * @property {string} address;
    * @property {number} rentAmount;
    * @property {number} contractId;
    * @property {number} contractId;
   */

  /**
   *  @typedef contractResponse
   *  @property {Contact.model} data
   */


  /**
   * get contract
   * @route Post /contracts/{uniqueIdentifer}
   * @group  contracts - contracts
   * @param {string} uniqueIdentifer.path
   * @returns {contractResponse.model} - 200
   * @returns {Error}  default - Server error
   * @returns {Error}  400 - {error : { type : message }}
   */
  router.get("/", async (req: express.Request, res: express.Response) => {
    const result = await contractController.getContract(req.params.uniqueIdentifer);
    res.status(result.code).json(result.data);
  });



  /**
   * create contract
   * @route Post /contracts
   * @group  contracts - contracts
   * @param {number} uniqueIdentifer.path
   * @param {string} name.body,
   * @param {string} phone.body,
   * @param {string} email.body,
   * @param {string} address.body,
   * @param {number} rentAmount.body,
   * @param {number} userId.headers,
   * @param {File} pdfBuffer.body
   * @returns {contractResponse.model} - 200
   * @returns {Error}  default - Server error
   * @returns {Error}  400 - {error : { type : message }}
   */
  router.post("/", async (req: express.Request, res: express.Response) => {
    const result = await contractController.createContract(
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.address,
        req.body.rentAmount,
        req.body.userId,
        req.body.pdfBuffer
    );
    res.status(result.code).json(result.data);
  });

  return router;
};
