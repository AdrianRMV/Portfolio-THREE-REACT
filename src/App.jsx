import styled from 'styled-components';
import { Hero } from './components/Hero';
import { Who } from './components/Who';
import { Work } from './components/Work';
import { Contact } from './components/Contact';

const Container = styled.div`
    height: 100vh;
    margin: 0 auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    color: #fff;
    /* background: url(./img/bg.jpeg); */
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #0f2027,
        #203a43,
        #2c5364
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #0f2027,
        #203a43,
        #2c5364
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* background-color: #000; */
    background-size: cover;
`;

export const App = () => {
    return (
        <Container>
            <Hero />
            <Who />
            <Work />
            <Contact />
        </Container>
    );
};
