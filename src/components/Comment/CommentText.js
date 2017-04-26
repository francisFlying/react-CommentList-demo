// 发表评论的组件
import React from 'react'

export default class CommentText extends React.Component{
    render(){
        return <div>
            <input ref="txtUser" type="text"/><br/>
            <textarea ref="txtContent" cols="30" rows="10"></textarea><br/>
            <input type="button" value="发表评论" onClick={this.handleBtnPost}/>
        </div>
    }

    // 点击发表评论内容
    handleBtnPost = ()=>{
        // 1. 获取用户名和内容
        const user = this.refs.txtUser.value.trim();
        const content = this.refs.txtContent.value.trim();
        // 2. 将评论数据组成一个对象
        const comment = {user:user, content:content};
        // 3. 将这个对象，进行JSON序列化，转为字符串，将字符串保存到localStorage中
        //   3.1 在保存之前，先从localStorage中获取已有的评论数据（字符串类型），先把字符串的评论数据，转为对象形式，然后向这个对象中push、unshift第2步中的那个对象；
        var commentList = JSON.parse(localStorage.getItem('comments')||'[]');
        // unshift和push一样，是直接修改的原数组，返回的值是修改过后数组最新的长度
        var newLength = commentList.unshift(comment);
        console.log(newLength);
        //   3.2 将最新的评论数组，再次序列化，保存到localStorage中
        localStorage.setItem('comments', JSON.stringify(commentList));
        // 当评论框组件将评论保存到localStorage中之后，立即调用一下父元素中传递过来的，从新获取评论数据的方法，就能让父组件中的评论数据刷新
        this.props.reloadCommentList();
    }
}