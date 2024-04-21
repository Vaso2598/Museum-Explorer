import React from "react";

const Btn_secondary = ({children}) => {
	return (
		<button className="w-32 box-content border-2 border-swamp-700 bg-neutral-50 font-semibold text-swamp-700 py-2 px-6 hover:border-swamp-600 hover:text-swamp-600 hover:underline decoration-2">
			{children}
		</button>
	);
};

export default Btn_secondary;
