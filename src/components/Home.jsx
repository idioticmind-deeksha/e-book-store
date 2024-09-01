import React from "react";
import Banner from "./Banner";
import FreeBook from "./FreeBook";
import Layout from "./Layout";

const Home = () => {
    return (
        <>
            <Layout>
                <Banner />
                <FreeBook />
            </Layout>

        </>
    );
}
export default Home;