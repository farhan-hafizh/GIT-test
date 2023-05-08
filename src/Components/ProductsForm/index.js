import { Autocomplete, TextField } from "@mui/material";

import styles from "./style.module.scss";

const products = [
    {
        value: 1,
        label: "Morning Dew Milk"
    },
    {
        value: 2,
        label: "Le Minerale 600ml"
    },
    {
        value: 3,
        label: "Greendfields Full Cream Milk 1L"
    }
];

const productUnits = [
    {
        value: 1,
        label: "Karton"
    },
    {
        value: 2,
        label: "Pak"
    },
    {
        value: 3,
        label: "Pcs"
    }
]

const ProductsForm = ({index, product, cart, setCart}) => {

    // const {quantity, price, label} = product;

    return (
        <div>
            <div className={styles.productField}>
                <div>
                    <label>Product</label>
                    <Autocomplete
                        className={styles.inputField}
                        id="products"
                        // value={label}
                        onChange={(event, newValue) => {
                            if (index > 0) {
                                setCart([...cart, newValue]);
                            } else {
                                setCart(newValue);
                            }
                        }}
                        options={products}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Product Name" />}
                    />
                </div>
                <div>
                    <label>Unit</label>
                    <Autocomplete
                        className={styles.inputField}
                        id="products"
                        onChange={(event, newValue) => {
                            if (index > 0) {
                                setCart([...cart, newValue]);
                            } else {
                                setCart(newValue);
                            }
                        }}
                        options={productUnits}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Product Unit" />}
                    />
                </div>
            </div>
            <div className={styles.productField}>
                <div>
                    <div>
                        <label>Quantity</label>
                        <TextField className={styles.inputField} name="quantity" label="Notes"/>
                    </div>
                    <div>
                        <label>Price</label>
                        <TextField className={styles.inputField} name="quantity" label="Notes"/>
                    </div>
                </div>
                <div>
                    <label>Total Price</label>
                    <TextField className={styles.inputField} disabled name="totalPrice" label="Total Price"/>
                </div>
            </div>
        </div>
    );
};

export default ProductsForm;