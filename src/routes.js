import express from 'express';
import {
  createNote,
  editNoteById,
  getNotes,
  getNoteById,
  deleteNoteById,
} from './controller.js';

const routes = express.Router();

routes.post('/notes', createNote);
routes.get('/notes', getNotes);
routes.get('/notes/:id', getNoteById);
routes.put('/notes/:id', editNoteById);
routes.delete('/notes/:id', deleteNoteById);

export default routes;