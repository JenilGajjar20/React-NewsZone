import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CategorySection extends Component {
  render() {
    let { cat1, cat2, cat3, cat4, cat5, cat6, cat7 } = this.props;
    return (
      <div className="category-section">
        <ul className="cat-items">
          <li className="cat-item">
            <Link to="/science">{cat1}</Link>
          </li>
          <li className="cat-item">
            <Link to="/entertainment">{cat2}</Link>
          </li>
          <li className="cat-item">
            <Link to="/business">{cat3}</Link>
          </li>
          <li className="cat-item">
            <Link to="/technology">{cat4}</Link>
          </li>
          <li className="cat-item">
            <Link to="/sports">{cat5}</Link>
          </li>
          <li className="cat-item">
            <Link to="/">{cat6}</Link>
          </li>
          <li className="cat-item">
            <Link to="/health">{cat7}</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategorySection;
