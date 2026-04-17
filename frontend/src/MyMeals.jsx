import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const MyMeals = ({ text, editMyText, deleteMyMeal}) => {
    return (
        <div>
            <p>{text}</p>
            <FaEdit onClick={editMyText}></FaEdit>
            <MdDelete onClick={deleteMyMeal}></MdDelete>
        </div>
    )
}