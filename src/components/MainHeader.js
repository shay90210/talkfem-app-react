import LogoBrand from '../img/new-logo.png';

const MainHeader = () => {
    return (
        <div className='header'>
            <img 
                src={LogoBrand} 
                alt="podcast logo brand" 
                width='200px'
                height='200px'
                className='mt-5 mb-4 logo-img'
            />

            <h1 className='main-header text-center pb-4'>Talk Your FEMSH!T</h1>
        </div>
    )
}

export default MainHeader