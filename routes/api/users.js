const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();

const { users: controller } = require("../../controllers/index");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

router.post("/register", ctrlWrapper(controller.register));
router.post("/login", ctrlWrapper(controller.login));
router.get("/current", auth, ctrlWrapper(controller.getCurrent));
router.post("/logout", auth, ctrlWrapper(controller.logout));
router.patch("/", auth, ctrlWrapper(controller.updateSubscription));

module.exports = router;