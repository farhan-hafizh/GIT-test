import { useEffect, useState } from 'react';

import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import style from './App.module.scss';
import ResponsiveDialog from '../Components/Dialog';
import CreateOrderForm from '../Components/CreateOrderForm';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import { selectEmployees } from './selector';
import { getEmployeesAction } from './action';

function App({employees}) {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesAction())
  },[])

  const onClickAdd = () => {
    setIsOpen(true);
  };
  
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.App}>
      <ResponsiveDialog isOpen={isOpen} handleClose={handleClose} title={"Create Order"}>
        <CreateOrderForm employees={employees}/>
      </ResponsiveDialog> 
      <header className={style.AppHeader}>
      <Fab color="primary" aria-label="add" onClick={onClickAdd}>
        <AddIcon />
      </Fab>
      </header>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  employees: selectEmployees
})

export default connect(mapStateToProps)(App);