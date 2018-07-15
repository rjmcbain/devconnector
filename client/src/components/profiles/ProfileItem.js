import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
            <div className="col-2">
                <img src={profile.user.avatar} alt="image" className="rounded-circle"/>
            </div>
        </div>
      </div>
    )
  }
}

export default ProfileItem;
