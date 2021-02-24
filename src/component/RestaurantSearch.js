import { React } from "react";
const RestaurantSearch = ({ searchText }) => {
const onSubmit=(event)=>{
event.preventDefault();
}
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search Your Restaurant"
                        onChange={(e) => searchText(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default RestaurantSearch;
