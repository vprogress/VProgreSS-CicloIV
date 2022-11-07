import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarDataAdmin, SidebarDataUser } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  let SidebarData = [];
  /*
  aca va el codigo cuando haya autentica para 
  cargar el menu de usuario o de administrador
  */
  SidebarData = SidebarDataAdmin;
  console.log(SidebarData);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                item.child.length ? (
                  <li className={item.cName} key={"li" + index} >
                    <a
                      className="nav-link collapsed"
                      data-bs-target={"#menu" + index}
                      data-bs-toggle="collapse"
                      href="/#"
                    >
                      <i className={item.cName}></i>
                      {item.icon}
                      <span>{item.title}</span>
                      <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                      id={"menu" + index}
                      className="nav-content collapse "
                      data-bs-parent="#sidebar-nav"
                    >
                      {item.child.map((subMenu, otroIndice) => (
                        <li key={"sub" + otroIndice}>
                          <Link to={subMenu.path}>
                            <i className={subMenu.cName}></i>
                            <span>{subMenu.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>
                      {item.title}
                    </span>
                  </Link>
                </li>
                
                )
              )}
      
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;