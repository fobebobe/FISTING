import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row } from 'react-bootstrap';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Home.css';

const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3008/cards/get')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setCards(response.data);
                } else {
                    console.error('Ошибка: ответ от сервера не является массивом');
                }
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <Container>
            <h1>Главная страница</h1>
            <TransitionGroup>
              <Row>
                {Array.isArray(cards) && cards.length > 0 ? (
                    cards.map(card => (
                        <CSSTransition key={card._id} timeout={500} classNames="card">
                            <Card style={{ width: '18rem', margin: '10px' }}>
                                <Card.Img variant="top" src={card.image} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.description}</Card.Text>
                                    <Card.Text>Цена: {card.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </CSSTransition>
                    ))
                ) : (
                    <CSSTransition timeout={500} classNames="card">
                        <p>Нет доступных карточек.</p>
                    </CSSTransition>
                )}</Row>
            </TransitionGroup>
        </Container>
    );
}

export default Home;