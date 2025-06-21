import express from "express";
import {
  createNote,
  deleteNote,
  getAllnotes,
  getNodeById,
  updateNote,
} from "../Controllers/noteController.js";
const router = express.Router();

router.get("/", getAllnotes);
router.get("/:id", getNodeById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
