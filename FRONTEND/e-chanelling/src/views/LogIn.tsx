import TextFieldTwo from "../componenets/Input/textField/TextFieldTwo.tsx";
import {useForm , Controller, SubmitHandler} from "react-hook-form";

export default function LogIn(): JSX.Element {

    interface IFormInput {
        loginEmail: string
        loginPassword: string
    }


    const {control,handleSubmit} =useForm<IFormInput>({defaultValues:{loginEmail:"",loginPassword:""}})

    console.log("render")
    const onSubmit: SubmitHandler<any> = (data) => console.log(data)

    // console.log(watch(["loginEmail","loginPassword"]))

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 main-font">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto"
                         src="https://usebootstrap.com/preview-no-frame/mediplus-lite/img/logo.png" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign
                            in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST " onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="loginPassword"
                            control={control}
                            render={({ field }) => {
                                console.log(field)
                              return  <TextFieldTwo id={"email"} type={"email"} autoComplete={"email"} required={true} islablehave={"true"} lablename={"User email"}  {...field} />}

                        }/>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-[#1A76D5] hover:text-indigo-500">Forgot
                                        password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Controller
                                    name="loginEmail"
                                    control={control}
                                    render={({ field }) => <TextFieldTwo   {...field} />}/>
                            </div>
                        </div>

                        {/*indigo 600*/}
                        <div className={"text-center"}>
                            <button type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#1A76D5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                in
                            </button>
                            or
                            <button type="submit"
                                    className="flex w-full justify-center mt-2 rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black border hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}