import React from 'react'

import FeedItemHeader from './FeedItemHeader';
import FeedItemBody from './FeedItemBody';

// 피드 헤더와 바디를 감싸는 container
export default function FeedList({feedIndex,feedData}) {
  return (
	<>
		<FeedItemHeader feedData={feedData} />
		<FeedItemBody feedIndex={feedIndex} feedData={feedData} />
	</>	
  )
}