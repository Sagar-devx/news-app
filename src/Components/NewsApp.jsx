import React from "react";
import Card from "./Card";

const NewsApp = () => {
  const [search, setSearch] = React.useState("india");
  const [data, setData] = React.useState([]);

  const API_KEY = "pub_4e6129c445714301bd20805402b632b5";

  const getData = async () => {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${search}`,
    );
    const data = await response.json();
   
    setData(data.results);
  };

  // News fetch on component mount

  React.useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const setCategory = (cat) => {
    setSearch(cat);
    getData();
  };

  return (
    <div>
      <nav>
        <div>
          <h1>FlashFeed News</h1>
        </div>
        <ul>
          <a onClick={() => setCategory("india")}>All News</a>
          <a onClick={() => setCategory("trending")}>Trending</a>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search News" onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Updated with FlashFeed News</p>
      </div>

      <div className="categoryBtn">
        <button onClick={() => setCategory("sports")}>Sports</button>
        <button onClick={() => setCategory("politics")}>Politics</button>
        <button onClick={() => setCategory("entertainment")}>
          Entertainment
        </button>
        <button onClick={() => setCategory("health")}>Health</button>
        <button onClick={() => setCategory("fitness")}>Fitness</button>
      </div>

      <div>
        <Card data={data} />
      </div>
    </div>
  );
};

export default NewsApp;
