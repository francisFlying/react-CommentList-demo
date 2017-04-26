// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './components/Context2'

import CommentList from './components/Comment/CommentList'

ReactDOM.render(<div>
    <CommentList></CommentList>
</div>,document.getElementById('app'));