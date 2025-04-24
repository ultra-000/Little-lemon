import { useRef, useEffect } from "react";

function Announcer ({ message }) {
    const announcerRef = useRef(null);
    useEffect(() => {
        announcerRef.current.textContent = ""; // Reset to ensure announcement.
        announcerRef.current.textContent = message;
    }); // Don't worry about the absence of the dependency array, it actually should be like this.
    return <div ref={announcerRef} className="sr-only" role="alert" aria-live="assertive">{message}</div>
}

export default Announcer;