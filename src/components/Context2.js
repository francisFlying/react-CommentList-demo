import React from 'react'
import PropTypes from 'prop-types'

// 父组件
export default class Parent extends React.Component {
    // 定义一个函数，函数内部return一个对象，这个对象身上的属性，就是要共享给所有子孙组件使用的
    getChildContext() {
        return {
            color: 'red',
            fontSize:20
        }
    }

    // getChildContextTypes // 记住这个长单词就行了，在父元素中：前三个，后三个；在子孙元素中是后两个

    // 对传递给子孙元素的属性，进行类型校验
    static childContextTypes = {
        color:PropTypes.string, // 规定color属性为字符串类型
        fontSize:PropTypes.number
    }

    render() {
        return <div>
            <h1>Parent组件</h1>
            <Son1></Son1>
        </div>
    }
}

// 子组件
class Son1 extends React.Component {
    render() {
        return <div>
            <h3>Son1组件</h3>
            <SonDESON></SonDESON>
        </div>
    }
}

// 孙子组件
// 当哪个子孙组件用到了父元素上的一些数据的时候，就进行相关的context设置
class SonDESON extends React.Component {
    // 规定context中数据的类型
    static contextTypes = {
        color:PropTypes.string,
        fontSize:PropTypes.number
    }

    render() {
        return <div>
            <h5 style={{color:this.context.color}}>SonDESON组件------{this.context.fontSize}</h5>
        </div>
    }
}