const notesController = {}

notesController.renderNoteForm = (req, res) => {
    res.send('Formulario')
}

notesController.createNewNote = (req, res) => {
    res.send('Rota criada')
}


module.exports = notesController