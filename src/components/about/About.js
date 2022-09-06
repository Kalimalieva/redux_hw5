import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {Button} from 'react-bootstrap'
import {useState} from "react";


function About(props) {
    const [show, setShow] = useState(true);

        return (
            <div>
                <Alert show={show} variant="success">
                    <Alert.Heading>About Lorem!</Alert.Heading>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellat reprehenderit unde.
                        Aliquam animi beatae ex illo molestias nam nobis officia perspiciatis qui quos ratione
                        repellat rerum saepe ut, voluptatem.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-success">
                            Close Lorem!
                        </Button>
                    </div>
                </Alert>

                {!show && <Button onClick={() => setShow(true)}>Show Lorem</Button>}
            </div>


        );

}

export default About;