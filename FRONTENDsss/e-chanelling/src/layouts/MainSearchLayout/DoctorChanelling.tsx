import Select from "../../componenets/FormComponent/Selects.tsx";
import TextInputs from "../../componenets/FormComponent/TextInputs.tsx";
import GrayButton from "../../componenets/FormComponent/GrayButton.tsx";


export default function DoctorChannelling() {
    return (
        <div className={"grid search-input-context"}>
            <Select lableValue={"Select Type"}/>
            <TextInputs lableValue={"Doctors Name"} placeHolder={"search Doctors Name (Max 30 characters)"}/>
            <GrayButton value={"search"}/>
        </div>
    );
}