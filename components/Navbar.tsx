import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440 px]  mx-auto flex justify-between items-center sm:px-16 px-6 py-2">
            <Link href="/" className="flex justify-center items-center ">
                <Image
                    src="/car-rental-logo.svg"
                    alt="Car Rental Logo"
                    width={158}
                    height={38}
                    className="object-contain"
                />
            </Link>

            <CustomButton
                title="Sign In"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                btnType="button"
            />
        </nav>    
    </header>
  )
}

export default Navbar