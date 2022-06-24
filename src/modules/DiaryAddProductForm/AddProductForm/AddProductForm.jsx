import { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import productsOperations from "../../../redux/products/products-operations";
import { getPickedDate } from "../../../redux/products/products-selectors";
import productsApi from "../../../shared/api/products";
import { useDevice } from "../../../shared/hooks/useDevice";
import { useDebounce } from "../../../shared/hooks/useDebounce";

import customStyles from "./selectStyles";
import sprite from "../../../images/icons/symbol-defs.svg";
import styles from "./addProductForm.module.scss";

const AddProductForm = ({ closeModal }) => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const date = useSelector(getPickedDate);

  const { isMobileDevice } = useDevice();

  const handleChange = (inputValue) => {
    setSelectedOption(inputValue);
  };

  const debouncedSearchQuerry = useDebounce(searchQuerry, 500);
  useEffect(() => {
    if (debouncedSearchQuerry) {
      productsApi
        .searchProducts(debouncedSearchQuerry)
        .then(({ data }) => {
          return data.map((product) => ({
            value: product._id,
            label: product?.title?.ua ?? "Продукт без названия",
            calories: product.calories,
          }));
        })
        .then((data) => setOptions(data));
    }
  }, [debouncedSearchQuerry]);

  const postNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      productId: selectedOption.value,
      title: selectedOption.label,
      weight,
      date,
      caloriesBasic: selectedOption.calories,
    };

    dispatch(productsOperations.addPoduct(newProduct));
    setSearchQuerry("");
    setWeight("");
    setSelectedOption("");
    setOptions([]);
    if (isMobileDevice) {
      closeModal();
    }
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
          onInputChange={setSearchQuerry}
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
          {isMobileDevice || (
            <svg className={styles.svg}>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
          )}
          {isMobileDevice && <span className={styles.buttonText}>ДОДАТИ</span>}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;

AddProductForm.propTypes = {
  closeModal: PropTypes.func,
};
