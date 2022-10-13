// import { useEffect, useRef, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Canvas from "./pages/Canvas";
import { setContext, useRef } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Canvas from "./pages/Canvas";
// import HighScores from "./pages/HighScores";
// import Inventory from "./pages/Inventory";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// const canvas = document.querySelector('canvas');


// const ctx = canvas.getContext('2d');
// canvas.width = 1024;
// canvas.height = 576;

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
 
 <>
 
  return <Canvas />
    
   
     
  
      <ApolloProvider client={client}>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/inventory" 
                element={<Inventory />} 
              />
              <Route 
                path="/high-score" 
                element={<HighScores />} 
              />
              <Route 
                path="/signup" 
                element={<SignUp />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />  */}
              <Route 
              path="/Canvas" 
              element={<Canvas />} 
            />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  
}


export default App
