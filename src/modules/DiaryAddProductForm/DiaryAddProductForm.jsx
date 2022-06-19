import React, { useState, useEffect, useCallback } from 'react';
import { useDevice } from '../../hooks/useDevice';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import operations from '../../redux/products/productsOperations';
import isModalOpenSelector from '../../redux/modal/modalSelector';
import modalActions from '../../redux/modal/modalActions';
import getDate from '../../redux/date/dateSelector';

import customStyles from './selectStyles';
import Modal from '../Modal/Modal';
import sprite from '../../icons/symbol-defs.svg';
import styles from './AddProductForm.module.css';

const DiaryAddProductForm = () => {
  const { isTabletAndDesktop, isMobileDevice } = useDevice();

  const [searchQuerry, setSearchQuerry] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };
  const [options, setOptions] = useState([]);

  const modalState = useSelector(isModalOpenSelector);
  useEffect(() => {
    if (debouncedSearchQuerry) {
      axios
        .get(`products/${debouncedSearchQuerry}`)
        .then(({ data }) =>
          data.products.map(product => ({ value: product, label: product })),
        )
        .then(data => setOptions(data));
    }
  }, [debouncedSearchQuerry]);

  const postNewProduct = e => {
    e.preventDefault();
    const newProduct = {
      title: selectedOption.value,
      weight,
      date,
    };
    dispatch(operations.addUserProduct(newProduct));
    setSearchQuerry('');
    setWeight('');
    setSelectedOption('');
  };

  const onCloseModal = () => {
    dispatch(modalActions.modalClose());
  };

  const handleNumberValue = ({ target }) => {
    const regexp = /^[0-9\b]+$/;
    const { value } = target;

    if (value === '' || regexp.test(value)) {
      setWeight(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      {isTabletAndDesktop && (
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
            className={styles.test}
            type="text"
            required
            value={selectedOption}
            onChange={handleChange}
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
              <use href={sprite + '#icon-plus'}></use>
            </svg>
          </button>
        </form>
      )}
      {isMobileDevice && (
        <>
          {modalState && (
            <Modal onClose={onCloseModal}>
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
                  className={styles.test}
                  type="text"
                  required
                  value={selectedOption}
                  onChange={handleChange}
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
                <button className={styles.modalAddButton} type="submit">
                  Добавить
                </button>
              </form>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};



export default  DiaryAddProductForm;

