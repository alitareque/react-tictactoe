import React, { FC }  from 'react';
import Button from '@mui/material/Button'

interface ButtonProps {
    buttonText: string;
};

const ActionButton: FC<ButtonProps> = (props) => {
    return (
        <Button color="primary" variant="contained" >{props.buttonText}</Button>
    );
}
export default ActionButton;