import BrandLogo from '../img/logo.png';

const HomePage = () => {
    return (
        <div>
            <h1 className='main-header'>TALK YOUR FEMSH!T</h1>
            <img 
                src={BrandLogo}
                className='brand-logo'
                alt='the podcast logo'
                width='400px'
                style={{ 
                    display: 'block',
                    margin: 'auto',
                    marginTop: '60px',
                    borderRadius: '50%',
                }}
             />
        </div>
    );
};

export default HomePage;