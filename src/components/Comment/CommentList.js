// 评论列表容器组件
import React from 'react'

// 评论内容组件
import Comment from './Comment'
import CommentText from './CommentText'

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { user: 'zs', content: '哈哈哈哈哈哈哈' },
                { user: 'lisi', content: '张三好漂亮' }
            ]
        }
    }

    render() {
        return <div>
            {/*发表评论文本框*/}
            <CommentText reloadCommentList={this.getCommentList}></CommentText>
            <ul>
                {/*评论内容列表*/}
                {this.state.comments.map(this.createComment)}
            </ul>
        </div>
    }

    // 创建每一条的评论数据
    createComment = (item, i) => {
        return <Comment key={i} {...item}></Comment>
    }

    // 组件加载完成之后，调用次函数
    componentDidMount() {
        this.getCommentList();
    }

    // 这个方法用来获取localStorage中的最新评论数据，可以把这个方法，当作参数，传递给子组件，当子组件中点击发表按钮的时候，就调用一下父组件中的这个函数，则可以实现刷新父元素中的列表
    getCommentList = () => {
        // 从localStorage中获取评论列表
        var list = JSON.parse(localStorage.getItem('comments') || '[]');
        this.setState({
            comments: list
        });
    }
}