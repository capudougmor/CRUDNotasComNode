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
        res.redirect('/notes')
    }).catch((err) => {
        res.send('Erro ao criar nota' +err)
    })
}
notesController.renderNotes = async (req, res) => {
    const notes = await Note.find();
    //console.log(notes)
    res.render('notes/all-notes.html', {notes: notes})
 }

notesController.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.render('notes/edit-note.html', {note} )
}

notesController.updateNotes = async (req, res) => {
    const { title, description } = req.body
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    res.redirect('/notes')
}

notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.redirect('/notes')
}


module.exports = notesController;