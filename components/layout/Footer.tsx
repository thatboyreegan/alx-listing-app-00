import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='h-[351px] bg-[#222222] text-white'>
        <div className='bg-[#34967C] w-full h-[29px]'></div>
        <div className='grid grid-cols-2 gap-4 w-11/12 align-middle border-b border-white py-3'>
            <article className='space-y-2'>
                <figure>
                    <img src="/assets/footerLogo.svg" alt="Footer Logo" />
                </figure>
                <p>ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
            </article>
            <article className='flex justify-between'>
                <section>
                    <h4>Explore</h4>
                    <ul>
                        <li>Apartments in Dubai</li>
                        <li>Hotels in New York</li>
                        <li>Villa in Spain</li>
                        <li>Mansion in Indonesia</li>
                    </ul>
                </section>
                <section>
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Customers</li>
                        <li>Brand</li>
                    </ul>
                </section>
                <section>
                    <h4>Help</h4>
                    <ul>
                        <li>Support</li>
                        <li>Cancel booking</li>
                        <li>Refunds Process</li>
                    </ul>
                </section>
            </article>
        </div>
        <div></div>
      
    </footer>
  );
}

export default Footer;
