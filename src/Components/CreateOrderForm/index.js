import { useEffect, useState } from "react";

import { Autocomplete, MenuItem, Paper, TextField, createFilterOptions } from "@mui/material";
import CustomDatePicker from "../DatePicker";

import styles from "./style.module.scss";
import ProductsForm from "../ProductsForm";

const initForm = {
   employee: null,
   distributionCenter: null,
   paymentType: null,
   expiredDate: null,
   notes: "",
   products: [],
};
const distributionCenter = [
    {
        value: 1,
        label: "DC Tanggerang"
    },
    {
        value: 2,
        label: "DC Cikarang"
    }
];

const paymentTypes = [
    {
        value: 1,
        label: "Cash H+1"
    },
    {
        value: 2,
        label: "Cash H+3"
    },
    {
        value: 3,
        label: "Cash H+7"
    },
    {
        value: 4,
        label: "Transfer H+1"
    },
    {
        value: 5,
        label: "Transfer H+3"
    },
    {
        value: 6,
        label: "Transfer H+7"
    }
];



const CreateOrderForm = ({employees}) => {

    const [form, setForm] = useState(initForm);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        console.log(form);
    },[form]);

    const onInputChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

    const getDistributionCenter = () => {
        if (form.employee) {
            return distributionCenter;
        }

        return [];
    };

    const displayProducts = () => {
        if (cart.length > 0) {
            return cart.map((index, product) => {
                return (
                    <ProductsForm index={index} product={product} cart={cart} setCart={setCart}/>
                );
            });
        }

        return (
            <ProductsForm cart={cart} setCart={setCart}/>
        );
    };

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.employee_name,
      });

    return(
        <Paper elevation={3} className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.subTitle}>Detail</div>
                <div>
                    <div className={styles.inputForm}>
                        <label>Name</label>
                        <Autocomplete
                            className={styles.inputField}
                            id="name-option"
                            value={form.name}
                            onChange={(event, newValue) => {
                                setForm({...form, employee: newValue });
                            }}
                            options={employees ? employees: []}
                            filterOptions={filterOptions}
                            getOptionLabel={(option) => option.employee_name}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Name" />}
                        />
                    </div>
                    <div className={styles.inputForm}>
                        <label>Distribution Center</label>
                        <Autocomplete
                            className={styles.inputField}
                            value={form.distributionCenter}
                            onChange={(event, newValue) => {
                                setForm({...form, distributionCenter: newValue });
                            }}
                            id="distribution-center-option"
                            options={getDistributionCenter()}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Distribution Center" />}
                        />
                    </div>
                    <div className={styles.paymentTypeContainer}>
                        <div className={styles.inputForm}>
                            <label >Payment Type</label>
                            <TextField className={styles.inputField} id="select" name="paymentType" label="Payment Type" value={form.paymentType != null? form.paymentType: paymentTypes[0].value} onChange={onInputChange} select>
                                {paymentTypes.map(paymentType => {
                                    return (
                                        <MenuItem key={paymentType.value} value={paymentType.value}>
                                            {paymentType.label}
                                        </MenuItem>
                                    );
                                })}                            
                            </TextField>
                        </div>
                        <div className={styles.inputForm}>
                            <label>Expired Date</label>
                            <CustomDatePicker 
                                value={form.expiredDate} 
                                className={styles.inputField}
                                setValue={(newValue) => {
                                    const dateString = newValue.toISOString();
                                    setForm({...form, expiredDate: dateString});
                                }} />
                        </div>
                    </div>
                    <div className={styles.notesInput}>
                        <label>Notes</label>
                        <TextField className={styles.inputField} id="textarea" name="notes" rows={5} label="Notes" value={form.notes} onChange={onInputChange} multiline />
                    </div>
                </div>
            </div>
            <hr/>
            <div className={styles.subContainer}>
                <div className={styles.subTitle}>Products</div>
                <div>
                    {displayProducts()}
                </div>
            </div>
        </Paper>
    );
};

export default CreateOrderForm;