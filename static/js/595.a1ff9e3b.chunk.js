"use strict";(self.webpackChunkbtc_test_frontend=self.webpackChunkbtc_test_frontend||[]).push([[595],{1595:function(e,a,r){r.r(a),r.d(a,{default:function(){return ne}});var n=r(885),s=r(2791),t=r(9085),i=r(3855),o=r(3360),c=r(4036),l=r(184),d=function(e){var a=e.users,r=e.onSubmit,d=(0,s.useState)(""),u=(0,n.Z)(d,2),m=u[0],f=u[1],x=(0,s.useState)(""),p=(0,n.Z)(x,2),h=p[0],v=p[1],b=(0,s.useState)(""),Z=(0,n.Z)(b,2),j=Z[0],g=Z[1],y=function(e){switch(e.currentTarget.name){case"name":f(e.currentTarget.value);break;case"email":v(e.currentTarget.value);break;case"password":g(e.currentTarget.value);break;default:return}};return(0,l.jsx)(c.Box,{children:(0,l.jsxs)(i.Z,{onSubmit:function(e){if(e.preventDefault(),a.find((function(e){return e.email===h})))return t.Am.warning("".concat(h," is already in users!"),{position:t.Am.POSITION.TOP_RIGHT}),!1;r({name:m,email:h,password:j}),f(""),v(""),g("")},children:[(0,l.jsxs)(i.Z.Group,{className:"mb-2",controlId:"formBasicName",children:[(0,l.jsx)(i.Z.Label,{children:"User name"}),(0,l.jsx)(i.Z.Control,{type:"text",name:"name",value:m,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0})]}),(0,l.jsxs)(i.Z.Group,{className:"mb-2",controlId:"formBasicEmail",children:[(0,l.jsx)(i.Z.Label,{children:"User email"}),(0,l.jsx)(i.Z.Control,{type:"mail",name:"email",value:h,onChange:y,pattern:"^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$",required:!0})]}),(0,l.jsxs)(i.Z.Group,{className:"mb-2",controlId:"formBasicPassword",children:[(0,l.jsx)(i.Z.Label,{children:"User password"}),(0,l.jsx)(i.Z.Control,{type:"text",name:"password",minLength:"8",value:j,onChange:y,required:!0})]}),(0,l.jsx)(o.Z,{variant:"primary",type:"submit",children:"Add user"})]})})},u=r(6930),m=function(e){var a=e.id,r=e.name,s=e.email,t=e.password,i=e.open,c=e.getUserById,d=(0,u.k3)(),m=(0,n.Z)(d,2),f=m[0],x=m[1].isLoading;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"mb-2",children:[(0,l.jsx)("b",{children:"Name:"})," ",r,(0,l.jsx)("br",{}),(0,l.jsx)("b",{children:"Email:"})," ",s,(0,l.jsx)("br",{}),(0,l.jsx)("b",{children:"Password:"})," ",t]}),(0,l.jsx)(o.Z,{variant:"outline-secondary",size:"sm",type:"button",onClick:function(){c(a),i()},children:"Edit"}),(0,l.jsx)(o.Z,{variant:"outline-secondary",size:"sm",type:"button",disabled:x,onClick:function(){f(a)},children:"Delete"})]})},f=r(7022),x=r(1413),p=r(5987),h=r(1694),v=r.n(h),b=(r(2391),r(239)),Z=r(7503),j=r(162),g=r(9007),y=r(4787),w=r(8633),N=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],C=s.forwardRef((function(e,a){var r=e.bsPrefix,s=e.active,t=e.disabled,i=e.eventKey,o=e.className,c=e.variant,d=e.action,u=e.as,m=(0,p.Z)(e,N);r=(0,j.vE)(r,"list-group-item");var f=(0,y.v)((0,x.Z)({key:(0,w.h)(i,m.href),active:s},m)),h=(0,n.Z)(f,2),b=h[0],Z=h[1],C=(0,g.Z)((function(e){if(t)return e.preventDefault(),void e.stopPropagation();b.onClick(e)}));t&&void 0===m.tabIndex&&(m.tabIndex=-1,m["aria-disabled"]=!0);var I=u||(d?m.href?"a":"button":"div");return(0,l.jsx)(I,(0,x.Z)((0,x.Z)((0,x.Z)({ref:a},m),b),{},{onClick:C,className:v()(o,r,Z.isActive&&"active",t&&"disabled",c&&"".concat(r,"-").concat(c),d&&"".concat(r,"-action"))}))}));C.displayName="ListGroupItem";var I=C,k=["className","bsPrefix","variant","horizontal","numbered","as"],P=s.forwardRef((function(e,a){var r,n=(0,b.Ch)(e,{activeKey:"onSelect"}),s=n.className,t=n.bsPrefix,i=n.variant,o=n.horizontal,c=n.numbered,d=n.as,u=void 0===d?"div":d,m=(0,p.Z)(n,k),f=(0,j.vE)(t,"list-group");return o&&(r=!0===o?"horizontal":"horizontal-".concat(o)),(0,l.jsx)(Z.Z,(0,x.Z)((0,x.Z)({ref:a},m),{},{as:u,className:v()(s,f,i&&"".concat(f,"-").concat(i),r&&"".concat(f,"-").concat(r),c&&"".concat(f,"-numbered"))}))}));P.displayName="ListGroup";var S=Object.assign(P,{Item:I}),T=function(e){var a=e.users,r=e.open,n=e.getUserById;return(0,l.jsx)(f.Z,{children:(0,l.jsx)(S,{variant:"flush",children:a.map((function(e){return(0,l.jsx)(S.Item,{children:(0,l.jsx)(m,{id:e._id,name:e.name,email:e.email,password:e.password,open:r,getUserById:n})},e._id)}))})})},B=function(e){var a=e.name,r=e.onChange;return(0,l.jsx)(c.Box,{children:(0,l.jsx)(i.Z,{children:(0,l.jsxs)(i.Z.Group,{className:"mb-2",controlId:"formBasicName",children:[(0,l.jsx)(i.Z.Label,{children:"Search"}),(0,l.jsx)(i.Z.Control,{type:"text",name:"find",value:a,onChange:r})]})})})},L=r(6543),z=(0,L.Z)("card-group"),A=r(7472),O=["bsPrefix","className","variant","as"],_=s.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,s=e.variant,t=e.as,i=void 0===t?"img":t,o=(0,p.Z)(e,O),c=(0,j.vE)(r,"card-img");return(0,l.jsx)(i,(0,x.Z)({ref:a,className:v()(s?"".concat(c,"-").concat(s):c,n)},o))}));_.displayName="CardImg";var G=_,U=r(6040),E=["bsPrefix","className","as"],R=s.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,t=e.as,i=void 0===t?"div":t,o=(0,p.Z)(e,E),c=(0,j.vE)(r,"card-header"),d=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return(0,l.jsx)(U.Z.Provider,{value:d,children:(0,l.jsx)(i,(0,x.Z)((0,x.Z)({ref:a},o),{},{className:v()(n,c)}))})}));R.displayName="CardHeader";var q=R,D=["bsPrefix","className","bg","text","border","body","children","as"],H=(0,A.Z)("h5"),K=(0,A.Z)("h6"),$=(0,L.Z)("card-body"),M=(0,L.Z)("card-title",{Component:H}),F=(0,L.Z)("card-subtitle",{Component:K}),V=(0,L.Z)("card-link",{Component:"a"}),Y=(0,L.Z)("card-text",{Component:"p"}),J=(0,L.Z)("card-footer"),Q=(0,L.Z)("card-img-overlay"),W=s.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,s=e.bg,t=e.text,i=e.border,o=e.body,c=e.children,d=e.as,u=void 0===d?"div":d,m=(0,p.Z)(e,D),f=(0,j.vE)(r,"card");return(0,l.jsx)(u,(0,x.Z)((0,x.Z)({ref:a},m),{},{className:v()(n,f,s&&"bg-".concat(s),t&&"text-".concat(t),i&&"border-".concat(i)),children:o?(0,l.jsx)($,{children:c}):c}))}));W.displayName="Card",W.defaultProps={body:!1};var X=Object.assign(W,{Img:G,Title:M,Subtitle:F,Body:$,Link:V,Text:Y,Header:q,Footer:J,ImgOverlay:Q}),ee=function(e){var a=e.users,r=e.user,c=e.onSubmit,d=e.close,u=(0,s.useState)(r.name),m=(0,n.Z)(u,2),f=m[0],x=m[1],p=(0,s.useState)(r.email),h=(0,n.Z)(p,2),v=h[0],b=h[1],Z=(0,s.useState)(r.password),j=(0,n.Z)(Z,2),g=j[0],y=j[1],w=function(e){switch(e.currentTarget.name){case"name":x(e.currentTarget.value);break;case"email":b(e.currentTarget.value);break;case"password":y(e.currentTarget.value);break;default:return}};return(0,l.jsx)(z,{style:{height:"100%",width:"100%",position:"absolute",zIndex:1,backgroundColor:"#fff"},children:(0,l.jsx)(X,{style:{padding:"20px"},children:(0,l.jsxs)(i.Z,{onSubmit:function(e){e.preventDefault();var n=r._id;if(a.find((function(e){return e.email===v&&e._id!==n})))return t.Am.warning("".concat(v," is already in users!"),{position:t.Am.POSITION.TOP_RIGHT}),!1;c({id:r._id,name:f,email:v,password:g}),x(""),b(""),y(""),d()},children:[(0,l.jsxs)(i.Z.Group,{className:"mb-2",controlId:"formBasicName",children:[(0,l.jsx)(i.Z.Label,{children:"User name"}),(0,l.jsx)(i.Z.Control,{type:"text",name:"name",value:f,onChange:w,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0})]}),(0,l.jsxs)(i.Z.Group,{className:"mb-2",controlId:"formBasicEmail",children:[(0,l.jsx)(i.Z.Label,{children:"User email"}),(0,l.jsx)(i.Z.Control,{type:"mail",name:"email",value:v,onChange:w,pattern:"^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$",required:!0})]}),(0,l.jsxs)(i.Z.Group,{className:"mb-2",controlId:"formBasicPassword",children:[(0,l.jsx)(i.Z.Label,{children:"User password"}),(0,l.jsx)(i.Z.Control,{type:"text",name:"password",minLength:"8",value:g,onChange:w,required:!0})]}),(0,l.jsx)(o.Z,{variant:"primary",type:"submit",children:"Apply"}),(0,l.jsx)(o.Z,{variant:"primary",style:{marginLeft:"30px"},type:"button",onClick:function(){d()},children:"Cancel"})]})})})},ae=r(5048),re=r(1092),ne=function(){var e=(0,ae.I0)(),a=(0,s.useState)({}),r=(0,n.Z)(a,2),t=r[0],i=r[1],o=function(){var e=(0,s.useState)(!1),a=(0,n.Z)(e,2),r=a[0],t=a[1];return{isOpen:r,open:function(){return t(!0)},close:function(){return t(!1)},toggle:function(){return t((function(e){return!e}))}}}(),c=o.isOpen,m=o.open,x=o.close,p=(0,ae.v9)(re.zK),h=(0,u.wv)("",{refetchOnMountOrArgChange:!0}),v=h.data,b=h.isLoading,Z=h.isSuccess,j=(0,u.Vx)(),g=(0,n.Z)(j,1)[0],y=(0,u.kD)(),w=(0,n.Z)(y,1)[0],N=p.trim()?v.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())})):v;return(0,l.jsxs)(f.Z,{className:"mt-2",style:{position:"relative"},children:[c&&(0,l.jsx)(ee,{users:v,user:t,close:x,onSubmit:function(e){var a=e.id,r=e.name,n=e.email,s=e.password;w({userId:a,name:r,email:n,password:s})}}),!b&&Z&&(0,l.jsxs)(z,{children:[(0,l.jsx)(X,{children:(0,l.jsxs)(X.Body,{children:[(0,l.jsx)(X.Title,{children:"New user"}),(0,l.jsx)(d,{users:v,onSubmit:function(e){var a=e.name,r=e.email,n=e.password;g({name:a,email:r,password:n})}})]})}),(0,l.jsx)(X,{children:(0,l.jsxs)(X.Body,{children:[(0,l.jsx)(X.Title,{children:"Your users"}),(0,l.jsx)(B,{name:p,onChange:function(a){e((0,re.Tv)(a.target.value))}}),(0,l.jsx)(T,{users:N,open:m,getUserById:function(e){i(v.find((function(a){return a._id===e})))}})]})})]})]})}}}]);
//# sourceMappingURL=595.a1ff9e3b.chunk.js.map