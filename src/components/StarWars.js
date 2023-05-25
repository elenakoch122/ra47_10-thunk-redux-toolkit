import { useDispatch, useSelector } from "react-redux";
import { changeCount, showFacts } from "../slices/facts";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

export default function StarWars() {
  const { count, shownFacts } = useSelector(state => state.facts);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(changeCount(e.target.value));
  };

  useEffect(() => {
    dispatch(showFacts(count));
  }, [count, dispatch]);

  return (
    <div className="starWars">
      <p>
        Показать <input type="number" value={count} onChange={onChangeHandler} min="0" max="5" required /> фактов о Star Wars:
      </p>

      <ul>
        {shownFacts.map(f => <li key={uuidv4()}>{f}</li>)}
      </ul>
    </div>
  );
}