import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import productsOperations from "../../../redux/products/products-operations";
import { getPickedDate } from "../../../redux/products/products-selectors";
import productsApi from "../../../shared/api/products";

import customStyles from "./selectStyles";
import sprite from "../../../images/icons/symbol-defs.svg";
import styles from "./addProductForm.module.scss";

const AddProductForm = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  
  const dispatch = useDispatch();
  const date = useSelector(getPickedDate);

  const handleChange = (inputValue) => {    
   setSelectedOption(inputValue);
  };

  useEffect(() => {    
    if (searchQuerry) {
        productsApi.searchProducts(searchQuerry).then(( {data} ) =>{            
             return data.map((product) => ({ value: product._id, label: product?.title?.ua??"Продукт без названия" }))
            })
            .then((data) => setOptions(data))
    }
  }, [searchQuerry]);

  const postNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      productId: selectedOption._id,
      weight,
      date,
    };
    console.log(newProduct)
    dispatch(productsOperations.addPoduct(newProduct));
    setSearchQuerry("");
    setWeight("");
    setSelectedOption("");
    setOptions([]);
  };

  
  const handleNumberValue = ({ target }) => {
    const regexp = /^[0-9\b]+$/;
    const { value } = target;

    if (value === "" || regexp.test(value)) {
      setWeight(value);
    }
  };
    
  return (
    <div className={styles.wrapper}>
      <form onSubmit={postNewProduct} className={styles.form}>
        <Select
          required
          value={selectedOption}
          onChange={handleChange}
          options={options}
          inputValue={searchQuerry}
          onInputChange={debounce(setSearchQuerry,250)}
          styles={customStyles}
          placeholder="Введите название продукта"
        />        
        <input
          required
          className={styles.weight}
          name="weight"
          value={weight}
          min="1"
          autoComplete="off"
          onChange={handleNumberValue}
          type="input"
          placeholder="Граммы"
        />
        <button className={styles.button} type="submit">
          <svg className={styles.svg}>
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
