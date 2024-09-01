import React from "react";

const CardBox = ({item}) => {

    return (
        <>
            <div className="px-2">
                <div className="dark:bg-slate-900 dark:text-white dark:border-[1px] card bg-base-100 shadow-xl mt-4 hover:scale-105 duration-200">
                    <figure className="pt-3">
                        <img
                            src={item.image}
                            alt={item.title} className="h-[300px] object-contain"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.decription}</p>
                        <div className="card-actions justify-between items-center">
                            <div className="text-xl">${item.price}</div>
                            <div className="cursur-pointer rounded-full border-2 hover:bg-pink-500 hover:border-pink-500 hover:text-white py-2 px-3 duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardBox;