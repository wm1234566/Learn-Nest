/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-24 19:45:36
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-24 20:05:40
 * @FilePath: \JavaScript\Nest\study\1.ioc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class A {
    name: string
    constructor(name:string) {
        // this.name = "sdfds"
        this.name=name
    }
}

class B {
    a: any
    constructor() {
        this.a = name
    }
}
// 如果A类改成构造函数传参，则不行、
// A类与B类强耦合，使用B类必须有A类，A类一旦改动，都要改


class Container {
    mo: any
    constructor() {
        this.mo = {}
    }
    provide(key: string, mo: any) {
        this.mo[key] = mo;
    }
    get(key: string) {
        return this.mo[key]
    }

}

// 实例化
const mo=new Container()

mo.provide("a",new A("AHHH"))
