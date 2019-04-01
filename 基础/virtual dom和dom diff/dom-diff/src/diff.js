//作用，比较两个虚拟dom的差异，采用先序深度优先遍历的算法找到最少的转换步骤
function diff(oldTree, newTree) {
    //存放补丁的对象
    let patches = {}
    let index = 0
    walk(oldTree, newTree, index, patches)

    return patches;
}

function walk (oldNode, newNode, index, patches) {
    // 每个元素都有一个补丁
    let current = [];
    if(!newNode) {
        current.push({type:'REMOVE', index})
    }else if(isString(oldNode) && isString(newNode)) {
        // 判断文本是否一致
        if (oldNode !== newNode) {
            current.push({ type: 'TEXT', text: newNode });
        }
    }else if (oldNode.type ===  newNode.type) {
        // 比较属性是否有更改
        let attr = diffAttr(oldNode.props, newNode.props);
        if (Object.keys(attr).length > 0) {
            current.push({ type: 'ATTR', attr });
        }
        // 如果有子节点，遍历子节点
        diffChildren(oldNode.children, newNode.children, patches);
    }else {
        current.push({ type: 'REPLACE', newNode});
    }

    // 当前元素确实有补丁存在
    if (current.length) {
        // 将元素和补丁对应起来，放到大补丁包中
        patches[index] = current;
    }
}

function isString(obj) {
    return typeof obj === 'string';
}

function diffAttr(oldAttrs, newAttrs) {
    let patch = {}
    for (let key in oldAttrs) {
        if(oldAttrs[key] !== newAttrs[key]){
            patch[key] = newAttrs[key]
        }
    }
    for (let key in newAttrs) {
        // 老节点没有新节点的属性
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key];
        }
    }

    return patch
}

var num = 0;
function diffChildren(oldChildren, newChildren, patches) {
    oldChildren.forEach((child, index) => {
        walk(child, newChildren[index], ++num, patches);
    });
}

export default diff