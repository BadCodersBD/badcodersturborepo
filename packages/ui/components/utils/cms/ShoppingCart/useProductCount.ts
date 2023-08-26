import { useState } from "react";
import type { productCountType } from "../../../../types/ShoppingCart";

type UseProductCountReturnType = {
  value: number | null;
  productCount: productCountType;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleOnChange: (val: number) => void;
};

const useProductCount = (
  quantity: number,
  uom: string
): UseProductCountReturnType => {
  const [productCount, setProductCount] = useState<productCountType>({
    single: quantity % parseInt(uom, 10),
    multi: Math.floor(quantity / parseInt(uom, 10)),
  });

  const [value, setValue] = useState<number>(quantity);

  const checkValue = (value: number) => {
    return value ? value : 0;
  };

  const handleOnChange = (val: number) => {
    const parsedUom = parseInt(uom, 10);

    if (!val || isNaN(parsedUom)) {
      setProductCount({
        multi: 0,
        single: 0,
      });
      setValue(null);
      return;
    }

    const cases = Math.floor(val / parsedUom);
    const singles = val % parsedUom;
    setProductCount({ multi: cases, single: singles });
    setValue(val);
  };
  const handleIncrease = () => {
    const newValue = checkValue(value) + 1;
    const parsedUom = parseInt(uom, 10);
    const cases = Math.floor(newValue / parsedUom);
    const singles = newValue % parsedUom;
    setProductCount({ multi: cases, single: singles });
    setValue(newValue);
  };

  const handleDecrease = () => {
    const newValue = checkValue(value) - 1;
    const parsedUom = parseInt(uom, 10);
    const cases = Math.floor(newValue / parsedUom);
    if (newValue >= 0) {
      const singles = newValue % parsedUom;
      setProductCount({ multi: cases, single: singles });
      setValue(newValue);
    }
  };

  return {
    value,
    productCount,
    handleIncrease,
    handleDecrease,
    handleOnChange,
  };
};

export default useProductCount;
