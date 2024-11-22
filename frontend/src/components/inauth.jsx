import React, { useState, useEffect } from 'react';
import { Row,Container, Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';


const inAuth = () => {
    const [cards, setCards] = useState([]);
    const [newCard, setNewCard] = useState({ title: '', description: '', image: '', price: '' });
    const [editCard, setEditCard] = useState(null);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = () => {
        axios.get('http://localhost:3008/cards/get')
            .then(response => setCards(response.data))
            .catch(error => console.log(error));
    };

    const handleCreate = () => {
        axios.post('http://localhost:3008/cards/create', newCard)
            .then(() => {
                fetchCards();
                setNewCard({ title: '', description: '', image: '', price: '' });
            })
            .catch(error => console.log(error));
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3008/cards/${editCard._id}`, editCard)
            .then(() => {
                fetchCards();
                setEditCard(null);
            })
            .catch(error => console.log(error));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3008/cards/${id}`)
            .then(() => fetchCards())
            .catch(error => console.log(error));
    };

    return (
        <Container>
            <h1>Админ панель</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control type="text" value={newCard.title} onChange={e => setNewCard({ ...newCard, title: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control type="text" value={newCard.description} onChange={e => setNewCard({ ...newCard, description: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Изображение</Form.Label>
                    <Form.Control type="text" value={newCard.image} onChange={e => setNewCard({ ...newCard, image: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Цена</Form.Label>
                    <Form.Control type="number" value={newCard.price} onChange={e => setNewCard({ ...newCard, price: e.target.value })} />
                </Form.Group>
                <Button variant="primary" className='mt-2' onClick={handleCreate}>Добавить</Button>
            </Form>
        <Row>
            {cards.map(card => (
                <Card key={card._id} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                        <Card.Text>Цена: {card.price}</Card.Text>
                        <Button className="mb-2"variant="warning" onClick={() => setEditCard(card)}>Редактировать</Button>
                        <Button variant="danger" onClick={() => handleDelete(card._id)}>Удалить</Button>
                    </Card.Body>
                </Card>
            ))}</Row>

            {editCard && (
                <Form>
                    <Form.Group>
                        <Form.Label>Заголовок</Form.Label>
                        <Form.Control type="text" value={editCard.title} onChange={e => setEditCard({ ...editCard, title: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control type="text" value={editCard.description} onChange={e => setEditCard({ ...editCard, description: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Изображение</Form.Label>
                        <Form.Control type="text" value={editCard.image} onChange={e => setEditCard({ ...editCard, image: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Цена</Form.Label>
                        <Form.Control type="number" value={editCard.price} onChange={e => setEditCard({ ...editCard, price: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleUpdate}>Сохранить</Button>
                </Form>
            )}
        </Container>
    );
}

export default inAuth;