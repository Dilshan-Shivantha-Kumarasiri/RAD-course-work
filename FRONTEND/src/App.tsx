import Home from "./views/Home.tsx";
import SignIn from "./views/SignIn.tsx";
import SignUp from "./views/SignUp.tsx";
import SearchDoctors from "./views/SearchDoctors.tsx";
import "./App.css"
import "/src/assets/css/style.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/find/doctors/" element={<SearchDoctors />} />
            </Routes>
        </BrowserRouter>
      {/*<SearchDoctors/>*/}
    </>
  )
}

export default App
