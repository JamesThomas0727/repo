import React from 'react';
import './home.scss';
import PostCard from '../../components/postcard/PostCard';
export default function Home() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Hello, everyone!</h2>
      <div className={'content-block'}>
        <PostCard></PostCard>
      </div>
    </React.Fragment >
  )
}
