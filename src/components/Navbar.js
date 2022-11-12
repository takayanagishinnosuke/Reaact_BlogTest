import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHome,faRightToBracket } from '@fortawesome/free-solid-svg-icons'


function Navbar({isAuth}) {
  return (
    <nav>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faEnvelope} />
        ホーム
      </Link>

      {!isAuth ? <Link to={"/login"}>
        <FontAwesomeIcon icon={faRightToBracket} />
        ログイン
      </Link> : ( 
        <>
        <Link to={"/createpost"}>
          <FontAwesomeIcon icon={faHome} />
          記事投稿
        </Link>
        <Link to={"/logout"}>
          <FontAwesomeIcon icon={faRightToBracket} />
          ログアウト
          </Link>
        </>
      )}
    </nav>
  )
}

export default Navbar