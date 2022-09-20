import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import { Container } from 'reactstrap';

const HomePage = () => {
    return (
        <div>
            <NavigationBar />
            <Header/>
            <Container>
                <SubHeader />
            </Container>
        </div>
    );
};

export default HomePage;