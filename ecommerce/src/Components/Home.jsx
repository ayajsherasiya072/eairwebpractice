import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="container">
        <div className="row mb-4">
          {/* //card 1 */}
          <div className="col-4">
            <div class="card" style={{width:"18rem"}}>
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">product name</h5>
                  <h6>price</h6>
                  <p>quantity</p>
                  <p class="card-text">description</p>
                  <Link to="" class="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
          </div>
          {/* //card 2 */}
          <div className="col-4">
            <div class="card" style={{width:"18rem"}}>
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">product name</h5>
                  <h6>price</h6>
                  <p>quantity</p>
                  <p class="card-text">description</p>
                  <Link to="" class="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
          </div>
          {/* //card 3 */}
          <div className="col-4">
            <div class="card" style={{width:"18rem"}}>
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">product name</h5>
                  <h6>price</h6>
                  <p>quantity</p>
                  <p class="card-text">description</p>
                  <Link to="" class="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* //card 4 */}
          <div className="col-4">
            <div class="card" style={{width:"18rem"}}>
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">product name</h5>
                  <h6>price</h6>
                  <p>quantity</p>
                  <p class="card-text">description</p>
                  <Link to="" class="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
          </div>
          {/* //card 5 */}
          <div className="col-4">
            <div class="card" style={{width:"18rem"}}>
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">product name</h5>
                  <h6>price</h6>
                  <p>quantity</p>
                  <p class="card-text">description</p>
                  <Link to="" class="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
          </div>
          {/* //card 6 */}
          <div className="col-4">
            <div class="card" style={{width:"18rem"}}>
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">product name</h5>
                  <h6>price</h6>
                  <p>quantity</p>
                  <p class="card-text">description</p>
                  <Link to="" class="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
