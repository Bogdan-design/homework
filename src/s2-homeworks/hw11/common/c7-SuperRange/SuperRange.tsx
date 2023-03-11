import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: '160px',
                height: 4,
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
