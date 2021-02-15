import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImageGallery from 'react-image-gallery';
import './AboutPage.scss';


const AboutPage = () => {
  const gallery = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F1.jpg?alt=media&token=87310c66-d838-457c-b3b1-6c3346d8692f',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F1.jpg?alt=media&token=87310c66-d838-457c-b3b1-6c3346d8692f',
      startIndex: 0,
      description: 'We have to remember to be there for each other in these tough times'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F2.jpg?alt=media&token=e823cc52-4039-473d-9361-e8fb33cf52a2',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F2.jpg?alt=media&token=e823cc52-4039-473d-9361-e8fb33cf52a2',
      startIndex: 1,
      description: 'We are survivors, healers, lovers, a soul, a friend'

    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F3.jpg?alt=media&token=f54753fa-ffb7-4264-9078-3f2f53ddd9da',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F3.jpg?alt=media&token=f54753fa-ffb7-4264-9078-3f2f53ddd9da',
      startIndex: 2,
      description: 'The way the world is now and black culture is everywhere, it’s really nice to always be in the conversation'

    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F5.jpg?alt=media&token=76064a6b-15e4-40bc-896d-5dcd7a16a71d',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F5.jpg?alt=media&token=76064a6b-15e4-40bc-896d-5dcd7a16a71d',
      startIndex: 3,
      description: 'It’s just accepting them for their whole self, their perfections and imperfections'

    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F6.jpg?alt=media&token=15359643-a289-42ee-bbe7-4692b0b8fdd7',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F6.jpg?alt=media&token=15359643-a289-42ee-bbe7-4692b0b8fdd7',
      startIndex: 4,
      description: 'My Blackness motivates me to rise above that societal illness'

    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F4.jpg?alt=media&token=eb0bdfdc-ebf7-449d-9f54-b1c30fe2157f',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F4.jpg?alt=media&token=eb0bdfdc-ebf7-449d-9f54-b1c30fe2157f',
      startIndex: 5,
      description: 'We have a will to carry on...to be better and do more because you’re born with a handicap'

    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F11.jpg?alt=media&token=502828fd-42c5-4211-b3d3-436a14b55a7f',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F11.jpg?alt=media&token=502828fd-42c5-4211-b3d3-436a14b55a7f',
      startIndex: 6,
      description: `Custom  company logo on cardstock`

    },


    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F7.jpg?alt=media&token=08edbfdb-0f41-4536-bf8a-67ff4d7bbb0f',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F7.jpg?alt=media&token=08edbfdb-0f41-4536-bf8a-67ff4d7bbb0f',
      startIndex: 7,
      description: 'Save the Bees, They make our Honey!'

    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F10.jpg?alt=media&token=60637a98-8781-4146-b381-575cb0ee1b67',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F10.jpg?alt=media&token=60637a98-8781-4146-b381-575cb0ee1b67',
      startIndex: 8,
      description: 'Gaming icon for streamer on Twitch: Mrgds2'

    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F8.jpg?alt=media&token=cbcb7233-5dd9-45c0-9426-bad61e1e1a80',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F8.jpg?alt=media&token=cbcb7233-5dd9-45c0-9426-bad61e1e1a80',
      startIndex: 9,
      description: 'Kalpana Chawla was an American astronaut, engineer, and the first woman of Indian origin to go to space.'

    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F9.jpg?alt=media&token=15104aa2-b132-448d-a12a-a19c49400d6e',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F9.jpg?alt=media&token=15104aa2-b132-448d-a12a-a19c49400d6e',
      startIndex: 10,
      description: 'Just because the media has gotten tired of our fight doesn’t mean we should!'

    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F12.jpg?alt=media&token=927c4e62-f843-454d-8f94-bb251de87968',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F12.jpg?alt=media&token=927c4e62-f843-454d-8f94-bb251de87968',
      startIndex: 11,
      description: 'Just because the media has gotten tired of our fight doesn’t mean we should!'

    },






  ];

  const galleryImages = gallery.map((img) =>
    <div className="col-md-4 mb-4 image-container img-wrap img-gallery" key={img.startIndex} onClick={() => imageClick(img.startIndex)} >
      <img src={img.original} alt={img.description} className="img-fluid rounded" />
      <div className="img-description text-center img-fluid mx-auto">
        <span >{img.description}</span>
      </div>
    </div>

  );
  const [modal, setModal] = useState(false);
  const [imageIndex, setImgIndex] = useState();

  const imageClick = (index) => {
    setModal(true);
    setImgIndex(index);
  }


  return (
    <React.Fragment>

      <div className="about-page mb-5" id="about">
        <div className="row">
          <div className="col-6 mt-5" id="first" >
            <div>
              <h1 className="about-title text-center" >About Me</h1>
            </div>
            <div><p className="about-text text-center" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisq</p>
            </div>
          </div>

          <div className="col-6 mt-5">
            <div className="row gallery-row" id="second"  >
              {galleryImages}
            </div>
          </div>
        </div>

      </div>

      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader>Gallery</ModalHeader>
        <ModalBody>
        <ImageGallery items={gallery}  thumbnailPosition= 'left' startIndex={imageIndex} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )

}


export default AboutPage;