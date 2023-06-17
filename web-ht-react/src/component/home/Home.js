import React, {useEffect, useState} from "react";
import FeatureProducts from "./FeatureProducts";
import AllProduct from "./AllProduct";
import News from "./News";
import Banner from "./Banner";
import { Register } from "./Register";
import { Service } from "./Service";

export const Home = () => {
    return (
                <>
                    <Banner/>
                    <Service/>
                    <FeatureProducts/>
                    <AllProduct/>
                    <News/>
                    <Register/>
                </>
            )
};