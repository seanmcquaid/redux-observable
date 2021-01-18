import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAction } from '../../store/user/actions';
import { userInfoSelector } from '../../store/user/selectors';

const HttpExample = () => {
  const [state, setState] = useState({
    username: '',
  });
  const { username } = state;
  const userInfo = useSelector(userInfoSelector);
  const dispatch = useDispatch();
  console.log(userInfo);

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const getUserInfoButtonOnClick = useCallback(() => {
    dispatch(fetchUserAction(username));
  }, [dispatch, username]);

  return (
    <div>
      <h1>Http Example</h1>
      <input type='text' onChange={onChange} name='username' value={username} />
      <button onClick={getUserInfoButtonOnClick}>Get User Info</button>
    </div>
  );
};

export default HttpExample;
