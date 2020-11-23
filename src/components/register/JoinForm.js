import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';

const JoinForm = ({ log, change }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        회원가입
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="userId"
            name="userId"
            label="아이디를 입력하세요"
            fullWidth
            helperText="아이디는 필수 입력입니다."
            value={log.userId}
            onChange={change}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="비밀번호를 입력하세요"
            fullWidth
            type="password"
            onChange={change}
            value={log.password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="passwordConfirm"
            name="passwordConfirm"
            label="비밀번호를 다시 입력하세요"
            fullWidth
            type="password"
            onChange={change}
            value={log.passwordConfirm}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="userName"
            name="username"
            label="이름을 입력하세요"
            fullWidth
            onChange={change}
            value={log.username}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="userPhone"
            name="userphone"
            label="휴대전화 번호를 입력하세요"
            fullWidth
            type="tel"
            placeholder="010-0000-0000"
            onChange={change}
            value={log.userphone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="userEmail"
            name="userEmail"
            label="이메일을 입력하세요"
            fullWidth
            type="email"
            placeholder="example@qqingqqing.com"
            onChange={change}
            value={log.userEmail}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default JoinForm;
