import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: 'black',
  },
}));

export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {/* {[0, 1, 2, 3].map((value) => { */}
      {/* const labelId = `checkbox-list-label-1`; */}

      {/* return ( */}
      <ListItem key={0} role={undefined} dense button onClick={handleToggle(0)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(0) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label-0` }}
          />
        </ListItemIcon>
        <ListItemText id={`checkbox-list-label-1`} primary={`Did you shop smart by creating a list and buying only what you need?`} />
      </ListItem>
      <ListItem key={1} role={undefined} dense button onClick={handleToggle(1)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(1) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label-1` }}
          />
        </ListItemIcon>
        <ListItemText id={`checkbox-list-label-1`} primary={`Did you store your food properly?`} />
      </ListItem>
      <ListItem key={2} role={undefined} dense button onClick={handleToggle(2)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(2) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label-2` }}
          />
        </ListItemIcon>
        <ListItemText id={`checkbox-list-label-1`} primary={`Did you save leftovers and make friends with your freezer?`} />
      </ListItem>
      <ListItem key={3} role={undefined} dense button onClick={handleToggle(3)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(2) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label-3` }}
          />
        </ListItemIcon>
        <ListItemText id={`checkbox-list-label-3`} primary={`Did you throw away food this week?`} />
      </ListItem>
      {/* ); */}
      {/* })} */}
    </List>
  );
}
