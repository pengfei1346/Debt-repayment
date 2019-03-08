# 原型

## 原型
   每个对象拥有一个原型对象，通过_proto_ 指针指向上一个原型，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层最终指向null；

### 构造函数
   symbol作为构造函数并不完整，因为不支持 new Symbol()语法，但它的原型拥有constructor属性，Symbol.prototype.constructor
   引用类型constructor属性是可以修改的，基本类型的只读，null和undefined没有constructor属性。
### 原型
    _proto_是每个实例上都拥有的属性，prototype是构造函数的属性，这两个并不一样，但是p._proto_和Parent.prototype指向同一个对象。

    > _proto_属性在es6时被标准化，但性能问题不推荐使用，推荐使用，Object.getPrototypeOf()
