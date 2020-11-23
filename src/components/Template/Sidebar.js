import React, { useCallback, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import {
  DirectionsCar,
  ExpandLess,
  ExpandMore,
  StarBorder,
  Star,
  Add,
} from '@material-ui/icons';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const onClick = useCallback(() => {
    setOpen(!open);
  }, [open]);
  const [secMenu, setSecMenu] = useState([
    {
      name: '엔진오일',
      link: '/enginoil',
      bookMark: true,
    },
    {
      name: '와이퍼',
      link: '/enginoil',
      bookMark: false,
    },
  ]);
  const onPlus = () => {
    console.log('항목추가');
  };
  const onBookMark = useCallback(
    (name) => {
      console.log(name.menu.name, 'onBookMark');
      setSecMenu(
        secMenu.map((menu) =>
          menu.name === name.menu.name
            ? { ...menu, bookMark: !menu.bookMark }
            : menu,
        ),
      );
    },
    [secMenu],
  );
  // console.log(bookMarks, 'bookMarks');
  return (
    <div className="sidebar">
      <List>
        <Link to="/mycar">
          <ListItem>
            <ListItemIcon>
              <AirportShuttleIcon />
            </ListItemIcon>
            <ListItemText>차량 등록</ListItemText>
          </ListItem>
        </Link>
        <Link to="/oil">
          <ListItem>
            <ListItemIcon>
              <LocalGasStationIcon />
            </ListItemIcon>
            <ListItemText>주유 관리</ListItemText>
          </ListItem>
        </Link>
        <ListItem onClick={onClick}>
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText>차량 정비</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {secMenu.map((menu) => (
              <Link to={menu.link} key={menu.name}>
                <ListItem>
                  <ListItemIcon>
                    <DirectionsCar />
                  </ListItemIcon>
                  <ListItemText>{menu.name}</ListItemText>
                  <ListItemIcon
                    checked={menu.bookMark}
                    onClick={() => onBookMark({ menu })}
                  >
                    {menu.bookMark ? <Star /> : <StarBorder />}
                  </ListItemIcon>
                </ListItem>
              </Link>
            ))}
            <ListItem alignItems="center" onClick={onPlus}>
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText>항목 추가</ListItemText>
            </ListItem>
          </List>
        </Collapse>
        <ListItem>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText>즐겨찾기</ListItemText>
          <List></List>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
