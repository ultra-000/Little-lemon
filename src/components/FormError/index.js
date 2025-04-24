import "./index.css";
import errorIcon from "../../assets/icons/error.svg";

function FormError ({ errorMessage }) {
    return (
        <span className="flex items-center">
            <img src={errorIcon} className="w-4 h-4 mr-2" alt="" aria-hidden="true" />
            {errorMessage}
        </span>
    )
}

export default FormError;