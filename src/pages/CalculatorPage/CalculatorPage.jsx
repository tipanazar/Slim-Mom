import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import { getCaloriesAndProductsForUser } from "../../shared/api/products";
import Loader from "../../shared/components/Loader";
import { useEffect, useState } from "react";

const CalculatorPage = () => {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState({
    items: null,
    loading: false,
    error: null
  })
  useEffect(()=>{
    if(!data){
      return;
    }
    const fetchInfo = async () => {
      try {
        setInfo(prevData => ({
          ...prevData,
          loading: true,
        }))
        const result = await getCaloriesAndProductsForUser(data, data.bloodType);
        setInfo({
          items: {...result},
          loading: false,
          error: null
        });
      } catch (err) {
        setInfo({
          items: null,
          loading: false,
          error: err
        })
      }
    };
    fetchInfo();
  }, [data])
  const onChange = (data) => {
    setData(data);
  };
  return (
    <>
    {info.loading && <Loader/>}
    <CalculatorСalorieForm title='Дізнайся про свою добову норму калорій' onChange={onChange}/>;

    </>
    )
};

export default CalculatorPage;
