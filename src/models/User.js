const {Schema, model} = require('mongoose')
const bcriptjs = require('bcryptjs')

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

UserSchema.methods.encrypPassword = async password => {
    const salt = await bcriptjs.genSalt(10)
    return await bcriptjs.hash(password, salt)
}

UserSchema.methods.matchPassword = async password => {
    return await bcriptjs.compare(password, this.password)

}

module.exports = model('User', UserSchema)