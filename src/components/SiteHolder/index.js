import React from 'react';
import Container from 'react-bootstrap/Container'
import UserForm from '../UserForm'
import './style.css';

function SiteHolder() {
    return (
        <>
            <Container>
                <UserForm />
            </Container>

        </>
    )
}

export default SiteHolder;