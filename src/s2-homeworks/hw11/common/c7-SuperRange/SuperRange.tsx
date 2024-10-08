import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 150,
                height: 4,
                color: "#00CC22",
                '& .MuiSlider-thumb': {
                    border: "1px solid #00CC22",
                    backgroundColor: "#FFFFFF",

                    '&::before': {
                        width: 6,
                        height:6,
                        display:'inline-block',
                        backgroundColor: "#00CC22",
                        position: 'absolute'
                    }
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
