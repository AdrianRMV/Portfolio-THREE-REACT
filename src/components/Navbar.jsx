import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 66px;
`;

const List = styled.li`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;

    transition: 300ms linear all;
    &:hover {
        transform: scale(1.1);
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    cursor: pointer;
    width: 100px;
    padding: 10px;
    background: rgb(130, 130, 130);
    background: -moz-linear-gradient(
        90deg,
        rgba(130, 130, 130, 1) 0%,
        rgba(84, 84, 84, 1) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(130, 130, 130, 1) 0%,
        rgba(84, 84, 84, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(130, 130, 130, 1) 0%,
        rgba(84, 84, 84, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#828282",endColorstr="#545454",GradientType=1);
    color: #fff;
    border: none;
    border-radius: 5px;
`;

export const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="../img/logo2.png" />
                    <List>
                        <ListItem>
                            <a href="#HeroSection">Home</a>
                        </ListItem>
                        <ListItem>
                            <a href="#StudioSection">Studio</a>
                        </ListItem>
                        <ListItem>
                            <a href="#WorksSection">Works</a>
                        </ListItem>
                        <ListItem>
                            <a href="#ContactSection">Contact</a>
                        </ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="../img/search.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
};
