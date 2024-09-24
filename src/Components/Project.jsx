import React from 'react';
import project from './Data/projects.json';

const Project = () => {
  return (
    <>
      <div className="container project my-3" id='project'>
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center  ">
          {project.map((data) => {
            return (
              <div className="col-md-4 col-sm-6 col-lg-3 mx-3 my-3  " key={data.key} data-aos="flip-right"
              data-aos-duration="1000">
                <div className="card bg-dark text-white" style={{ width: "18rem", border: "2px solid yellow", boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)' }}>
                  <div className='img d-flex justify-content-center align-items-center p-3'>
                    <img src={data.imageSrc} className="card-img-top" alt={data.title} style={{ height: "200px", width: '250px', border: '2px solid yellow' }} />
                  </div>
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                    <a href="{data.source}" className="btn btn-warning mx-3 " target="_blank" rel="noopener noreferrer"> code</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
