import DatePickers from "../../componenets/FormComponent/DatePicker.tsx";
import Select from "../../componenets/FormComponent/Selects.tsx";
import GrayButton from "../../componenets/FormComponent/GrayButton.tsx";


export default function LicenseMedical(): JSX.Element {
    return (
        <div className={"grid driving-license-search"}>
            <Select lableValue={"Branch Name"}/>
            <DatePickers lableValue={"Date"} />
            <GrayButton value={"search"}/>
        </div>
    );
}