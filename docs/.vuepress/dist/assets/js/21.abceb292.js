(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{515:function(t,a,s){"use strict";s.r(a);var r=s(6),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("blockquote",[s("p",[t._v("PlantUML允许使用简单的语法表达式快速绘制各种UML图例")])]),t._v(" "),s("h2",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("h3",{attrs:{id:"使用在线编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用在线编辑"}},[t._v("#")]),t._v(" 使用在线编辑")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Fwww.plantuml.com%2Fplantuml%2Fuml",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlantUML 在线编辑器"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"说明文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明文档"}},[t._v("#")]),t._v(" 说明文档")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fplantuml.com%2Fzh%2Fsequence-diagram",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方中文说明文档"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"时序图demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时序图demo"}},[t._v("#")]),t._v(" 时序图Demo")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@startuml")]),t._v("\ntitle 文件资源管理服务\nheader 文件资源管理服务功能模块时序图\nfooter 文件资源管理服务功能模块时序图 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("  \n\nactor 用户 \nentity 资源控制台 \nparticipant 文件资源管理服务 order "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nparticipant 权限系统 order "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#LightCyan")]),t._v("\nparticipant 文件系统 order "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#LightBlue")]),t._v("\n\nautonumber\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" 进程 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n用户 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#red]>o 资源控制台 : 访问")]),t._v("\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#red]>o 文件资源管理服务 : 资源请求（CURD）")]),t._v("\nactivate 文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#FFBBBB")]),t._v("\n文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#GreenYellow]>o 资源控制台 : 资源响应 ")]),t._v("\ndeactivate\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#GreenYellow]>o 用户 : 渲染")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" \nautonumber \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" 用户鉴权 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n用户 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#red]>o 资源控制台 : 访问")]),t._v("\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check pernmission\nactivate 文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#FFBBBB")]),t._v("\n文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 权限系统 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check permission\nactivate 权限系统 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#FFBBBB")]),t._v("\n权限系统 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check permission result\ndeactivate\n文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 资源控制台 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check permission result\ndeactivate\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#red]>o 用户 : 渲染")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" \nautonumber \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" 文件资源上传 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n用户 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#red]>o 资源控制台 : request")]),t._v("\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auth\nactivate 文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#FFBBBB")]),t._v("\n文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 文件系统 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auth\nactivate 文件系统 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#FFBBBB")]),t._v("\n文件系统 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auht result\n文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 资源控制台 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auht result\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 文件系统 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" upload file source\n文件系统 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 资源控制台 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" upload file source result\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 文件系统 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" get file info\n文件系统 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 资源控制台 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" file info result\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" submit file info \n文件资源管理服务 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 资源控制台 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" submit file info result\ndeactivate\ndeactivate\n资源控制台 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#red]>o 用户 : display")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@enduml")]),t._v("\n")])])]),s("h3",{attrs:{id:"预览效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览效果"}},[t._v("#")]),t._v(" 预览效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgs/9794452-db5c8440707b77d6.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("image")]),t._v(" "),s("h3",{attrs:{id:"导出为图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出为图片"}},[t._v("#")]),t._v(" 导出为图片")]),t._v(" "),s("blockquote",[s("p",[t._v("在生成的预览图片点击鼠标右键，将“图片保存为”保存到需要的位置。")])]),t._v(" "),s("h2",{attrs:{id:"支持的平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的平台"}},[t._v("#")]),t._v(" 支持的平台")]),t._v(" "),s("ul",[s("li",[t._v("Confluence wiki")]),t._v(" "),s("li",[t._v("VSCode Extension: PlantUML")]),t._v(" "),s("li",[t._v("Gitlab")])]),t._v(" "),s("p",[t._v("作者：看活一分钟")]),t._v(" "),s("p",[t._v("链接：https://www.jianshu.com/p/366e690e0551")]),t._v(" "),s("p",[t._v("来源：简书")]),t._v(" "),s("p",[t._v("著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);a.default=e.exports}}]);