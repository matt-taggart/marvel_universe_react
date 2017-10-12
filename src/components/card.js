import React from 'react';

const Card = () => (
  <div className="column is-half">
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small" style={{ marginRight: '5px' }}>
                  <i className="fa fa-bookmark" />
                </span>
                <span className="is-small">Save</span>
              </a>
              <a className="level-item">
                <span className="icon is-small" style={{ marginRight: '5px' }}>
                  <i className="fa fa-info-circle" />
                </span>
                <span className="is-small">Details</span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
);

export default Card;
