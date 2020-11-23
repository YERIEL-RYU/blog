import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import Test from '../../components/test';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value: value,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('ddd');
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <Test type="login" loglog={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default LoginContainer;
