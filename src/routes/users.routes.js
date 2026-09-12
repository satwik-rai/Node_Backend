import { Router } from "express";
import { 
  refreshAccessToken, 
  registerUser, 
  changeCurrentPassword, 
  loginUser, 
  logoutUser 
} from "../controllers/users.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

//secure routes
router.route("/logout").post(authMiddleware,logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(authMiddleware, changeCurrentPassword);

export default router;
