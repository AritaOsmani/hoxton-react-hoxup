import { Route, Routes } from "react-router-dom"
import LogIn from "./pages/LogIn"

function App() {
  return (

    <main>
      <Routes>
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </main>


  )
}
export default App