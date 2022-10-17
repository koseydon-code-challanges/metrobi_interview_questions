import React from "react"
import ReactDom from "react-dom"
import {createRoot} from 'react-dom/client';
import App from "./App"
import "./input.css"

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
