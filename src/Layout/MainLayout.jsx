import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    return (
        <div>
            <section className="flex justify-between px-10 shadow-lg py-5">
                <h2 className="text-2xl font-bold">Emajhon</h2>
                <nav>
                    <ul className="flex items-center text-xl font-semibold gap-5">
                        <NavLink
                            to="/home"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-300 px-5 rounded-md text-white" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/product"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-300 px-5 rounded-md text-white" : ""
                            }
                        >
                            Product
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-300 px-5 rounded-md text-white" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </nav>
            </section>
            <div className="min-h-screen">
                {
                    navigation.state === 'loading' ? <p>Loading...</p> : <Outlet></Outlet>

                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;