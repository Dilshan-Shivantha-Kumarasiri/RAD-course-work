import {Pagination , CustomFlowbiteTheme} from "flowbite-react";
import {useState} from "react";

export default function CustomPagination():JSX.Element {

    const [currentPage, setCurrentPage] = useState(1);

    const onChangePage = (page:number) => {
        setCurrentPage(page);
    }

     const customTheme : CustomFlowbiteTheme['pagination'] = {
         "pages": {
             "base": "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
             "showIcon": "inline-flex",
             "previous": {
                 "base": "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-white dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                 "icon": "h-5 w-5"
             },
             "next": {
                 "base": "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-white dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                 "icon": "h-5 w-5"
             },
             "selector": {
                 "base": "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-white dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                 "active": "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                 "disabled": "opacity-50 cursor-normal"
             }
         }
    }

    return(
        <>
            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination theme={customTheme} color={"dark:bg-red-900"} className={"dark:bg-[white] bg-white"} totalPages={2}  showIcons  currentPage={currentPage} onPageChange={onChangePage}/>
            </div>
        </>
    );
}