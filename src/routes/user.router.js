import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.send("Hello from user router");
})

export default router;