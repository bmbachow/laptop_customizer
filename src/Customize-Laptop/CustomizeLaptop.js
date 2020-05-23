import React from 'react';
import Features from '../Customize-Laptop/Features';
import slugify from 'slugify';

class CustomizeLaptop extends React.Component{
  
     options = this.props.FEATURES[this.props.featureName].map(item => {
           const itemHash = slugify(JSON.stringify(item));
      return(
       <Features 
        itemHash = {itemHash}
        feature = {this.props.featureName}
        itemName = {item.name}
        cost = {item.cost}
        item = {item}
        updateFeature = {this.props.updateFeature}
        selected = {this.props.selected}
       />)
      } 
     )  
     
  render(){
    return (
    <fieldset className="feature" key={this.props.featureHash}>
      <legend className="feature__name">
        <h3>{this.props.featureName}</h3>
      </legend>
      {this.options}
    </fieldset>
  
);
}
}



export default CustomizeLaptop;
 // const selectedOption = this.state.selected[feature];

//   return (
//     <div className="summary__option" key={featureHash}>
//       <div className="summary__option__label">{feature} </div>
//       <div className="summary__option__value">{selectedOption.name}</div>
//       <div className="summary__option__cost">
//         {USCurrencyFormat.format(selectedOption.cost)}
//       </div>
//     </div>
//   );
// });