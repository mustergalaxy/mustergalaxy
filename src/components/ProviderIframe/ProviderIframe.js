import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import { useLocation } from 'react-router-dom';

const ProviderIframe = () => {
    const location = useLocation();
    const { link } = location.state || {link:'https://tlon.network/login'};

  return (
    <div className='ProviderIframe-main container'>
        <div>
            <Sidebar/>
        </div>
        <div>
        <iframe
        src={link}
        style={{ width: '100%', maxWidth: '81vw', height: '80vh', border: 'none', paddingLeft:'290px' }}
        allowFullScreen
        title='urbit id'
      ></iframe>
        </div>
    </div>
  )
}

export default ProviderIframe