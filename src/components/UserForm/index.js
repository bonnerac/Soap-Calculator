import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function UserForm() {
    const [soapAmount, setSoapAmount] = useState(0.7);
    const [totalPeople, setTotalPeople] = useState(0);
    const [washTimes, setWashTimes] = useState(0);
    const [soapInHouse, setSoapInHouse] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const totalWashes = (totalPeople * washTimes);
        const totalSoapUsedMl = (totalWashes * soapAmount);
        const totalSoapUsedOz = (totalSoapUsedMl * 0.033814);
        alert(`You use ${totalSoapUsedOz} oz of soap per day`)

    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="SoapRange">
                    <Form.Label>Amount of soap per handwash:</Form.Label>
                    <Form.Control type="range" min="0" max="1" step="0.1" value={soapAmount} onChange={e => setSoapAmount(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="NumOfPeople">
                    <Form.Label>How many people use soap in your home?</Form.Label>
                    <Form.Control as="textarea" rows="1" value={totalPeople} onChange={e => setTotalPeople(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="WashPerDay">
                    <Form.Label>On average, how many times are each person washing their hands each day?</Form.Label>
                    <Form.Control as="textarea" rows="1" value={washTimes} onChange={e => setWashTimes(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="SoapOnHand">
                    <Form.Label>Approximately how much soap do you have in your home (in oz)?</Form.Label>
                    <Form.Control as="textarea" rows="1" value={soapInHouse} onChange={e => setSoapInHouse(e.target.value)} />
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