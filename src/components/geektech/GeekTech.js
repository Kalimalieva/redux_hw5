
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function GeekTech(props) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>LOREM!</Alert.Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos ex,
                    harum iure molestias nostrum placeat quisquam reiciendis vel voluptas?
                    Accusantium aliquid atque ipsa, ipsam iste iusto perspiciatis praesentium quaerat?
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show text</Button>;
}



export default GeekTech;