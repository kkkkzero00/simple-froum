import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Alert: App.Alert}), (dispatch) => ({}))(UI);