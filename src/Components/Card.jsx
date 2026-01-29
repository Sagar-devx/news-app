import React from 'react'

const Card = ({ data }) => {

  if (!data || data.length === 0) {
    return <h3>No News Available</h3>;
  }
  
  return (
    <div className="cardContainer">
      {data.map((item) => {
        return (
          
          <div className="card" key={item.article_id}>
           {item.image_url && <img src={item.image_url} alt="news"/>} 

            <div className="content">
              <a className="title" onClick={() => window.open(item.link, "_blank")}>{item.title}</a>
              <p className='description'>{item.description}</p>
              <button onClick={() => window.open(item.link, "_blank")}>Read More</button>
            </div>

          </div>
        );
      

      })}
    </div>
  );
};

export default Card;
