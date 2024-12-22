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
        <div className='text-black justify-center'>Search Bar</div>
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
