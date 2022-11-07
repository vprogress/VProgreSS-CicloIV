import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const SidebarDataUser = [
  { title: 'Inicio', path: '/', icon: <AiIcons.AiFillHome />, cName: 'nav-text', child: [] },
  { title: 'Productos', path: '/Productos', icon: <FaIcons.FaCartPlus />, cName: 'nav-text', child: [] },
  { title: 'Quienes somos', path: '/team', icon: <IoIcons.IoMdPeople />, cName: 'nav-text', child: [] },
  { title: 'Contactenos', path: '/messages', icon: <FaIcons.FaEnvelopeOpenText />, cName: 'nav-text', child: [] },
  { title: 'Soporte', path: '/support', icon: <IoIcons.IoMdHelpCircle />, cName: 'nav-text', child: [] }
];

const SidebarDataAdmin = [
  { title: 'Inicio', path: '/', icon: <AiIcons.AiFillHome />, cName: 'nav-text', child: [] },
  { title: 'Productos', path: '/Productos', icon: <FaIcons.FaCartPlus />, cName: 'nav-item', child: [
    { title: 'Listar', path: '/listproducts', icon: <FaIcons.FaCartPlus />, cName: 'nav-item'},
    { title: 'Nuevo', path: '/agregar', icon: <FaIcons.FaCartPlus />, cName: 'nav-item'},
    { title: 'Administrar', path: '/listproducts', icon: <FaIcons.FaCartPlus />, cName: 'nav-item'},
  ] },
  { title: 'Ventas', path: '/reports', icon: <IoIcons.IoMdPeople />, cName: 'nav-text', child: [] },
  { title: 'Quienes somos', path: '/team', icon: <IoIcons.IoMdPeople />, cName: 'nav-text', child: [] },
  { title: 'Contactenos', path: '/messages', icon: <FaIcons.FaEnvelopeOpenText />, cName: 'nav-text', child: [] },
  { title: 'Soporte', path: '/support', icon: <IoIcons.IoMdHelpCircle />, cName: 'nav-text', child: [] }
];

export {SidebarDataAdmin, SidebarDataUser};