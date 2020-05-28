const notesController = {}
const Note = require('../models/Note')

notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note.html')
}

// const notes = [
//     {
//         name: "Douglas",
//         descreption: "asdgsagsdga"
//     }
// ]

/*notesController.renderNotes = (req, res) => {
    Note.find().sort({date: "desc"}).then((notes) => {
      res.render('notes/all-notes.html', {notes: notes})
    }).catch((err) => {
      req.send('error_msg', 'Houve um erro ao mostrar notas!')
    })
  }*/

notesController.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title, description})
    await newNote.save().then(() => {
        res.send('Nota criada')
    }).catch((err) => {
        res.send('Erro ao criar nota' +err)
    })
}
notesController.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes.html', {notes: notes})
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


module.exports = notesController;