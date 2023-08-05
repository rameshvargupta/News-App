import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })

  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}

          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key={"technology"} pageSize={15} country={"us"} category={"technology"} />} />
            <Route path="/sport" element={<News setProgress={this.setProgress} key={"sport"} pageSize={9} country={"in"} category={"sport"} />} />
            <Route path="/science" element={<News setProgress={this.setProgress} key={"science"} pageSize={9} country={"in"} category={"science"} />} />
            <Route path="/business" element={<News setProgress={this.setProgress} key={"business"} pageSize={9} country={"in"} category={"business"} />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key={"technology"} pageSize={9} country={"in"} category={"technology"} />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key={"science"} pageSize={9} country={"in"} category={"entertainment"} />} />
            <Route path="/health" element={<News setProgress={this.setProgress} key={"health"} pageSize={9} country={"in"} category={"health"} />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

