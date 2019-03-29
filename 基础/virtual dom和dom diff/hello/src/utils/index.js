import {Element, createElement} from './element'

let virtualDom = createElement('ul', {class: 'list'}, [
    createElement("li",{class: 'list'}, ['张三']),
    createElement("li",{class: 'list'}, ['李四']),
    createElement("li",{class: 'list'}, ['赵五']),
])

console.log(virtualDom);

