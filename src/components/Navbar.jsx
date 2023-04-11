import  AddIcon  from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';
import { useContext } from 'react';


const Navbar = () => {

  const useAppstate =  useContext(Appstate)

  return (
    <div className=' sticky top-0 z-10 bg-gradient-to-r from-[#009FBD] via-blue-100 to-gray-500  flex justify-between justify-items-center content-center p-2'>

      <Link to={'/'}>
        <span className='text-red-100 text-4xl cursor-pointer'>Labour<span className='text-gray-900'>Mate</span></span>
      </Link>

        <div className='flex justify-between justify-items-center items-center cursor-pointer text-xl'>
            <div className='bg-white flex items-center rounded-xl px-4 py-0.5'>
                <Search className='' /> <input className='m:hide' type="text"  />
            </div>
            <div className='mx-8'>Home</div>
            <div className='mx-8'>about</div>
            <div className='mx-8'>Contact Us</div>
        </div>


        
      {
        useAppstate.login ? 
        <Link to={'/newemployee'}>
        <div className='flex items-center px-3 mr-2 bg-gray-200 rounded-2xl'>
            <AddIcon color='inherit' /> <Button className=''>Add New</Button>
        </div>
      </Link>
      :
        <Link to={'/login'}>
        <div className='flex items-center px-3 mr-2 bg-gray-200 rounded-2xl'>
            <Button className=''>Login</Button>
        </div>
      </Link>
      }
    </div>
  )
}

export default Navbar