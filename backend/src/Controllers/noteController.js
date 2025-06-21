import Note from "../Models/Note.js";

export async function getAllnotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // legújabb -->
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}
export async function getNodeById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Not found" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNodeById controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const upadtedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updateNote) return res.status(404).json({ message: "Not found" });
    res.status(200).json(upadtedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: "Not found" });
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}
