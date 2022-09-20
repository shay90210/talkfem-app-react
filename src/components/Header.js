import LogoBrand from '../img/new-logo.png';

const Header = () => {
    return (
        <div className='header'>
            <Header>
                <img 
                    src={LogoBrand} 
                    alt="podcast logo brand" 
                    width='300px'
                    height='300px'
                    className='mt-5 mb-4 logo-img'
                />

                <h1 className='main-header text-center pb-4'>Talk Your FEMSH!T</h1>
            </Header>
        </div>
    )
}

export default Header