import React, { useState } from 'react';
import Header from '../../header/Header';
import Card from '../..//Items/Card/Card';
import AddItem from '../../Forms/AddItem';
import Modal from '../../Modal/Modal';
import ModalCard from '../Card/ModalCard';

const dump_items = [
  {
    title: 'sleep',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid provident eveniet dolore, reiciendis mollitia.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis assumenda amet exercitationem repellat impedit aut sint modi tempore nisi sunt blanditiis odio, deserunt reprehenderit quas vitae? Eos qui commodi reiciendis iste laborum earum modi voluptates, harum illo sed, numquam exercitationem eligendi voluptatibus sit saepe ipsum obcaecati accusantium quis assumenda voluptate quasi, itaque ullam! Impedit, consectetur. Beatae porro nesciunt inventore blanditiis soluta. Aspernatur, excepturi officiis. Perspiciatis illum asperiores consequatur porro excepturi fuga quos repellendus voluptatum nostrum, nemo eius quidem quae molestiae eaque voluptas? Earum officia quam omnis maxime in ipsam labore sit reprehenderit inventore repellendus ab aperiam tempore alias, suscipit ad vel quos reiciendis deserunt commodi aut cupiditate neque hic nemo. Ab labore cumque sit veniam at nemo deleniti id culpa omnis similique eum, officiis, odio quas excepturi est natus, perspiciatis facere corrupti quis nihil adipisci. Unde, optio. Voluptas possimus quidem excepturi autem, molestias, veritatis hic natus, accusamus reiciendis tempore aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis assumenda amet exercitationem repellat impedit aut sint modi tempore nisi sunt blanditiis odio, deserunt reprehenderit quas vitae? Eos qui commodi reiciendis iste laborum earum modi voluptates, harum illo sed, numquam exercitationem eligendi voluptatibus sit saepe ipsum obcaecati accusantium quis assumenda voluptate quasi, itaque ullam! Impedit, consectetur. Beatae porro nesciunt inventore blanditiis soluta. Aspernatur, excepturi officiis. Perspiciatis illum asperiores consequatur porro excepturi fuga quos repellendus voluptatum nostrum, nemo eius quidem quae molestiae eaque voluptas? Earum officia quam omnis maxime in ipsam labore sit reprehenderit inventore repellendus ab aperiam tempore alias, suscipit ad vel quos reiciendis deserunt commodi aut cupiditate neque hic nemo. Ab labore cumque sit veniam at nemo deleniti id culpa omnis similique eum, officiis, odio quas excepturi est natus, perspiciatis facere corrupti quis nihil adipisci. Unde, optio. Voluptas possimus quidem excepturi autem, molestias, veritatis hic natus, accusamus reiciendis tempore aut. ',
  },
  {
    title: 'eat',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid provident eveniet dolore, reiciendis mollitia.',
  },
  {
    title: 'run',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid provident eveniet dolore, reiciendis mollitia.',
  },
  {
    title: 'repeat',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid provident eveniet dolore, reiciendis mollitia.',
  },
];

let modal;
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const AddItemForm = () => {
    modal = (
      <Modal clicked={closeModal}>
        <AddItem />
      </Modal>
    );
    setShowModal(true);
  };

  const itemModal = (title, description) => {
    modal = (
      <Modal clicked={closeModal}>
        <ModalCard title={title} description={description} />
      </Modal>
    );
    setShowModal(true);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      modal = null;
      setShowModal(false);
    }
  };
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <div className='grid'>
          <Card name='Add' clicked={AddItemForm} />
          {dump_items.map((item, index) => {
            return (
              <Card
                name={item.title}
                clicked={() => itemModal(item.title, item.description)}
                key={index}
              />
            );
          })}
        </div>
        {showModal ? modal : null}
      </div>
    </div>
  );
};

export default Home;
