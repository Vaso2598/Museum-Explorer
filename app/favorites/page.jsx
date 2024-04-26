import React from "react";
import checkToken from "@/lib/checkToken";

const favorites = () => {
	checkToken();
	return <div>favorites</div>;
};

export default favorites;
