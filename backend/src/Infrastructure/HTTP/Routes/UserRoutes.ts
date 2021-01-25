import * as express from "express";
import UserController from "../Controllers/UserController";

const router = express.Router();
const userController = new UserController();

export default () => {

  /**
   * @typedef UserResponse
   * @property {User.model} data
   */

  /**
   * @typedef User
   * @property {string} username
   * @property {number} userId
   * @property {Contract[]} id
   */

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
   * @property {number} userId;
   */

  /**
   * get user details
   * @route GET /users/{username}
   * @group  users - users
   * @param {number} username.path
   * @returns {UserResponse.model} - 200
   * @returns {Error}  default - Server error
   * @returns {Error}  400 - {error : { type : message }}
   */
  router.get("/", async (req: express.Request, res: express.Response) => {
    const result = await userController.getUser(req.params.username);
    res.status(result.code).json(result.data);
  });

  return router;
};
