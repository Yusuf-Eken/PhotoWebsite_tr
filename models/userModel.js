import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt"

const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
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
},
    {
        timestamps: true //bu alan sayesinde createdAt ve updateAt oluşturuldu
    })

    //Şifrelerin veritabanlarında görünmesini istemeyiz bundan dolayı şifreleri şifrelemek için bcrypt eklentisini ve metodlarını kullanırız.
userSchema.pre("save", function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash
        next();
    })
})

const User = mongoose.model("User", userSchema);

export default User