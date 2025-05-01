import React from 'react';
import categoriesData from '../../data/Categories.json';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/recipes-list/${id}`);
    }

  return (
      <div className='container'>
          <div>
              <span className='fw-bold fs-5'>Categories</span>
          </div>
          <div className='row'>
              {
                  categoriesData.map((category) => {
                      return <div className='col-md-3'>
                          <div className='card shadow mt-3' onClick={() => handleClick(category.id)}>
                                <img src={category.imageUrl} alt={category.name} width="100%" height="200"/>
                                <div className='text-center'>
                                    <span className='fs-5 fw-bold'>{category.name}</span>
                                </div>
                            </div>
                        </div>
                  })
              }
          </div>
    </div>
  )
}
