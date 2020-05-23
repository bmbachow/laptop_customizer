import React from 'react';

class Cart extends React.Component{

total = Object.keys(this.props.selected).reduce(
  (acc, curr) => acc + this.props.selected[curr].cost,
  0
);

render(){
  console.log(this.props.selected)
  return(
    <div className="summary__option" key={this.props.featureHash}>
      <div className="summary__option__label">{this.props.feature} </div>
      <div className="summary__option__value">{this.props.name}</div>
      <div className="summary__option__cost">
        {this.props.USCurrencyFormat.format(this.props.cost)}
      </div>
    </div>

  );
}
}

export default Cart;

// return (
//   <div className="App">
//     <header>
//       <h1>ELF Computing | Laptops</h1>
//     </header>
//     <main>
//       <form className="main__form">
//         <h2>Customize your laptop</h2>
//         {features}
//       </form>
//       <section className="main__summary">
//         <h2>Your cart</h2>
//         {summary}
//         <div className="summary__total">
//           <div className="summary__total__label">Total</div>
//           <div className="summary__total__value">
//             {USCurrencyFormat.format(total)}
//           </div>
//         </div>
//       </section>
//     </main>
//   </div>
// );


