import React from "react";

const Btn_invert = ({children}) => {
	return (
		<button className="w-32 box-content border-2 border-neutral-50 bg-transparent font-semibold text-neutral-50 py-2 px-6 hover:border-neutral-100 hover:text-neutral-100 hover:underline decoration-2">
			{children}
		</button>
	);
};

export default Btn_invert;
