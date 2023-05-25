import { useDispatch, useSelector } from "react-redux";
import { addToList, setSrc } from "../slices/photo";
import { v4 as uuidv4 } from "uuid";

export default function Photo() {
  const { list, src } = useSelector(state => state.photo);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (src) dispatch(addToList({ id: uuidv4(), src }));

    const url = URL.createObjectURL(file);
    dispatch(setSrc(url));
  };

  return (
    <div className="photo">
      <input type="file" accept="image/*" onChange={onChangeHandler} />

      <div className="photo-container">
        {src ? (<img className="photo_last" src={src} alt="" />) : (<div></div>) }

        <ul>
          {list.map(i => <li key={i.id}><img src={i.src} alt="" /></li>)}
        </ul>
      </div>
    </div>
  );
}