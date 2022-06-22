const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#9B9FAA',
      backgroundColor: state.isFocused ? 'Orange' : 'white',
      '&:hover': {
        backgroundColor: state.isFocused ? 'Orange' : 'white',
        color: 'white',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#9B9FAA',
    }),
    control: () => ({
      width: 300,
      "@media only screen and (min-width: 1200px)": {        
        width: 400,
    },
    }),
    dropdownIndicator: () => ({
      display: 'none',
    }),
    container: provided => ({
      ...provided,      
      borderBottom: '1px solid #e0e0e0',
      maxHeight: 70,
      position: 'relative',
    }),
    valueContainer: provided => ({
      ...provided,
      marginBottom: 0,
      padding: 0,
    }),
  
    placeholder: provided => ({
      textAlign: 'left',
      fontWeight: 700,
      lineHeight: 1.2,
    }),
    indicatorsContainer: () => ({
      display: 'none',
    }),
  
    input: provided => ({
      ...provided,
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#9B9FAA',
    }),
  };
  
  export default customStyles;