import React from "react";

const Btn_load = ({children, loadMore, disabled}) => {
	return (
		<button
			className="w-32 box-content border-2 rounded-lg border-swamp-700 bg-swamp-700 font-semibold text-neutral-50 py-2 px-6 hover:border-swamp-600 hover:bg-swamp-600 active:bg-swamp-700"
			onClick={loadMore}
			disabled={disabled}>
			{children}
		</button>
	);
};

export default Btn_load;
