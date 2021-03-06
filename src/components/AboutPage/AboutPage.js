import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container } from 'reactstrap';
import ImageGallery from 'react-image-gallery';
import './AboutPage.scss';
import { Image } from 'react-bootstrap';


const AboutPage = () => {
  const gallery = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F1.jpg?alt=media&token=87310c66-d838-457c-b3b1-6c3346d8692f',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F1.jpg?alt=media&token=87310c66-d838-457c-b3b1-6c3346d8692f',
      startIndex: 0

    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F2.jpg?alt=media&token=e823cc52-4039-473d-9361-e8fb33cf52a2',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F2.jpg?alt=media&token=e823cc52-4039-473d-9361-e8fb33cf52a2',
      startIndex: 1


    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F3.jpg?alt=media&token=f54753fa-ffb7-4264-9078-3f2f53ddd9da',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F3.jpg?alt=media&token=f54753fa-ffb7-4264-9078-3f2f53ddd9da',
      startIndex: 2


    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F5.jpg?alt=media&token=76064a6b-15e4-40bc-896d-5dcd7a16a71d',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F5.jpg?alt=media&token=76064a6b-15e4-40bc-896d-5dcd7a16a71d',
      startIndex: 3,


    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F6.jpg?alt=media&token=15359643-a289-42ee-bbe7-4692b0b8fdd7',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F6.jpg?alt=media&token=15359643-a289-42ee-bbe7-4692b0b8fdd7',
      startIndex: 4


    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F4.jpg?alt=media&token=eb0bdfdc-ebf7-449d-9f54-b1c30fe2157f',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F4.jpg?alt=media&token=eb0bdfdc-ebf7-449d-9f54-b1c30fe2157f',
      startIndex: 5


    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F11.jpg?alt=media&token=502828fd-42c5-4211-b3d3-436a14b55a7f',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F11.jpg?alt=media&token=502828fd-42c5-4211-b3d3-436a14b55a7f',
      startIndex: 6

    },


    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F7.jpg?alt=media&token=08edbfdb-0f41-4536-bf8a-67ff4d7bbb0f',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F7.jpg?alt=media&token=08edbfdb-0f41-4536-bf8a-67ff4d7bbb0f',
      startIndex: 7
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F10.jpg?alt=media&token=60637a98-8781-4146-b381-575cb0ee1b67',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F10.jpg?alt=media&token=60637a98-8781-4146-b381-575cb0ee1b67',
      startIndex: 8
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F8.jpg?alt=media&token=cbcb7233-5dd9-45c0-9426-bad61e1e1a80',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F8.jpg?alt=media&token=cbcb7233-5dd9-45c0-9426-bad61e1e1a80',
      startIndex: 9
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F9.jpg?alt=media&token=15104aa2-b132-448d-a12a-a19c49400d6e',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F9.jpg?alt=media&token=15104aa2-b132-448d-a12a-a19c49400d6e',
      startIndex: 10
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F12.jpg?alt=media&token=927c4e62-f843-454d-8f94-bb251de87968',

      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2FWorkGallery%2F12.jpg?alt=media&token=927c4e62-f843-454d-8f94-bb251de87968',
      startIndex: 11
    }
  ];

  const galleryImages = gallery.map((img) =>
    <Col className="mb-4 image-container img-wrap img-gallery" md={3} key={img.startIndex} onClick={() => imageClick(img.startIndex)} >
      <Image src={img.original} alt={img.description} className="img-fluid rounded" />
      <div className="img-description text-center img-fluid mx-auto">
      </div>
    </Col>

  );
  const [modal, setModal] = useState(false);
  const [imageIndex, setImgIndex] = useState();

  const imageClick = (index) => {
    setModal(true);
    setImgIndex(index);
  }


  return (
    <React.Fragment>
      <div className="about-page" id="about">
        <Container className="text-center">
          <Row id="about-section">
            <Col className="mt-5" md={6} id="first">
              <div>
                <h1 className="about-title text-center mb-4" >About KCElectricalContractorLLC</h1>
              </div>
              <div>
                <p className="about-text text-center mb-5" >
                  We are glad to offer you a wide range of residential and commercial electrical services - from changing fixtures, upgrading panels, garden lighting to outdoor outlets and much more. 
                  <br/>
                  <br/>
                  Why should you choose us? We are a reliable, affordable company and our main goal is quality and customer satisfaction.
                  No job is too small for us. 
            </p>
              </div>
            </Col>

            <Col className="mt-5" md={6} id="second">
              <Row className="gallery-row" >
                {galleryImages}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>


      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader>Gallery</ModalHeader>
        <ModalBody>
          <ImageGallery items={gallery} thumbnailPosition='left' startIndex={imageIndex} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )

}


export default AboutPage;