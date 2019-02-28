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
      {id: 2, tags: ["garden", "selfie"]}
    ],
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

  render() {
    //pics_h: {id: 0, tags: Array(3)}
    //pair_v: {id: [0,1], tags: Array(x+y)}
    var {pics_h, pics_v} = this.state
    console.log("pics_h: ",pics_h)
    console.log("pics_v: ",pics_v)



    console.log(this.combinePics(pics_h[0],pics_h[1]))
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
