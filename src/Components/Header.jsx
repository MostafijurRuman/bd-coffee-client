import Logo from '../../public/logo1.png'
import Bg from '../../public/nav-bg.png'

export default function Header() {
    return (
        <div
            className="flex justify-center items-center py-4"
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <img src={Logo} alt="logo" className="w-16 h-20" />
            <h1 className="rancho text-white text-4xl">BD Coffee</h1>
        </div>
    )
}
