import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    pics_h: [
      {id: 0, tags: ["cat", "beach", "sun"]},
      {id: 3, tags: ["garden", "cat"]}
    ],
    pics_v: [
      {id: 1, tags: ["selfie", "smile"]},
      {id: 2, tags: ["garden", "selfie"]},
      {id: 3, tags: ["selfie", "smile"]},
      {id: 4, tags: ["selfie", "smile"]},
      {id: 5, tags: ["selfie", "smile"]},

    ],
    pics_v_all_pairs: [],
    allPairsCreated: false,
    allPicsWithPairs: [],
    ultimateArrayCreated: false,
  }

  combineTags = (pic1, pic2) => {
    var newTags = []
    var pic1Tags = pic1["tags"]
    var pic2Tags = pic2["tags"]
    var lengthOfPic1 = pic1Tags.length
    var lengthOfPic2 = pic2Tags.length

    for (var i = 0; i < lengthOfPic1; i++){
        if(!this.contains(newTags,pic1Tags[i])){
          newTags.push(pic1Tags[i])
        }
    }


    for (i = 0; i < lengthOfPic2; i++){
        if(!this.contains(newTags,pic2Tags[i])){
          newTags.push(pic2Tags[i])
        }
    }

    return newTags
  }

  contains = (arr, val) => {
    if (arr.indexOf(val) != -1) {
      return true
    }
    return false
  }

  combinePics = (pic1, pic2) => {
    return {id: [pic1["id"],pic2["id"]], tags: this.combineTags(pic1,pic2)}
  }

  pairAllPicsV = () => {
    var pics_v = this.state.pics_v
    var allPairs = []
    for (var i = 0; i < pics_v.length; i=i+2){
      if (pics_v.length - i >= 2){
        allPairs.push(this.combinePics(pics_v[i],pics_v[i+1]))
      }
    }
    console.log("allPairs: ",allPairs)
    this.setState({
      pics_v_all_pairs: allPairs,
      allPairsCreated: true,
    })
  }

  createUltimatePicArray = () => {


    var {pics_h, pics_v} = this.state

    if(!this.state.allPairsCreated){
      this.pairAllPicsV()
    }

    if(!this.state.allPairsCreated){
      return false
    }
    var ultimatePicArray = []
    for (var i = 0; i < pics_h.length; i++){
      ultimatePicArray.push(pics_h[i])
    }
    var allPairs = this.state.pics_v_all_pairs
    //console.log("allPairs: ",allPairs)
    for (i = 0; i < allPairs.length; i++){
      ultimatePicArray.push(allPairs[i])
    }
    console.log("ultimatePicArray: ",ultimatePicArray)
    this.setState({
      allPicsWithPairs: ultimatePicArray,
      ultimateArrayCreated: true,
    })
  }

  render() {
    //pics_h: {id: 0, tags: Array(3)}
    //pair_v: {id: [0,1], tags: Array(x+y)}
    var {pics_h, pics_v} = this.state

    if(!this.state.ultimateArrayCreated){
      this.createUltimatePicArray()
    }


    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
