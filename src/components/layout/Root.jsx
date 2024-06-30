import React from 'react';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import RouteApiHandler from '../../routes/RouteApiHandler';
import AppBar from './AppBar';

import { useParams } from 'react-router-dom'
// 전체 레이아웃 영역 - 헤더, 하단 앱바 포함
export default function Root( {setApiUrl,apiConfig, data } ) {
	const location = useLocation();
	const { feedId } = useParams();

	console.log('here'+data)

	return (
		<>
			{location.pathname !== `/view/${feedId}` && <Header data={data}/>}
			{location.pathname === `/view/${feedId}` && <div>상세헤더</div>}
			<RouteApiHandler setApiUrl={setApiUrl} />
			<Outlet />
			<AppBar />
		</>
	);
}