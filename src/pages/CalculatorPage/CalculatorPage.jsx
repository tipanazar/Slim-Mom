import { useDispatch, useSelector } from "react-redux";

import {userOperations} from "../../redux/userAccount/userAccount-operations";
import RightSideBar from "../../modules/RightSideBar";
import Loader from "../../shared/components/Loader";
import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import Container from "../../shared/components/Container";
import { getLoading } from "../../redux/userAccount/userAccount-selectors";

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  const onChange = (data) => {        
    dispatch(userOperations.getCaloriesAndProductsForUser(data));
  };

  return (
    <>
      <Container>
        {loading && <Loader />}
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
