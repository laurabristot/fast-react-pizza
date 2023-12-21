/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ itemId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(itemId));
  }

  return (
    <>
      <Button type="small" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
}
