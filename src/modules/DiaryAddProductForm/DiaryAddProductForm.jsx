import { useDevice } from "../../shared/hooks/useDevice";

import AddProductForm from './AddProductForm'

const DiaryAddProductForm = () => {
  const { isTabletAndDesktop} = useDevice();
  
  
  
  

  return (
    <div>
      {isTabletAndDesktop && <AddProductForm/>}      
         
    </div>
  );
};

export default DiaryAddProductForm;
