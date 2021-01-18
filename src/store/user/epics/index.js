import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { fetchUserSuccessAction } from '../actions';

const fetchUserEpic = (action$, state$) =>
  action$.pipe(
    ofType('FETCH_USER'),
    mergeMap((action) =>
      ajax
        .getJSON(`https://api.github.com/users/${action.payload}`)
        .pipe(map((response) => fetchUserSuccessAction(response)))
    )
  );

export default fetchUserEpic;
