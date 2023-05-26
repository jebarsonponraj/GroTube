import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Navbar, Feed, Video } from "./components"


const App = () =>(
    <BrowserRouter>
        <div className="bg-black">
            <Navbar/>
            <Routes>
                <Route path="/" exact  element={<Feed/>} />
                <Route path="/video/:mediaUrl" element={<Video />} />
            </Routes>
        </div>
    </BrowserRouter>
);


export default App
