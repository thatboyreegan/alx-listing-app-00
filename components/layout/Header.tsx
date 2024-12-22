import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className='flex justify-center bg-[#34967C] gap-3 p-1 text-sm'>
        <figure >
            <img src="/assets/CaseMinimalistic.svg" alt="A minimalistic case" />
        </figure>
        <p className='p-0.5'>Overseas trip? Get the latest information on travel guides</p>
        <button className='bg-black rounded-full p-1 text-xs'>More Info</button>
        </div>
      <div className='bg-[#EBEBEB] h-[74px] justify-center grid grid-cols-3 text-black items-center'>
        <figure className='p-4'>
            <img src="/assets/logo.svg" alt="" />
        </figure>
        <div className='text-black justify-center border-red-500 border w-fit'>
            <form action="" className='flex divide-x-2'>
                <div className=' border-black pl-2'>
                <label htmlFor="UserLocation">Location</label>
                <input type="text" className="outline-none bg-transparent" name="location" id="UserLocation" placeholder='Search for destination'/>
                </div >
                <div className='border-r-2 border-black pl-2'>
                <label htmlFor="CheckIn">Check in</label>
                <input type="text" id='CheckIn' className="outline-none bg-transparent" name='Checkin' placeholder='Add date'/>
                </div>
                <div className='border-r-2 border-black pl-2'>
                <label htmlFor="CheckOut"> Check out</label>
                <input type="text" id='CheckOut'className="outline-none bg-transparent" placeholder='Add date'/>
                </div>
                <div className='border-r-2 border-black pl-2'>
                    <label htmlFor="People">People</label>
                <input type="text" id='People' className="outline-none bg-transparent" placeholder='Add Guest'/>
                </div>
                
                <button type='submit' className='rounded-full bg-black p-2 text-white'>Search
                </button>
            </form>
        </div>
        <ul className='flex space-x-10 p-1 items-center justify-end'>
            <li className='bg-[#34967C] rounded-full h-6 w-20 text-center'>Sign In</li>
            <li className='bg-[#EBEBEB]  h-6 w-20 text-center border border-black rounded-full'>Sign Up</li>
        </ul>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
