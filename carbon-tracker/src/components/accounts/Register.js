import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef } from "react";
import Autocomplete from "react-google-autocomplete";


export default function Register() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [dob, setDob] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);

    const { currentUser, register, setError } = useAuth();

    // useEffect(() => {
    //     if (currentUser) {
    //         const createDB = async () => {
    //             try {
    //                 const token = currentUser && (await currentUser.getIdToken());
    //                 const payloadHeader = {
    //                     method: 'POST',
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                     body: JSON.stringify({
    //                         firstName,
    //                         lastName,
    //                         email,
    //                         dob,
    //                         location,
    //                     }),
    //                 };
    //                 const response = await fetch(
    //                     "http://localhost:3001/api/register",
    //                     payloadHeader
    //                 );
    //                 console.log(await response.text());
    //                 navigate("/");
    //             } catch (e) {
    //                 console.log(e.message);
    //             }
    //         };
    //         createDB();
    //     }
    // }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }
        try {
            setError("");
            setLoading(true);
            const { user } = await register(email, password);
            const token = await user.getIdToken();

            // Make a POST request to your Express backend to handle user registration
            const response = await fetch("http://localhost:3001/api/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    dob,
                    location,
                    // Include the user's token ID in the request body
                })
            });
            // Assuming your Express backend responds with JSON
            const data = await response.text();
            console.log(data); // Log the response from the backend
            navigate("/"); // Navigate to home page after successful registration
        } catch (e) {
            setError("Failed to register");
        }
        setLoading(false);
    }



    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-4 text-3xl text-center tracking-tight font-light dark:text-white">
                        Register your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input id="first_name" name="first_name" type="text" autoComplete="first_name" required className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)} />
                            <input id="last_name" name="last_name" type="text" autoComplete="last_name" required className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)} />
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm" id="dob" name="dob" type="date" autoComplete="dob" required placeholder="Date of Birth" onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div>
                            <Autocomplete className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Your City"
                                apiKey={"AIzaSyDoUa9JWJdVs89Ll6CuqqUjyA1lZVA8_Ng"}
                                onPlaceSelected={(place) => {
                                    setLocation(place.formatted_address);
                                }}
                            />;
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
                            disabled={loading}
                        >
                            Register
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link
                                to="/login"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Already have an account? Login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
