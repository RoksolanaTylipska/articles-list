import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1 className='notFound__title'>404 - Not Found</h1>
      <Link className='notFound__link' to={"/"}>
        <Button content={"Go Home"}/>
      </Link>
     </div>
  );
};

export default NotFound;