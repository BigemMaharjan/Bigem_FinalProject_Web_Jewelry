import React, { useState, useEffect } from "react";

function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/api/category")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <section>
      {/* Categories */}
      {/* First Category */}

      <h2 className="heading2">Get The Best Jewellery</h2>

      <div className="gallery">
        {category.map((category) => (
          <div className="content" key={category._id}>
            <a href="/productList">
              <img src={category.imageUrl} alt="" />
              <h3>{category.categoryName}</h3>
              <p>{category.categoryDesc}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
