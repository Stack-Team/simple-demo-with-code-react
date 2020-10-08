import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import './App.css';

import First from './First/First'
import Counter from './Counter/Counter'
import Nav from './Nav/Nav'
// import Video from './Nav/Video'
import Sidebar from './Sidebar/Sidebar'
// import { Component } from 'react';

//Pages

import Comment from './Pages/Comment'
import Post from './Pages/Post'
import User from './Pages/User'

function App() {
  let data1 = {
    name: 'জামিল আহমেদ',
    designation: 'মাননীয় মেয়র',
    description: 'প্রথমেই আক্কেলপুর পৌরসভার সকল পৌরবাসীকে জানাই আন্তরিক শুভেচ্ছা। আমাদের প্রাতিষ্ঠানিক ওয়েবসাইট পরিদর্শন করার জন্য অসংখ্য ধন্যবাদ। আক্কেলপুর পৌরসভা এর ওয়েবসাইটের মাধ্যমে পরিচিত করিয়ে দেওয়ার পদক্ষেপ গ্রহণ করেছে যা বৈদ্যুতিক স্বয়.....',
  }
  // let data2 = {
  //   name: 'মোহাম্মদ মনির উদ্দিন আহমদ',
  //   designation: 'ওয়ার্ড কাউন্সিলর',
  //   description: 'কানাইঘাট পৌরসভা একটি নবগঠিত ‌"‌‌‍গ" শ্রেণীর পৌরসভা।কানাইঘাট পৌরসভাটি বিগত ২৫/১০/২০০৫ইং তারিখ হইতে প্রতিষ্ঠালাভের পর হইতে মাত্র ০২ জন কর্মকর্তা নিয়ে পৌরসভার যাবতীয় কার্যক্রম পরিচালনা করা হচ্ছে।ইতিমধ্যে পৌরসভার লোকবল বৃদ্ধির লক্ষ্যে ছাড়পত্র চাহিয়া মন্ত্রনালয়ে আবেদন প্রেরণ করা হয়েছে।.....',
  // }
  // let data3 = {
  //   name: 'মামুনুর রশিদ মামুন',
  //   designation: 'কাউন্সিলর',
  //   description: 'জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের ৪৫তম শাহাদাত বার্ষিকী ও জাতীয় শোক দিবস নানা আয়োজনে পালিত হয়েছে সিলেট সিটি করপোরেশনে। দিবস উপলক্ষে নগর ভবন প্রাঙ্গনে বঙ্গবন্ধুর প্রতিকৃতিতে শ্রদ্ধা নিবেদন করা হয়। শনিবার (১৫ আগস্ট ২০২০) সকাল.....',
  // }


  const [sharedCounter, setSharedCounter] = useState(0);
  const data = [];

  useEffect(() => {
    window.setInterval(() => {
      getData();
    }, 200);
  }, []);

  const getData = () => {
    setSharedCounter(sharedCounter + 1);
  }


  const [toggle, setToggle] = useState(0);
  const toggler = () => {
    setToggle((prev) => !prev)
  }


  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])


  const posts = () => {
    setResourceType('posts')
  }

  const users = () => {
    setResourceType('users')
  }

  const comments = () => {
    setResourceType('comments')
  }



  return (
    <div className="App">
      <header className="App-header">
        <div>
            
            <Nav setToggle={toggler}/>
            <Sidebar toggle={toggle} setPosts={posts} setUsers={users} setComments={comments}/>
        </div>
        <div className="card">
          <div className={(resourceType === 'posts') ? 'display-block' : 'display-none'}>
                <div className="row">
                    {items.map(item => (
                      <Post title={JSON.stringify(item.title)} body={JSON.stringify(item.body)}/>
                    ))}
                </div>
          </div>
          <div className={(resourceType === 'users') ? 'display-block' : 'display-none'}>
            <div className="row">
                {items.map(item => (
                  <User name={JSON.stringify(item.name)} email={JSON.stringify(item.email)} address={JSON.stringify(item.address)} street={JSON.stringify(item.street)}  city={JSON.stringify(item.city)}/>
                ))}
            </div>
          </div>
          <div className={(resourceType === 'comments') ? 'display-block' : 'display-none'}>
            <div className="row">
                {items.map(item => (
                  <Comment name={JSON.stringify(item.name)} email={JSON.stringify(item.email)} body={JSON.stringify(item.body)}/>
                ))}
            </div>
          </div>
        </div>
      </header>
      <div>
        {/* <First res={data1}/> */}
        <Counter/>
            {/* <div>
                <button onClick={() => setResourceType('posts')}>Post</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div> */}
            {/* <div>
                <h1>{resourceType}</h1>
                {items.map(item => {
                  return <pre>{JSON.stringify(item)}</pre>
                })}
            </div> */}
      </div>
    </div>
  );
}

export default App;
