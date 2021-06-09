import React, { useState } from 'react';
import Menu from './Menu';
import items from './data';

function App() {
  const [category, setCategory] = useState("breakfast");

  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn" onClick={()=> setCategory("all")}>All</button>
          <button className="filter-btn" onClick={()=> setCategory("breakfast")}>Breakfast</button>
          <button className="filter-btn" onClick={()=> setCategory("lunch")}>Lunch</button>
          <button className="filter-btn" onClick={()=> setCategory("shakes")}>Shakes</button>
        </div>

        <div className='section-center'>
          {category === "all" &&       
        items.map((item)=> {
        return<Menu item={item}/>
        })
        }

        {category === "breakfast" &&       
        items.filter((item)=>item.category === "breakfast").map((item)=> {
        return(<Menu item={item}/>)
        })
        }

        {category === "lunch" &&       
        items.filter((item)=>item.category === "lunch").map((item)=> {
        return(<Menu item={item}/>)
        })
        }

        {category === "shakes" &&       
        items.filter((item)=>item.category === "shakes").map((item)=> {
        return(<Menu item={item}/>)
        })
        }
        </div>

        

      </section>
    </main>
  );
}

export default App;


