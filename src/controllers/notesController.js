const notesController = {}
const Note = require('../models/Note')

notesController.renderNoteForm = (req, res) => {
    console.log(req.user)
    res.render('notes/new-note.html')
}

notesController.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title, description})
    newNote.user = req.user.id
    await newNote.save().then(() => {
        req.flash('success_msg', 'Nota adicionada com sucesso!')
        res.redirect('/notes')
    }).catch((err) => {
        res.send('Erro ao criar nota' +err)
    })
}

notesController.renderNotes = async (req, res) => {
    const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'});
    //console.log(notes)
    res.render('notes/all-notes.html', {notes: notes})
 }

notesController.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id)
    if(note.user != req.user.id) {
        req.flash('errors_msg', 'Nota não autorizada!')
        return res.redirect('/notes')
    }
    res.render('notes/edit-note.html', {note} )
}

notesController.updateNotes = async (req, res) => {
    const { title, description } = req.body
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    req.flash('success_msg', 'Nota atualizada com sucesso!')
    res.redirect('/notes')
}

notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.redirect('/notes')
}


module.exports = notesController;