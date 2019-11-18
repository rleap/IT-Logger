import React from 'react';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logsActions';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { id, message, attention, tech, date } = log;

  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: `Log ID #${id} deleted` });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          onClick={() => setCurrent(log)}
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
        >
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id}</span> last updated by{' '}
          <span className='black-text'>{tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
