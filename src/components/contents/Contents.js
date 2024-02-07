import React from 'react';
import './Content.css';

function Contents() {
  return (
    <div className='product_container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='contentbgleft'>
            <img src="./assets/banner-img1.jpg" />
          </div>
        </div>
        <div className='col-md-6 px-md-4 mt-4 mt-mb-0'>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='Cardcontainer'>
                <img src="./assets/banner-cat-img1.jpg" />
                <div className='Cardcontainertxt'><h3>Starters</h3></div>

              </div>

            </div>
            <div className='col-md-4 mb-4'>
              <div className='Cardcontainer'>
                <img src="./assets/banner-cat-img2.jpg" />
                <div className='Cardcontainertxt'><h3>Main Course</h3></div>

              </div>

            </div>
            <div className='col-md-4 mb-4'>
              <div className='Cardcontainer'>
                <img src="./assets/banner-cat-img3.jpg" />
                <div className='Cardcontainertxt'><h3>Noodles</h3></div>

              </div>

            </div>
            <div className='col-md-4 mb-4'>
              <div className='Cardcontainer'>
                <img src="./assets/banner-cat-img4.jpg" />
                <div className='Cardcontainertxt'><h3>Vegetable</h3></div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='Cardcontainer'>
                <img src="./assets/banner-cat-img3.jpg" />
                <div className='Cardcontainertxt'>
                  <h3>Noodles</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contents