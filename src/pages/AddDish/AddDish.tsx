import { useNavigate } from "react-router";
import DishForm from "../../components/DishForm/DishForm";
import { useState } from "react";
import { axiosApi } from "../../axiosApi";
import type { IDishShort } from "../../types";



export const AddDish = () => {
   
   const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onAddDishClick = async (dishData: IDishShort) => {
    
    setLoading(true);
    try {
      await axiosApi.post('/dishes.json', dishData);
    } finally {
      setLoading(false);
      navigate('/');
    }
  };

    return (
        <div>
          <DishForm onSubmit={onAddDishClick} loading={loading}/>
        </div>
    )
}