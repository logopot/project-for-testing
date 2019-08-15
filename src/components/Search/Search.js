import React, {Component} from 'react';
import location from '../../img/pin.svg';
import magnifier from '../../img/search.svg';

class SearchForm extends Component {
    handleSubmit (event)  {
      event.preventDefault();
      const output = document.createElement('div');
      const data = [...event.target.elements].reduce((data, element) => {
        if (element.name && element.value) {
          data[element.name] = element.value;
        }
        return data;
      }, {});
      output.textContent = JSON.stringify(data);
      document.body.appendChild(output);
    };
    render() {
      return (
        <form className = "form" action="/search" onSubmit={this.handleSubmit}>
          <div className = "form-input">
            <input className = "form-text-input" type="text" name="q" placeholder = "Location or Project name"/>
            <img src = {location} alt = "location icon" />
          </div>
          <select className = "form-select" name="category">
            <option value="" defaultValue>Type of property</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>
          <button className = "form-button"><img src = {magnifier} alt = "magnifier" />Search</button>
        </form>
      );
    }
  }

export {SearchForm};