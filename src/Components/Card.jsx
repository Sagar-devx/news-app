import React from 'react'

const Card = ({ data }) => {

  if (!data || data.length === 0) {
    return <h3>No News Available</h3>;
  }
  
  return (
    <div className="cardContainer">
      {data.map((item, index) => {
        return (
          
          <div className="card" key={index}>
           {item.image && <img src={item.image} alt="news"/>} 

            <div className="content">
              <a className="title" onClick={() => window.open(item.url, "_blank")}>{item.title}</a>
              <p>{item.description}</p>
              <button onClick={() => window.open(item.url, "_blank")}>Read More</button>
            </div>

          </div>
        );
      

      })}
    </div>
  );
};

export default Card;
