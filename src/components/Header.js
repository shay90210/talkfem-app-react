import LogoBrand from '../img/new-logo.png';

const Header = () => {
    return (
        <div className='header' style={{ backgroundColor: 'radial-gradient(circle at 10% 20%, rgb(254, 255, 165) 0%, rgb(255, 232, 182) 90%);' }}>
            <img 
                src={LogoBrand} 
                alt="podcast logo brand" 
                width='300px'
                height='300px'
                className='mt-5 mb-2 logo-img'
            />

            <h1 className='main-header text-center pb-4'>Talk Your FEMSH!T</h1>
        </div>
    )
}

export default Header