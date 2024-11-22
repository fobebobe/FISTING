import Card from "../models/card.mjs";

export default class CardController {
    static async getAll(req, res) {
        try {
            const cards = await Card.find();
            return res.status(200).json(cards);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async create(req, res) {
        try {
            const { title, description, image, price } = req.body;
            const card = new Card({ title, description, image, price });
            await card.save();
            return res.status(201).json({ msg: 'Card created' });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { title, description, image, price } = req.body;
            await Card.findByIdAndUpdate(id, { title, description, image, price });
            return res.status(200).json({ msg: 'Card updated' });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await Card.findByIdAndDelete(id);
            return res.status(200).json({ msg: 'Card deleted' });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}