"use client";
import React, { useState } from "react";
import './App.css'; // CSS dosyasını import edin
import {timer} from './app.js'

export default function App() {
  return (
    <div className="main-container">
        <h1>Basic Timer</h1>
        <div className="timer">
            <h1 id="timer" className="timer">00,00</h1>
        </div>
        <div className="buttons" id="buttons">
            <button className="start" id="start" onClick={()=>timer.start()}>Start</button>
            <button className="stop" id="stop" onClick={()=>timer.stop()}>Stop</button>
            <button className="reset" id="reset" onClick={()=>timer.reset()}>Reset</button>
        </div>
        <div className="footer">Made by <a href="https://github.com/seri4lize" target="_blank">seri4lize</a></div>
    </div>
  );
}
