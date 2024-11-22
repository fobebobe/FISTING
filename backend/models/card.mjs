import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    price: Number
});

const Card = mongoose.model('Card', cardSchema);

export default Card;