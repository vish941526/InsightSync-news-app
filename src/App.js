import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



export class App extends Component {
  state = { 
    Progress:'0'
  }
  setProgress =(Progress)=>{
    this.setState({Progress:Progress})
  }
  render() {
    return (
      <Router>
      <div>
      <LoadingBar
        height={4}
        color='#dc2626'
        progress={this.state.Progress}
      />
        <NavBar/>
        <Routes>
          <Route exact  path='/' element={<News setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general"/>}/>
          <Route exact  path='/' element={<News setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general"/>}/>
          <Route exact  path='/Business' element={<News setProgress={this.setProgress} key="Business" pageSize={5} country="in" category="Business"/>}/>
          <Route exact  path='/Entertainment' element={<News setProgress={this.setProgress}key="Entertainment" pageSize={5} country="in" category="Entertainment"/>}/>
          <Route exact  path='/Health' element={<News setProgress={this.setProgress} key="Health" pageSize={5} country="in" category="Health"/>}/>
          <Route exact  path='/Science' element={<News setProgress={this.setProgress} key="Science" pageSize={5} country="in" category="Science"/>}/>
          <Route exact  path='/Sports' element={<News setProgress={this.setProgress} key="Sports" pageSize={5} country="in" category="Sports"/>}/>
          <Route exact  path='/Technology' element={<News setProgress={this.setProgress} key="Technology" pageSize={5} country="in" category="Technology"/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
}

export default App
