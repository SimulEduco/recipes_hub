import React from 'react'

export default function Footer() {
  return (
      <div className='bg-dark text-light p-5'>
          <div className='container'>
              <div className='row'>
                  <div className='col-md-3'>
                      <div>
                          <span className='fs-5 fw-bold'>Recipes Hub</span>
                      </div>
                      <div>
                          <i class="fa-brands fa-facebook p-1 m-1 fs-5"></i>
                          <i class="fa-brands fa-instagram p-1 m-1 fs-5"></i>
                          <i class="fa-brands fa-whatsapp p-1 m-1 fs-5"></i>
                          <i class="fa-brands fa-x-twitter p-1 m-1 fs-5"></i>
                      </div>
                  </div>
                  <div className='col-md-3'>
                      <div>
                          <span className='fs-5 fw-bold'>Recipes Based On</span>
                      </div>
                      <div>
                          <div>
                              Diet
                          </div>
                          <div>
                              Nutrients
                          </div>
                          <div>
                              Cuisines
                          </div>
                      </div>
                  </div>
                  <div className='col-md-3'>
                      <div>
                          <span className='fs-5 fw-bold'>Others</span>
                      </div>
                      <div>
                          <div>
                              Analyze Recipes
                          </div>
                          <div>
                              Categories
                          </div>
                      </div>
                  </div>
                  <div className='col-md-3'>
                      <div>
                          <span className='fs-5 fw-bold'>Quick Links</span>
                      </div>
                      <div>
                          <div>
                              Search
                          </div>
                          <div>
                              Profile
                          </div>
                      </div>
                  </div>
              </div>
              <hr/>
              <div className='text-center'>
                  <span className='fs-6 fw-bold'>© 2025 Copyright recipehub.in. All Rights Reserved</span>
              </div>
          </div>
      </div>
  )
}
