import React from 'react'

import Collectibles from '../../components/Collectibles/Collectibles';
import Poaps from '../../components/Poaps/Poaps';
import Social from '../../components/Social/Social';
import Addresses from '../../components/addresses/Addresses';
import LeftComponent from '../../components/leftComponent/LeftComponent';
import Links from '../../components/links/Links';
import Ownership from '../../components/ownership/Ownership';
import Subnames from '../../components/subnames/Subnames';

import './NftComponent.css'

const NftComponent = () => {
  return (
    <div className="Nft-container">
     <div className='leftcontainer'>
    <LeftComponent />
     </div>
   <div className='rightcontainer'>
    <Social/>
   <Collectibles/>
     <Poaps/>
      <Addresses/>
     <Subnames/>
      <Links/>
     <Ownership/>
      </div>
         </div>
  )
}

export default NftComponent