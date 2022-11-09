import React from 'react';

const Links = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
              24/7 Service
            </>
          ),
          href: "#",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              Consultaion
            </>
          ),
          href: "#",
        },
        {
          id: 3,
          child: (
            <>
              Mail us
            </>
          ),
          href: "#",
        },
        {
          id: 4,
          child: (
            <>
              Contact  US 
            </>
          ),
          href: "#",
          
        },
      ];
    
      return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#BCCEF8]" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full font-bold text-black"

                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default Links;
