const express = require("express");
const auth = require("../../middlewares/auth");
const upload = require("../../middlewares/upload")
const router = express.Router();


const { users: controller } = require("../../controllers/index");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

router.post("/register", ctrlWrapper(controller.register));
router.post("/login", ctrlWrapper(controller.login));
router.get("/current", auth, ctrlWrapper(controller.getCurrent));
router.post("/logout", auth, ctrlWrapper(controller.logout));
router.patch("/", auth, ctrlWrapper(controller.updateSubscription));
router.patch("/avatars", auth, upload.single("avatar"),controller.updateAvatar);

router.get("/verify/:verificationToken", ctrlWrapper(controller.verifyEmail));
router.post("/verify", ctrlWrapper(controller.resendVerifyEmail));
// router.get("/verify/:verificationToken", controller.verifyEmail);
// router.post("/verify",controller.resendVerifyEmail);

module.exports = router;