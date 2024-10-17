import React, { useState } from 'react';
import Modal from './Modal';


function Productbox(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    document.body.classList.toggle('active-modal');
  };

  return (
    <>
      <div className='a-box' onClick={toggleModal}>
        <div className='a-b-img'>
          <img src={props.image} alt='' />
        </div>
        <div className='a-b-text'>
          <h2>{props.title}</h2>
          <button className='productbox-button'>Mas Info...</button>
        </div>
      </div>

      {modalOpen && (
        <Modal
          title={props.title}
          content={props.description}
          allergens={props.allergens}
          onClose={toggleModal}
        />
      )}
    </>
  );
}

export default Productbox;



