  import React from "react";
  import "./Introduction.css";

  const HeaderText = () =>{
    return(
      <h1 className="headerStyle">Hello React Developer</h1>

    );
  }

  const Introduction = () => {
  

    return (
      <div className="text-center"> 
        <HeaderText/>
        {/* <p className="headerStyle">Hello React Developer</p> */}

        {/* <div className="row">
          {cardCount.map((_, index) => (
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4" key={index}>
              <Card index={index} cardTitle="Card title" cardSubtile="Card subtitle" cardDes="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero
            placeat autem ab reiciendis iusto dolores libero repellendus nam" cardImage={cardImage}/>
            </div>
          ))}
        </div> */}
      </div>
    );
  };

  export default Introduction;
