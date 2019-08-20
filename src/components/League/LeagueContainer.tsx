import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { State } from '../../store';
import { getLeague } from '../../store/actions/LeagueActions';
import { isFetchingSelector, isFetchingResultsSelector, fullLeagueSelector, errorSelector } from '../../store/selectors/league';

import LeagueComponent from './League';

const mapStateToProps = (state: State) => ({
  isFetching: isFetchingSelector(state),
  isFetchingResults: isFetchingResultsSelector(state),
  league: fullLeagueSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getLeague,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LeagueComponent);
