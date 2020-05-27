const notesController = {}

notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note.html')
}

notesController.createNewNote = (req, res) => {
    console.log(req.body)
    res.send('Rota criada')
}

notesController.renderNotes = (req, res) => {
    res.send('Todas as notas')
}

notesController.renderEditForm = (req, res) => {
    res.send('Form edit')
}

notesController.updateNotes = (req, res) => {
    res.send('Update notes')
}

notesController.deleteNote = (req, res) => {
    res.send('deleted note')
}


module.exports = notesController