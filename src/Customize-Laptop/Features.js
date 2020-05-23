import React from 'react';
import slugify from 'slugify';


class Features extends React.Component {
  
  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

render(){
  return (
  <div key={this.props.itemHash} className="feature__item">
    <input
      type="radio"
      id={this.props.itemHash}
      className="feature__option"
      name={slugify(this.props.feature)}
      checked={this.props.itemName === this.props.selected[this.props.feature].name}
      onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
    />
    <label htmlFor={this.props.itemHash} className="feature__label">
      {this.props.itemName} ({this.USCurrencyFormat.format(this.props.cost)})
    </label>
  </div>
  )
}
}

export default Features;

//   render() {
//     console.log(this.props)
//     const features = Object.keys(this.props.features).map((feature, idx) => {
//       const featureHash = feature + '-' + idx;
//       const options = this.props.features[feature].map(item => {
//         const itemHash = slugify(JSON.stringify(item));
//         return (
//           <div key={itemHash} className="feature__item">
//             <input
//               type="radio"
//               id={itemHash}
//               className="feature__option"
//               name={slugify(feature)}
//               checked={item.name === this.state.selected[feature].name}
//               onChange={e => this.updateFeature(feature, item)}
//             />
//             <label htmlFor={itemHash} className="feature__label">
//               {item.name} ({USCurrencyFormat.format(item.cost)})
//             </label>
//           </div>
//         );
//       });

//       return (
//         <fieldset className="feature" key={featureHash}>
//           <legend className="feature__name">
//             <h3>{feature}</h3>
//           </legend>
//           {options}
//         </fieldset>
//       );
//     });
// }
