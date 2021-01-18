import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isPingingSelector } from '../../store/ping/selectors';
import { pingAction } from '../../store/ping/actions';

const Pinging = () => {
  const isPinging = useSelector(isPingingSelector);
  const dispatch = useDispatch();

  const pingButtonOnClick = useCallback(() => {
    dispatch(pingAction());
  }, [dispatch]);

  return (
    <div>
      <h1>Pinging Example</h1>
      <p>Pinging : {isPinging.toString()}</p>
      <button onClick={pingButtonOnClick}>Ping</button>
    </div>
  );
};

export default Pinging;
