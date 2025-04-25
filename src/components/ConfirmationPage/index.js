import { Link } from "react-router-dom";
import checkmark from "../../assets/icons/checkmark.svg";

function ConfirmationPage () {
    return (
        <div className="container mx-auto py-8 px-12 h-full flex flex-col justify-center items-center gap-y-4">
            <img src={checkmark} aria-hidden={true} alt="Checkmark icon" className="w-16 h-16" />
            <h1 className="text-3xl font-bold text-center">Reservation Confirmed!</h1>
            <p className="text-lg text-center">Thank you for choosing Little Lemon. We look forward to serving you!</p>
            <p className="text-lg text-center">If you have any questions, feel free to contact us.</p>
            <Link to="/" className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Back to Home</Link>
        </div>
    );
}

export default ConfirmationPage;