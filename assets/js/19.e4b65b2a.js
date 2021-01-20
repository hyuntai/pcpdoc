(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{398:function(e,t,n){"use strict";n.r(t);var o=n(25),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"node-manage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-manage"}},[e._v("#")]),e._v(" Node Manage")]),e._v(" "),n("br"),e._v(" "),n("img",{attrs:{src:e.$withBase("/menu-node.png")}}),e._v(" "),n("ul",[n("li",[e._v("Node는 여러 개의 Agent를 논리적으로 묶어 load balancing 을 구현하기 위한 단위이다.")]),e._v(" "),n("li",[e._v("개별 Job은 속성으로 Node와 Required 값을 지정해야 한다.")])]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("Required")]),e._v(" 는 Job 이 실행되기 위해 필요한 자원양이라고 이해하면 쉽다. 자원은 Max 값으로 Agent 마다 할당된다.\nUsed 는 실행중인 Job의 Required 의 총 합이며, 그 합이 Max 값을 넘길 수 없다. Job 실행이 완료되면 used 에서 required 만큼 감해진다.")])]),e._v(" "),n("ul",[n("li",[e._v("Node 그룹 내에서 Job 이 필요한 자원양(Requierd) 만큼 여유가 있는 Agent가 존재하지 않으면, 해당 Job은 "),n("code",[e._v("Not Enough")]),e._v(" 상태로 빠지며, 60초 뒤 다시 남은 리소스(max-used)의 상태를 확인한다.(실행 조건을 만족할 때 까지 반복)")]),e._v(" "),n("li",[e._v("Node에 속한 모든 Agent의 리소스가 여유가 있는 경우에는 화면상 위에 등록된 Agent에 Job이 할당된다.")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Job 중에는 Node를 지정하지 않고 Agent 의 hostname 을 직접 등록하는 경우도 있다. 이 경우에는 Required 값은 무시된다."),n("br"),e._v("\n두 대 이상의 Agent를 등록하고 평상시에 한 쪽 에서만 실행되어 져야 한다면 나머지 Agent의 Max 값은 0으로 설정한다.")])]),e._v(" "),n("br"),e._v(" "),n("img",{attrs:{src:e.$withBase("/node-manage.png"),height:"360"}}),e._v(" "),n("ul",[n("li",[e._v("새로운 Agent를 추가하는 경우에는 Node명을 선택하고 마우스 우클릭으로 Add Child를 선택한다.")]),e._v(" "),n("li",[n("img",{attrs:{src:e.$withBase("/ic-updown.png")}}),e._v(" 을 이용해 등록된 Agnet의 순서를 변경한다.")]),e._v(" "),n("li",[n("code",[e._v("Used")]),e._v(" 컬럼은 조회 시점 실행중인 잡의 required의 총 합이다.")])]),e._v(" "),n("p",[n("br"),n("br")])])}),[],!1,null,null,null);t.default=a.exports}}]);