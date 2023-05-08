import { ThemeProvider, createTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'

const today = dayjs();

const CustomDatePicker = ({value, setValue, className}) => {
    const datepickerTheme = createTheme({
      overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: "#8bc34a",
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "white",
                color: "#1b5e20",
            },
        },
    },
      });
    

    return (
        <LocalizationProvider  dateAdapter={AdapterDayjs} adapterLocale={"id"}>
            <ThemeProvider theme={datepickerTheme}>
                <DatePicker 
                    defaultValue={today}
                    disablePast
                    className={className}
                    format="DD/MM/YYYY"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    views={['year', 'month', 'day']}
                />
            </ThemeProvider>
        </LocalizationProvider>
    );
};

export default CustomDatePicker;