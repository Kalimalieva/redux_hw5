import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Contact(props) {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Contact Page</Card.Header>
                <Card.Body>
                    <Card.Title>Special Contact Page</Card.Title>
                    <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium atque, aut culpa doloremque enim error excepturi expedita
                        id ipsum laboriosam maiores nam nobis qui, quidem quisquam repellat
                        temporibus unde velit.
                    </Card.Text>
                    <Button variant="primary">Go back</Button>
                </Card.Body>
                <Card.Footer className="text-muted">1 days ago</Card.Footer>
            </Card>
        </div>
    );
}

export default Contact;