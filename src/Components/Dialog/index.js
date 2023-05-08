import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';

import style from './style.module.scss';

export default function ResponsiveDialog({isOpen, handleClose, title, children}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth
      >
        <div className={style.container}>
          <div className={style.dialogTitle}>
            {title}
          </div>
          {children}
        </div>
      </Dialog>
  );
}