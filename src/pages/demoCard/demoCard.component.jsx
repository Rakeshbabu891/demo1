import React from "react";

const DemoCard = ({ users }) => {
  var groupBy = function (arr, key) {
    return arr.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  const newObj = groupBy(users, "customer_name");

  return Object.keys(newObj).map((el) => {
    return (
      <div
        key={el}
        className="card border-success mb-3"
        style={{ width: "18rem" }}
      >
        <div className="card-header bg-transparent border-success">{el}</div>
        {newObj[el].map((value) => {
          return (
            <div
              key={value.order_id}
              className="card"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <p className="card-text">{value.order_id}</p>
                <p className="card-text">{value.customer_email}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  });

  //   for (let key in newObj) {

  //     oldobj = newObj[key].map((value) => {
  //       return (
  //   <div key={value.order_id} className="card" style={{ width: "18rem" }}>
  //     <div className="card-body">
  //       <h5 className="card-title">{key}</h5>

  //       <p className="card-text" key={value.order_id}>
  //         {value.order_id}
  //       </p>
  //     </div>
  //   </div>
  //       );
  //     });
  //   }

  //   return oldobj.map((el) => el);
};

export default DemoCard;
