import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FullPizza = (props) => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62a8b302ec36bf40bdac5565.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return "Загрузка ...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={`pizza "${pizza.title}"`} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
