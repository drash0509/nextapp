// components/VerticalNavbar.tsx
import Link from 'next/link';
import React from 'react';

const VerticalNavbar: React.FC = () => {
  return (
    <nav className="bg-navblue px-2 pr-8   md:h-full">
        
      <div className="flex flex-col items-center  justify-start h-full">
        <div>

                
        </div>
    
        <Link href="/Pages/Dashboard" className="text-navlink active:text-activelink active:bg-darkblue w-full p-3 font-bold flex flex-row mb-4">
        <img src="/images/navicons/dashboard.png" alt="Your Image" className='h-6 w-6 mr-5'  />

<p>
DASHBOARDn
</p>        </Link>
        <Link href="/Pages/ChatBuzz" className="text-navlink active:text-activelink active:bg-darkblue w-full p-3 font-bold mb-4">
CHATBUZZ        </Link>
        <Link href="/Pages/Team" className="text-navlink active:text-activelink active:bg-darkblue w-full p-3 font-bold mb-4">
TEAM        </Link>
        <Link href="/Pages/Projects" className="text-navlink active:text-activelink active:bg-darkblue w-full p-3 font-bold mb-4">
PROJECTS        </Link>
        <Link href="/Pages/Setting" className="text-navlink active:text-activelink active:bg-darkblue w-full p-3 font-bold mb-4">
SETTINGS
        </Link>
        
      </div>
    </nav>
  );
};

export default VerticalNavbar;
