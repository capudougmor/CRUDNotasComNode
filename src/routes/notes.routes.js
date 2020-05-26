const { Router } = require('express')
const router = Router()

const { renderNoteForm, createNewNote } = require('../controllers/notesController')

router.get('/note/add', renderNoteForm)
router.post('/note/add', createNewNote)

module.exports = router