/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[10],{359:function(ia,da,h){function ca(e){e.Ca();e.advance();var f=e.current.textContent;e.Ua();return f}function aa(e){var f=[];for(e.Ca();e.advance();){var h=e.Ja();"field"===h?f.push(String(e.aa("name"))):Object(ha.h)("unrecognised field list element: "+h)}e.Ua();return f}function fa(e,f){return f?"false"===e?!1:!0:"true"===e?!0:!1}function ea(e,f){var h=e.Ja();switch(h){case "javascript":return{name:"JavaScript",javascript:e.current.textContent};
case "uri":return{name:"URI",uri:e.aa("uri")};case "goto":h=null;e.Ca();if(e.advance()){var n=e.aa("fit");h={page:e.aa("page"),fit:n};if("0"===h.page)Object(ha.h)("null page encountered in dest");else switch(f=f(Number(h.page)),n){case "Fit":case "FitB":break;case "FitH":case "FitBH":h.top=f.ha({x:0,y:e.aa("top")||0}).y;break;case "FitV":case "FitBV":h.left=f.ha({x:e.aa("left")||0,y:0}).x;break;case "FitR":n=f.ha({x:e.aa("left")||0,y:e.aa("top")||0});f=f.ha({x:e.aa("right")||0,y:e.aa("bottom")||0});
f=new ta.d(n.x,n.y,f.x,f.y);h.top=f.da;h.left=f.fa;h.bottom=f.ea;h.right=f.ga;break;case "XYZ":n=f.ha({x:e.aa("left")||0,y:e.aa("top")||0});h.top=n.y;h.left=n.x;h.zoom=e.aa("zoom")||0;break;default:Object(ha.h)("unknown dest fit: "+n)}h={name:"GoTo",dest:h}}else Object(ha.h)("missing dest in GoTo action");e.Ua();return h;case "submit-form":h={name:"SubmitForm",url:e.aa("url"),format:e.aa("format"),method:e.aa("method")||"POST",exclude:fa(e.aa("exclude"),!1)};f=e.aa("flags");h.flags=f?f.split(" "):
[];for(e.Ca();e.advance();)switch(f=e.Ja(),f){case "fields":h.fields=aa(e);break;default:Object(ha.h)("unrecognised submit-form child: "+f)}e.Ua();return h;case "reset-form":h={name:"ResetForm",exclude:fa(e.aa("exclude"),!1)};for(e.Ca();e.advance();)switch(f=e.Ja(),f){case "fields":h.fields=aa(e);break;default:Object(ha.h)("unrecognised reset-form child: "+f)}e.Ua();return h;case "hide":h={name:"Hide",hide:fa(e.aa("hide"),!0)};for(e.Ca();e.advance();)switch(f=e.Ja(),f){case "fields":h.fields=aa(e);
break;default:Object(ha.h)("unrecognised hide child: "+f)}e.Ua();return h;case "named":return{name:"Named",action:e.aa("name")};default:Object(ha.h)("Encountered unexpected action type: "+h)}return null}function z(e,f,h){var n={};for(e.Ca();e.advance();){var r=e.Ja();switch(r){case "action":r=e.aa("trigger");if(f?-1!==f.indexOf(r):1){n[r]=[];for(e.Ca();e.advance();){var w=ea(e,h);Object(ja.isNull)(w)||n[r].push(w)}e.Ua()}else Object(ha.h)("encountered unexpected trigger on field: "+r);break;default:Object(ha.h)("encountered unknown action child: "+
r)}}e.Ua();return n}function x(e){return new ka.a(e.aa("r")||0,e.aa("g")||0,e.aa("b")||0,e.aa("a")||1)}function n(e,f){var h=e.aa("name"),n=e.aa("type")||"Type1",r=e.aa("size"),w=f.ha({x:0,y:0});r=f.ha({x:Number(r),y:0});f=w.x-r.x;w=w.y-r.y;h={name:h,type:n,size:Math.sqrt(f*f+w*w)||0,strokeColor:[0,0,0],fillColor:[0,0,0]};for(e.Ca();e.advance();)switch(n=e.Ja(),n){case "stroke-color":h.strokeColor=x(e);break;case "fill-color":h.fillColor=x(e);break;default:Object(ha.h)("unrecognised font child: "+
n)}e.Ua();return h}function f(e){return{value:e.aa("value"),displayValue:e.aa("display-value")||void 0}}function y(e){var h=[];for(e.Ca();e.advance();){var n=e.Ja();switch(n){case "option":h.push(f(e));break;default:Object(ha.h)("unrecognised options child: "+n)}}e.Ua();return h}function w(e,f){var h=e.aa("name"),r={type:e.aa("type"),quadding:e.aa("quadding")||"Left-justified",maxLen:e.aa("max-len")||-1},w=e.aa("flags");Object(ja.isString)(w)&&(r.flags=w.split(" "));for(e.Ca();e.advance();)switch(w=
e.Ja(),w){case "actions":r.actions=z(e,["C","F","K","V"],function(){return f});break;case "default-value":r.defaultValue=ca(e);break;case "font":r.font=n(e,f);break;case "options":r.options=y(e);break;default:Object(ha.h)("unknown field child: "+w)}e.Ua();return new window.Annotations.ca.ma(h,r)}function e(e,f){switch(e.type){case "Tx":try{if(Object(wa.c)(e.actions))return new na.a.DatePickerWidgetAnnotation(e,f)}catch(va){Object(ha.h)(va)}return new na.a.TextWidgetAnnotation(e,f);case "Ch":return e.flags.get(pa.WidgetFlags.COMBO)?
new na.a.ChoiceWidgetAnnotation(e,f):new na.a.ListWidgetAnnotation(e,f);case "Btn":return e.flags.get(pa.WidgetFlags.PUSH_BUTTON)?new na.a.PushButtonWidgetAnnotation(e,f):e.flags.get(pa.WidgetFlags.RADIO)?new na.a.RadioButtonWidgetAnnotation(e,f):new na.a.CheckButtonWidgetAnnotation(e,f);case "Sig":return new na.a.SignatureWidgetAnnotation(e,f);default:Object(ha.h)("Unrecognised field type: "+e.type)}return null}function r(e,f){var h={number:e.aa("number")};for(e.Ca();e.advance();){var n=e.Ja();switch(n){case "actions":h.actions=
z(e,["O","C"],f);break;default:Object(ha.h)("unrecognised page child: "+n)}}e.Ua();return h}function ba(f,h,y,ba){var ca=[],ea={};f.Ca();var da=[],fa={},ia=[];Object(ma.a)(function(){if(f.advance()){var y=f.Ja();switch(y){case "calculation-order":da="calculation-order"===f.Ja()?aa(f):[];break;case "document-actions":fa=z(f,["Init","Open"],h);break;case "pages":y=[];for(f.Ca();f.advance();){var ba=f.Ja();switch(ba){case "page":y.push(r(f,h));break;default:Object(ha.h)("unrecognised page child: "+ba)}}f.Ua();
ia=y;break;case "field":ba=w(f,h(1));ea[ba.name]=ba;break;case "widget":y={border:{style:"Solid",width:1},backgroundColor:[],fieldName:f.aa("field"),page:f.aa("page"),index:f.aa("index")||0,rotation:f.aa("rotation")||0,flags:[],isImporting:!0};(ba=f.aa("appearance"))&&(y.appearance=ba);(ba=f.aa("flags"))&&(y.flags=ba.split(" "));for(f.Ca();f.advance();)switch(ba=f.Ja(),ba){case "rect":var va=f,ja=h(Number(y.page));ba=ja.ha({x:va.aa("x1")||0,y:va.aa("y1")||0});va=ja.ha({x:va.aa("x2")||0,y:va.aa("y2")||
0});ba=new ta.d(ba.x,ba.y,va.x,va.y);ba.normalize();y.rect={x1:ba.x1,y1:ba.y1,x2:ba.x2,y2:ba.y2};break;case "border":ba=f;va={style:ba.aa("style")||"Solid",width:ba.aa("width")||1,color:[0,0,0]};for(ba.Ca();ba.advance();)switch(ja=ba.Ja(),ja){case "color":va.color=x(ba);break;default:Object(ha.h)("unrecognised border child: "+ja)}ba.Ua();y.border=va;break;case "background-color":y.backgroundColor=x(f);break;case "actions":y.actions=z(f,"E X D U Fo Bl PO PC PV PI".split(" "),h);break;case "appearances":ba=
f;va=Object(wa.b)(y,"appearances");for(ba.Ca();ba.advance();)if(ja=ba.Ja(),"appearance"===ja){ja=ba.aa("name");var la=Object(wa.b)(va,ja);ja=ba;for(ja.Ca();ja.advance();){var ka=ja.Ja();switch(ka){case "Normal":Object(wa.b)(la,"Normal").data=ja.current.textContent;break;default:Object(ha.h)("unexpected appearance state: ",ka)}}ja.Ua()}else Object(ha.h)("unexpected appearances child: "+ja);ba.Ua();break;case "extra":ba=f;va=h;ja={};for(ba.Ca();ba.advance();)switch(la=ba.Ja(),la){case "font":ja.font=
n(ba,va(1));break;default:Object(ha.h)("unrecognised extra child: "+la)}ba.Ua();ba=ja;ba.font&&(y.font=ba.font);break;case "captions":va=f;ba={};(ja=va.aa("Normal"))&&(ba.Normal=ja);(ja=va.aa("Rollover"))&&(ba.Rollover=ja);(va=va.aa("Down"))&&(ba.Down=va);y.captions=ba;break;default:Object(ha.h)("unrecognised widget child: "+ba)}f.Ua();(ba=ea[y.fieldName])?(y=e(ba,y),ca.push(y)):Object(ha.h)("ignoring widget with no corresponding field data: "+y.fieldName);break;default:Object(ha.h)("Unknown element encountered in PDFInfo: "+
y)}return!0}return!1},function(){f.Ua();y({calculationOrder:da,widgets:ca,fields:ea,documentActions:fa,pages:ia,custom:[]})},ba)}h.r(da);h.d(da,"parse",function(){return ba});var ha=h(1),ja=h(0);h.n(ja);var na=h(91),ta=h(2),ka=h(8),ma=h(83),wa=h(80),pa=h(22)}}]);}).call(this || window)