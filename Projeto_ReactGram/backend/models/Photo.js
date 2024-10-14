const mongoose = require("mongoose");
const {Schema} = mongoose;

const photoSchema = new Schema({
    image: String,
    titulo: String,
    likes: Array,
    comments: Array,
    userId: mongoose.ObjectId,
    userName: Strin
},{
    timestamps: true
}
);

const Photo = mongoose.model("Photo", photoSchema);