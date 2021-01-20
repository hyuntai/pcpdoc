(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{377:function(t,a,e){"use strict";e.r(a);var s=e(25),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"virtual-box-centos-8-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-box-centos-8-설치"}},[t._v("#")]),t._v(" (virtual box)centos-8 설치")]),t._v(" "),e("h3",{attrs:{id:"vb-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vb-설정"}},[t._v("#")]),t._v(" vb 설정")]),t._v(" "),e("ol",[e("li",[t._v("hostkey 변경(alt+shift))")]),t._v(" "),e("li",[t._v("mouse usb태블릿 으로 변경")])]),t._v(" "),e("h3",{attrs:{id:"게스트확장-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#게스트확장-설치"}},[t._v("#")]),t._v(" 게스트확장 설치")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.if-not-true-then-false.com/2010/install-virtualbox-guest-additions-on-fedora-centos-red-hat-rhel/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# dnf update kernel*\n# dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\n# yum install gcc kernel-devel kernel-headers dkms make bzip2 perl\n# mkdir /media/VirtualBoxGuestAdditions\n# mount -r /dev/cdrom /media/VirtualBoxGuestAdditions\n# ./VBoxLinuxAdditions.run\n# reboot\n")])])]),e("h3",{attrs:{id:"설정에서-공유할-폴더와-속성을-지정한-후에"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정에서-공유할-폴더와-속성을-지정한-후에"}},[t._v("#")]),t._v(" 설정에서 공유할 폴더와 속성을 지정한 후에")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# sudo mount -t vboxsf VBShare /home/htkim/VBShare\n")])])]),e("h3",{attrs:{id:"postgresql-10-10-설치준비"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-10-10-설치준비"}},[t._v("#")]),t._v(" Postgresql 10.10 설치준비")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ dnf upgrade\n")])])]),e("ul",[e("li",[e("a",{attrs:{href:"https://www.postgresql.org/docs/current/install-short.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installation from Source Code"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./confiure\ndnf install readline-devel // 설치할게 더 있던거 같은데 게스트확장 설치하면서 몇가지는 포함된거 같다.\nmake\nsu\nmake install\nadduser postgres\nmkdir /usr/local/pgsql/data\nchown postgres /usr/local/pgsql/data\nsu - postgres\n/usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data\n/usr/local/pgsql/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start\n/usr/local/pgsql/bin/createdb test\n/usr/local/pgsql/bin/psql test\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("여기까지 하면 lib inclue 가 /usr/local/pgsql 에 모두 생김"),e("br"),t._v("\n그러면 postgresql10-devel.x86_64 같은건 설치 안해도 되지 않을까?"),e("br"),t._v("\n일단, ng-server git으로 받아서 빌드해보자."),e("br"),t._v("\nsetenv 에서 경로 바꾸는거 잊지말고."),e("br"),t._v("\n안되면, 공홈에 필요한 rpm 받아서 dnf install xxx.rpm 해보고")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dnf install gcc-c++.x86_64  \ndnf install libcurl-devel.x86_64\n\n")])])]),e("p",[t._v("::: Error\nscSvr/Makefile"),e("br"),t._v("\nPG_LIB_PATH/PG_INC_PATH 가 절대 경로로 되어 있음.  -변경-"),e("br"),t._v("\n:::")]),t._v(" "),e("h2",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" Todo")]),t._v(" "),e("ol",[e("li",[t._v("os 새로 설치하고(20G) db 설치 후 replication")])]),t._v(" "),e("ul",[e("li",[t._v("/usr/local/pgsql 를 tar로 묶어서 배포")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("게스트확장 설치하지 말고, server build off에서 자동으로")])]),t._v(" "),e("h3",{attrs:{id:"_2019-10-18-pcps2-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2019-10-18-pcps2-설치"}},[t._v("#")]),t._v(" 2019.10.18 pcps2 설치")]),t._v(" "),e("ol",[e("li",[t._v("설치중에 설치 Software에서 Server 선택(with no gui)")]),t._v(" "),e("li",[t._v("네트워크 -> 브릿지")]),t._v(" "),e("li",[t._v("웹콘솔 Enable")]),t._v(" "),e("li",[t._v("dnf upgrade")]),t._v(" "),e("li",[t._v("dnf install gcc-c++\n"),e("ul",[e("li",[t._v("libcurl은 이미 설치되어 있음")]),t._v(" "),e("li",[t._v("gcc등 dependency 로 한번에 설치됨.")])])]),t._v(" "),e("li",[t._v("dnf install readline-devel")]),t._v(" "),e("li",[t._v("dnf install zlib-devel")])])])}),[],!1,null,null,null);a.default=l.exports}}]);