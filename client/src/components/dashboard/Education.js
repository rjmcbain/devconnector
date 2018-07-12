import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
    onDeleteClick(id) {
        this.props.deleteEducation(id);
    }
  render() {
      const education = this.props.education.map(exp => (
          <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>
                        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{exp.to === null ? (' Now') : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
                    </td>
            <td><button onClick= {this.onDeleteClick.bind(this, exp._id)} className="btn btn-danger">Delete</button></td>
          </tr>
      ))
    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Years</th>
                    <th />
                </tr>
                    {education}
            </thead>
        </table>
      </div>
    )
  }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);