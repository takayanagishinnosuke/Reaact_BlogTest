import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db, auth } from "../firebase"


const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() =>{
    const getPosts = async () =>{
      //postsのドキュメントをすべて取り出す
      const querySnapshot = await getDocs(collection(db, "posts"));
      // console.log(querySnapshot.docs.map((doc) =>({doc})))
      // console.log(querySnapshot.docs.map((doc) =>({...doc.data(), id: doc.id })))
      // 取り出したデータを格納
      setPostList(querySnapshot.docs.map((doc) =>({...doc.data(), id: doc.id })))
    }
    getPosts()
  },[]);

  //idを受け取ってデータ削除する
  const handleDelete = async (id) =>{
    await deleteDoc(doc(db,"posts",id));
    //リダイレクトさせる
    window.location.href = "/";
  };


  return (
    <div className='homePage'>
      {postList.map((post)=>{
        return(
          <div className='postContents' key={post.id}>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>
          <div className='postTextContainer'>
          {post.postText}
          </div>
          <div className='nameAndDeleteButton'>
            <h3>{post.author.username}</h3>
            {/* 投稿のIDとauthのuidが一致している時…削除ボタンを表示 */}
            {post.author.id == auth.currentUser.uid && (
              <button onClick={() => handleDelete(post.id)}>削除</button>
            )}
          </div>
        </div>
        )
      })}
    </div>
    
  )
}

export default Home