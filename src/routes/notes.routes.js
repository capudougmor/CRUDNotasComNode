const { Router } = require('express')
const router = Router()

const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNotes, deleteNote } = require('../controllers/notesController')

router.get('/note/add', renderNoteForm)
router.post('/note/add', createNewNote)

router.get('/notes', renderNotes)
router.get('/notes/edit/:id', renderEditForm)
router.put('/notes/edit/:id', updateNotes)
router.delete('/notes/delete/:id', deleteNote)



module.exports = router