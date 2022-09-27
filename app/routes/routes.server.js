import { Router } from "express";

import {
  homePage,
  aboutPage,
  servicePage,
  contactPage,
  projectsPage,
} from "../controllers/controllers.server.js";

const router = Router();

router.get("/", homePage);
router.get("/home", homePage);
router.get("/about", aboutPage);
router.get("/services", servicePage);
router.get("/contact", contactPage);
router.get("/projects", projectsPage);

export default router;
