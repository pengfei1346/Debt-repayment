// import React from 'react'
// import ReactDOM from 'react-dom'
import { createElement, render, renderDom } from './element';
import './index.css';
import diff from './diff';
import patch from './patch';

let virtualDom = createElement('ul', { class: 'list' }, [
    createElement('li', { class: 'item' }, ['我是原来的一']),
    createElement('li', { class: 'item' }, ['我是原来的二']),
    createElement('li', { class: 'item' }, ['我是原来的三'])
]);

let virtualDom2 = createElement('ul', { class: 'list-group' }, [
    createElement('li', { class: 'item' }, ['我是现在的一']),
    createElement('li', { class: 'item' }, ['我是现在的二']),
    createElement('p', {class: 'page'}, [
        createElement('a', {class:'link', href: 'https://www.so.com/', target: '_blank'}, ['so'])
    ]),
    createElement('li', {class: 'wkk'}, ['wkk'])
]);


// 如果平级元素有互换，那会导致重新渲染
// 新增节点也不会被更新

let el = render(virtualDom);
// renderDom(el, window.root);
renderDom(el, document.getElementById('root'));

let patches = diff(virtualDom, virtualDom2);
// console.log(patches);

// 给元素打补丁，重新更新视图
patch(el, patches);

// ReactDOM.render(<App />, document.getElementById('root'))
