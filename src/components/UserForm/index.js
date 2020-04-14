import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function UserForm() {
    return (
        <>
            <Form>
                <Form.Group controlId="SoapRange">
                    <Form.Label>Amount of soap per handwash:</Form.Label>
                    <Form.Control type="range" min="0" max="1" step="0.1" custom />
                </Form.Group>
                <Form.Group controlId="NumOfPeople">
                    <Form.Label>How many people use soap in your home?</Form.Label>
                    <Form.Control as="textarea" rows="1" />
                </Form.Group>
                <Form.Group controlId="WashPerDay">
                    <Form.Label>On average, how many times are all household members washing their hands?</Form.Label>
                    <Form.Control as="textarea" rows="1" />
                </Form.Group>
                <Form.Group controlId="SoapOnHand">
                    <Form.Label>Approximately how much soap do you have in your home (in oz)?</Form.Label>
                    <Form.Control as="textarea" rows="1" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div>
                Your Soap will Last you ## days.
            </div>

        </>
    )
}
export default UserForm;