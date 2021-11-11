import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import styles from './../assets/ImageGrid.module.css'
import Lightbox from 'react-image-lightbox'
import Modal from './lightModal'

const Gridview = (props) => {
  const { images } = props
  const showImags = [...images]
  const [modal, setModal] = React.useState(false)
  const [index, setIndex] = React.useState('0')
  const [url, setUrl] = React.useState('')
  const len = showImags.length

  function onClose() {
    setModal(false)
  }

  function openModal(index) {
    setModal(true)
    setIndex(index)
    setUrl(images[index])
  }
  if (len == 1) {
    return (
      <div className={styles.imgGrid} style={{ '--num-cols': 1 }}>
        <div
          onClick={() => openModal(0)}
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
        {modal && (
          <Modal onClose={() => onClose()} index={index} images={images} />
        )}
      </div>
    )
  }

  if (len == 2) {
    return (
      <div className={styles.imgGrid} style={{ '--num-cols': 2 }}>
        <div
          onClick={() => openModal(0)}
          className={`${styles.imgGridcol2} ${styles.imgGridrow2}`}
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>

        <div
          onClick={() => openModal(1)}
          className={`${styles.imgGridcol2} ${styles.imgGridrow2}`}
          style={{ backgroundImage: `url(${images[1]})` }}
        ></div>
        {modal && (
          <Modal onClose={() => onClose()} index={index} images={images} />
        )}
      </div>
    )
  }

  if (len == 3) {
    return (
      <div className={styles.imgGrid}>
        <div
          onClick={() => openModal(0)}
          className={`${styles.imgGridcol2} ${styles.imgGridrow2}`}
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>

        <div
          onClick={() => openModal(1)}
          style={{ backgroundImage: `url(${images[1]})` }}
        ></div>

        <div
          onClick={() => openModal(2)}
          style={{ backgroundImage: `url(${images[2]})` }}
        >
          {/* <div className={`${styles.cover}`}>
            <div
              key='count-sub'
              className={`${styles.coverText}`}
              style={{ fontSize: '200%' }}
            >
              <p>+3</p>
            </div>
          </div> */}
        </div>
        {modal && (
          <Modal onClose={() => onClose()} index={index} images={images} />
        )}
      </div>
    )
  }

  if (len == 4) {
    return (
      <div className={styles.imgGrid} style={{ '--num-cols': 2 }}>
        <div
          onClick={() => openModal(0)}
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>

        <div
          onClick={() => openModal(1)}
          style={{ backgroundImage: `url(${images[1]})` }}
        ></div>

        <div
          onClick={() => openModal(2)}
          style={{ backgroundImage: `url(${images[2]})` }}
        ></div>
        <div
          onClick={() => openModal(3)}
          style={{ backgroundImage: `url(${images[3]})` }}
        >
          {/* <div className={`${styles.cover}`}>
            <div
              key='count-sub'
              className={`${styles.coverText}`}
              style={{ fontSize: '200%' }}
            >
              <p>+3</p>
            </div>
          </div> */}
        </div>
        {modal && (
          <Modal onClose={() => onClose()} index={index} images={images} />
        )}
      </div>
    )
  }

  if (len > 4) {
    return (
      <div className={styles.imgGrid}>
        <div
          onClick={() => openModal(0)}
          className={`${styles.imgGridcol2} ${styles.imgGridrow2}`}
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
        <div
          onClick={() => openModal(1)}
          style={{ backgroundImage: `url(${images[1]})` }}
        ></div>
        <div
          onClick={() => openModal(2)}
          style={{ backgroundImage: `url(${images[2]})` }}
        >
          <div className={`${styles.cover}`}>
            <div
              key='count-sub'
              className={`${styles.coverText}`}
              style={{ fontSize: '200%' }}
            >
              <p>+3</p>
            </div>
          </div>
        </div>
        {modal && (
          <Modal onClose={() => onClose()} index={index} images={images} />
        )}
      </div>
    )
  }
  // return (
  //   <div className={styles.imgGrid}>
  //     <div
  //       className={`${styles.imgGridcol2} ${styles.imgGridrow2}`}
  //       style={{ backgroundImage: `url(${images[0]})` }}
  //     ></div>

  //     <div style={{ backgroundImage: `url(${images[0]})` }}></div>

  //     <div style={{ backgroundImage: `url(${images[0]})` }}>
  //       <div className={`${styles.cover}`}>
  //         <div
  //           key='count-sub'
  //           className={`${styles.coverText}`}
  //           style={{ fontSize: '200%' }}
  //         >
  //           <p>+3</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Gridview

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 4,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
]
