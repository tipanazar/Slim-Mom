import { useEffect, useState } from "react";

import RightSideBar from "../../modules/RightSideBar";
import Loader from "../../shared/components/Loader";
import { getCaloriesAndProductsForUser } from "../../shared/api/products";
import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import Container from "../../shared/components/Container";

import styles from "./calculatorPage.module.scss";

const CalculatorPage = () => {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState({
    items: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    if (!data) {
      return;
    }
    const fetchInfo = async () => {
      try {
        setInfo((prevData) => ({
          ...prevData,
          loading: true,
        }));
        const result = await getCaloriesAndProductsForUser(
          data,
          data.bloodType
        );
        setInfo({
          items: { ...result },
          loading: false,
          error: null,
        });
      } catch (err) {
        setInfo({
          items: null,
          loading: false,
          error: err,
        });
      }
    };
    fetchInfo();
  }, [data]);

  const onChange = (data) => {
    setData(data);
  };
  
  return (
    <>
      <Container>
        {info.loading && <Loader />}
        <CalculatorСalorieForm
          title="Дізнайся про свою добову норму калорій"
          onChange={onChange}
        />

        <RightSideBar />
      </Container>
    </>
  );
};

export default CalculatorPage;
