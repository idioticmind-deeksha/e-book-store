import React from "react";
import Layout from "./Layout";
import List from "../../public/list.json";
import CardBox from "./cards";
import { Link } from "react-router-dom";

const Course = () => {
    console.log(List);
    return (
        <>
            <Layout >
                <div className="min-h-screen">
                    <div className="max-w-screen-2xl container mx-auto md:px-20 pe-0 md:pt-28  pt-24 pb-8">
                        <div className="header m-auto max-w-[700px]">
                            <h2 className="text-center text-2xl font-semibold md:text-4xl">
                                Good Author & Wonderful plotin one book altogether now. <span className="text-pink-500">Kudos!</span>
                            </h2>
                            <p className="mt-12 mb-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, facere possimus veritatis esse tempore at delectus nostrum blanditiis recusandae dolorem totam minus debitis nisi laudantium obcaecati eligendi amet consequuntur libero?</p>
                            <div className="text-center"><Link to="/" className="btn btn-secondary">Back</Link></div>                     </div>
                    </div>
                    <div className="max-w-screen-2xl container mx-auto md:px-20 pe-0 mt-0 mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12">
                            {List.map((item) => (
                                <CardBox key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Course;