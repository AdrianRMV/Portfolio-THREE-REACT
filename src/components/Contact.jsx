import styled from 'styled-components';
import Map from './Map';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: #fff;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
`;

export const Contact = () => {

    // TODO: Mejorar el formulario para que se vacien los inputs al ser mandado
    const form = useRef();

    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_oh1urxt',
                'template_youe5lj',
                form.current,
                'TQXPMvZEAzy3ZWBpI'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccess(true);
                },
                (error) => {
                    console.log(error.text);
                    setSuccess(false);
                }
            );
    };

    return (
        <Section>
            <Container>
                <Left>
                    <Form onSubmit={handleSubmit} ref={form}>
                        <Title>Contact me</Title>
                        <Input placeholder="Name" type="text" name="name" />
                        <Input placeholder="Email" type="email" name="email" />
                        <TextArea
                            placeholder="Write your message"
                            rows={10}
                            name="message"
                        />
                        <Button type="submit">Send</Button>
                        {success && 'Se entrego tu mensaje pa'}
                    </Form>
                </Left>

                <Right>
                    <Map />
                </Right>
            </Container>
        </Section>
    );
};
