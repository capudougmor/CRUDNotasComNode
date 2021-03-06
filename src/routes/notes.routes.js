const { Router } = require('express')
const router = Router()

const { renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNotes, 
    deleteNote 
} = require('../controllers/notesController')

const { isAuthenticated } = require('../helpers/auth')

router.get('/notes/add', isAuthenticated, renderNoteForm)
router.post('/notes/new-note', isAuthenticated, createNewNote)

router.get('/notes', isAuthenticated, renderNotes)
router.get('/notes/edit/:id', isAuthenticated, renderEditForm)
router.put('/notes/edit/:id', isAuthenticated, updateNotes)
router.delete('/notes/delete/:id', isAuthenticated, deleteNote)


module.exports = router