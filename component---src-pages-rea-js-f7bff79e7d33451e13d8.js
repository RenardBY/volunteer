(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"5fwQ":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),s=a("6aVh"),c=function(e){var t=e.imgFluid,a=e.href;return i.a.createElement("header",null,i.a.createElement(r.Link,{className:"btn--back",to:a}),i.a.createElement(s.a,{imgFluid:t}))}},"6aVh":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),r=a("9eSz"),s=a.n(r),c=(a("gCry"),function(e){var t=e.className,a=e.imgFluid;return a&&i.a.createElement(s.a,{className:t,fluid:a})});c.defaultProps={className:""}},CSbA:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t,a){var n={};return e[t].edges.forEach((function(e){var t=/[\u0400-\u04FF]/,i="en";if(a)switch(a){case"main":i=t.test(e.node.become_volunteer.description)?"ru":"en";break;case"our-stories":i=t.test(e.node.common.title)?"ru":"en";break;case"cards":i=t.test(e.node.card.group_text_card.description)?"ru":"en"}else i=t.test(e.node.hero.title)?"ru":"en";n[i]=e})),n}},HbSB:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),i=a.n(n),r=a("0qtt"),s=function(e){var t=e.content,a=e.keys,n=e.css;return i.a.createElement("ul",{className:n.ul},t&&t.map((function(e){return i.a.createElement("li",{key:e[a],className:"list__item mrg-0"},i.a.createElement(r.a,{className:n.Paragraph,size:"paragraph-large",text:e[a]}))})))}},P14e:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("9eSz"),s=a.n(r),c=a("XjjG"),o=a("5fwQ"),l=a("2yYn"),d=a("1RvS"),m=a("lHcn"),A=a("6aVh"),p=a("zHNF"),h=a("CSbA"),u=a("HbSB"),g=a("zhyO");t.default=function(){var e=p.data,t=Object(h.a)(e,"allContentstackAnywhereSocialRea"),a=!1;"undefined"!=typeof window&&(a=!0);var r=Object(n.useCallback)((function(){var e="en";return a&&(e=window.location.href.includes("/en/")?"en":"ru"),e}),[a?window.location.href:""]),f=Object(n.useState)("en"),w=f[0],b=f[1];Object(n.useEffect)((function(){var e=r();b(e)}),[a?window.location.href:""]);var v=t[w].node.the_process.the_process_list;return i.a.createElement(c.a,null,i.a.createElement(o.a,{href:"/our-page",imgFluid:t[w].node.header.img.featuredImg.childImageSharp.fluid}),i.a.createElement(g.a,{content:t[w].node.hero}),i.a.createElement(d.a,{className:"strip strip--middle strip--bg-gray-600"},i.a.createElement("div",{className:"container-center container-center--small"},i.a.createElement(m.a,{className:"mrg-0",size:"paragraph-large",text:t[w].node.strip.description}))),i.a.createElement(d.a,{className:"strip--zero-bottom"},i.a.createElement("div",{className:"container-center container-center--small"},i.a.createElement(l.a,{type:"titleMiddle",className:"capitalize ex-bold mb-large",text:t[w].node.the_problem.title}),i.a.createElement(m.a,{size:"paragraph-large",text:t[w].node.the_problem.description}))),i.a.createElement(d.a,{className:"strip--zero-bottom"},i.a.createElement("div",{className:"container-center container-center--small"},i.a.createElement(l.a,{type:"titleMiddle",className:"capitalize ex-bold mb-large",text:t[w].node.the_process.title}),i.a.createElement(m.a,{size:"paragraph-large",text:t[w].node.the_process.description}),i.a.createElement(u.a,{content:v,keys:"title",css:{ul:"list column__body custom-mark custom-mark--red",Paragraph:""}}))),i.a.createElement(d.a,null,i.a.createElement("div",{className:"container-center container-center--small"},i.a.createElement(l.a,{type:"titleMiddle",className:"capitalize ex-bold mb-large",text:t[w].node.what_we_did.title}),t[w].node.what_we_did.description.map((function(e){return i.a.createElement(m.a,{size:"paragraph-large",text:e})})))),i.a.createElement("div",{className:"container-center"},i.a.createElement(A.a,{imgFluid:t[w].node.common.img[0].featuredImg.childImageSharp.fluid})),i.a.createElement(d.a,{className:"strip strip--middle strip--zero-bottom"},i.a.createElement("div",{className:"container-center container-center--small"},i.a.createElement(l.a,{type:"titleMiddle",className:"capitalize ex-bold mb-large",text:t[w].node.what_s_next.title}),i.a.createElement(m.a,{className:"mrg-0",size:"paragraph-large",text:t[w].node.what_s_next.description}))),i.a.createElement("article",{className:"container-center container-center--small"},i.a.createElement(d.a,null,i.a.createElement(s.a,{className:"strip-title-img",fluid:t[w].node.common.img[1].featuredImg.childImageSharp.fluid}),i.a.createElement(l.a,{type:"titleMiddle",className:"capitalize ex-bold mb-large",text:t[w].node.team.title}),i.a.createElement(m.a,{className:"mrg-0",size:"paragraph-large",text:t[w].node.team.description}))))}},XZ21:function(e,t,a){},XjjG:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),r=a("TJpk"),s=a.n(r),c=(a("XZ21"),function(e){var t=e.title,a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:t,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("main",{className:"main"},a))});c.defaultProps={title:null}},gCry:function(e,t,a){},zHNF:function(e){e.exports=JSON.parse('{"data":{"allContentstackAnywhereSocialRea":{"edges":[{"node":{"header":{"img":{"featuredImg":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABCcAAAQnAEmzTo0AAAA8klEQVQY01WP3U7CQBCFeWmDAi0/VYzWAjEaHkIvjTfKX6hBoykUu6a2RNFEQiKi0Qf4nF2VxIudPZmd883ZTKEVkT+/NcfoszF7wYxm8kkjesUL5+wGL9idO5yLidHVqymbgwcq/oRyP6XYu+ePk9FFDxd78T+wK8Z99YY3mrN1+Ygt73Y3pip6+/pZelNKArX8FKutVj4DdKRZkySVfmIS6l5Obr1Ip62rJTvRO+XhgvzgiZIksv2E+qnCPQnZaEcUfsP8AOUr3nAmg/FqkwbqNAfJF676wAmXWAJcu1mQ7aast8Y0jwIOjwOyHWWA2vcNTWP6F4MNbj0AAAAASUVORK5CYII=","aspectRatio":4.8,"src":"/volunteer/static/8a263282a745a29753a7b7132f6fa21c/0e6e2/image145.png","srcSet":"/volunteer/static/8a263282a745a29753a7b7132f6fa21c/b460a/image145.png 480w,\\n/volunteer/static/8a263282a745a29753a7b7132f6fa21c/6e898/image145.png 960w,\\n/volunteer/static/8a263282a745a29753a7b7132f6fa21c/0e6e2/image145.png 1920w,\\n/volunteer/static/8a263282a745a29753a7b7132f6fa21c/a0cb2/image145.png 2160w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}},"common":{"img":[{"featuredImg":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABCcAAAQnAEmzTo0AAABYUlEQVQoz1VRi27bMAz0/3/egKLN2hV7OXEcJbLekiX7duLmoRVAUBQfd0cN+nHHdBlxnS70Z7x/e8Pp5QnPT18wTyPOv398sun8C5fxJ97fXvH19IzX0wt7R4zMqfmKoa0BNRvUZMTn5GD1DKcJMH6HNzd4qxDsnXeFEhe04hD9glIKAvPmMSG6B1IwGLatodYV+74BtHVlEZNriQgh4DjbVsWOU3KSWk+g221mf2N7w+CcwTzPaPVvcV1XGH3DXc1ky6aSyCRj0YrNGq1Vxom5IAxz0DI0RcfejCGlCO8sB2Zh2dku9yvM8oA1hlI07xpKKXrKZtz3npMXoBKNqDFmEbDhkLDvu/jWGoK3RAwsLILagbqczqyvRSRzWJdsF0XJ3LP3wnjIOcuuUkry0H2MSd6c4/L/vffYGMsh6/+6bp7gCxVYMvTe9U/ZhFW3yj0e9279wz7GR82nOvZvH+wP9jRp2ZINMqUAAAAASUVORK5CYII=","aspectRatio":2.513089005235602,"src":"/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/0e6e2/image146.png","srcSet":"/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/b460a/image146.png 480w,\\n/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/6e898/image146.png 960w,\\n/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/0e6e2/image146.png 1920w,\\n/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/a0cb2/image146.png 2160w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}},{"featuredImg":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAc0lEQVQI12Pw3fhzDxB3MgABkE4G4sO+G3+EQ/mTgextQFrZd9NPRSC9BYingeU2/YwAyp0C4hYo3xsolw7U9MMEiGuA+AoQL/Tb+EMdiFcBJUH8AiC2BeLjQP5JIO0AxDlQtWuBWByI24Fy54F4JZBtBgCPJlkf8qkYDQAAAABJRU5ErkJggg==","aspectRatio":13.25,"src":"/volunteer/static/918ebc8dd3a2c2872f451db016fbf830/3a26c/Line4.png","srcSet":"/volunteer/static/918ebc8dd3a2c2872f451db016fbf830/3a26c/Line4.png 212w","sizes":"(max-width: 212px) 100vw, 212px"}}}}]},"hero":{"description":"Реацентр – это республиканский реабилитационный центр для детей-инвалидов с нарушениями опорно-двигательного аппарата. Команда волонтеров из EPAM проконсультировала учреждение и помогла подобрать систему управления ресурсами, которая автоматизирует внутренние бизнес-процессы центра, а также позволяет учитывать и контролировать всю поступающую информацию о пациентах.","title":"Автоматизация бизнес-процессов для центра детской реабилитации"},"strip":{"description":"В Беларуси проживает около 45 тысяч детей с нарушениями опорно-двигательного аппарата. Многие из них нуждаются в социальной адаптации и ежегодной комплексной реабилитации: помощи врачей, психологов и педагогов. Все эти услуги оказывает Реацентр – Республиканский центр для детей-инвалидов. Команда волонтеров из EPAM выступила в роли консультанта для учреждения: проанализировала и описала в блок-схемах внутренние бизнес-процессы и подобрала систему управления ресурсами, которая автоматизирует действия центра, а также позволяет сотрудникам учитывать и контролировать всю поступающую информацию."},"team":{"description":"Михаил Клебанов, Анна Ледн","title":"Большое спасибо команде проекта за проделанную работу:"},"the_problem":{"description":"В Реацентр ежегодно поступают на реабилитацию тысячи детей из различных областей Беларуси (каждый ребенок-инвалид имеет право проходить лечение несколько раз в год).  Однако вся информация о пациентах, в том числе заявки на лечение, данные по приему, оформлению и состоянию после выписки, хранится на бумаге. Количество бумажных носителей таково, что многие данные теряются, и это мешает центру взаимодействовать с детьми и их родителями.  Перед командой из EPAM стояла задача изучить, как работает центр, найти способ для автоматизации его бизнес-процессов и подобрать подходящую систему управления ресурсами, чтобы информация по каждому ребенку была учтена и контролировалась сотрудниками.","title":"Проблема"},"the_process":{"description":"Чтобы подобрать систему учета и контроля информации для центра, волонтеры из EPAM действовали в несколько этапов:","title":"Процесс","the_process_list":[{"title":"проанализировали, систематизировали и прописали в блок-схемах все внутренние бизнес-процессы Реацентра: от поступления данных о конкретном ребенке в центр и его приема на реабилитацию до дальнейшего контроля за состоянием после выписки;"},{"title":"изучили законодательные регламенты и внутренние инструкции самого центра (это помогло определить, где и как может храниться информация);"},{"title":"на основе полученных данных провели анализ систем управления ресурсами (CRM), которые можно использовать в центре, и подобрали несколько подходящих вариантов."}]},"what_s_next":{"description":"После того, как подобранная CRM будет установлена третьей компанией, волонтеры из EPAM снова подключатся к проекту. Команда будет “дружить” сайт центра и новую систему, чтобы автоматизировать взаимодействие родителей с центром, например, в случае проверки статуса заявки на лечение ребенка, которую они отправили.","title":"The next stage is...?"},"what_we_did":{"description":["После проведения бизнес-анализа, команда EPAM провела консультации с представители центра: специалисты помогли разобраться в построении процессов, предоставила блок-схемы и рекомендации, а также предложила варианты систем управления ресурсами.","Выбрав оптимальную CRM, волонтеры вместе с представителями центра начали поиск подрядчиков для ее установки. Так была найдена компания, которая сейчас на волонтерской основе занимается внедрением системы.","Установленная CRM позволит центру настроить и автоматизировать внутренние процессы, а также поможет сотрудникам учитывать и контролировать всю поступающую информацию о детях."],"title":"Что удалось сделать?"}}},{"node":{"header":{"img":{"featuredImg":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABCcAAAQnAEmzTo0AAAA8klEQVQY01WP3U7CQBCFeWmDAi0/VYzWAjEaHkIvjTfKX6hBoykUu6a2RNFEQiKi0Qf4nF2VxIudPZmd883ZTKEVkT+/NcfoszF7wYxm8kkjesUL5+wGL9idO5yLidHVqymbgwcq/oRyP6XYu+ePk9FFDxd78T+wK8Z99YY3mrN1+Ygt73Y3pip6+/pZelNKArX8FKutVj4DdKRZkySVfmIS6l5Obr1Ip62rJTvRO+XhgvzgiZIksv2E+qnCPQnZaEcUfsP8AOUr3nAmg/FqkwbqNAfJF676wAmXWAJcu1mQ7aast8Y0jwIOjwOyHWWA2vcNTWP6F4MNbj0AAAAASUVORK5CYII=","aspectRatio":4.8,"src":"/volunteer/static/8a263282a745a29753a7b7132f6fa21c/0e6e2/image145.png","srcSet":"/volunteer/static/8a263282a745a29753a7b7132f6fa21c/b460a/image145.png 480w,\\n/volunteer/static/8a263282a745a29753a7b7132f6fa21c/6e898/image145.png 960w,\\n/volunteer/static/8a263282a745a29753a7b7132f6fa21c/0e6e2/image145.png 1920w,\\n/volunteer/static/8a263282a745a29753a7b7132f6fa21c/a0cb2/image145.png 2160w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}},"common":{"img":[{"featuredImg":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABCcAAAQnAEmzTo0AAABYUlEQVQoz1VRi27bMAz0/3/egKLN2hV7OXEcJbLekiX7duLmoRVAUBQfd0cN+nHHdBlxnS70Z7x/e8Pp5QnPT18wTyPOv398sun8C5fxJ97fXvH19IzX0wt7R4zMqfmKoa0BNRvUZMTn5GD1DKcJMH6HNzd4qxDsnXeFEhe04hD9glIKAvPmMSG6B1IwGLatodYV+74BtHVlEZNriQgh4DjbVsWOU3KSWk+g221mf2N7w+CcwTzPaPVvcV1XGH3DXc1ky6aSyCRj0YrNGq1Vxom5IAxz0DI0RcfejCGlCO8sB2Zh2dku9yvM8oA1hlI07xpKKXrKZtz3npMXoBKNqDFmEbDhkLDvu/jWGoK3RAwsLILagbqczqyvRSRzWJdsF0XJ3LP3wnjIOcuuUkry0H2MSd6c4/L/vffYGMsh6/+6bp7gCxVYMvTe9U/ZhFW3yj0e9279wz7GR82nOvZvH+wP9jRp2ZINMqUAAAAASUVORK5CYII=","aspectRatio":2.513089005235602,"src":"/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/0e6e2/image146.png","srcSet":"/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/b460a/image146.png 480w,\\n/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/6e898/image146.png 960w,\\n/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/0e6e2/image146.png 1920w,\\n/volunteer/static/fe4f41ca07e2d33ddc57ec98c3c5d42d/a0cb2/image146.png 2160w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}},{"featuredImg":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAc0lEQVQI12Pw3fhzDxB3MgABkE4G4sO+G3+EQ/mTgextQFrZd9NPRSC9BYingeU2/YwAyp0C4hYo3xsolw7U9MMEiGuA+AoQL/Tb+EMdiFcBJUH8AiC2BeLjQP5JIO0AxDlQtWuBWByI24Fy54F4JZBtBgCPJlkf8qkYDQAAAABJRU5ErkJggg==","aspectRatio":13.25,"src":"/volunteer/static/918ebc8dd3a2c2872f451db016fbf830/3a26c/Line4.png","srcSet":"/volunteer/static/918ebc8dd3a2c2872f451db016fbf830/3a26c/Line4.png 212w","sizes":"(max-width: 212px) 100vw, 212px"}}}}]},"hero":{"description":"The Republican Center for Children with Disabilities works with children with musculoskeletal disorders. A team of EPAM volunteers consulted the Center to choose a customer relationship management system that would automate their internal processes and manage patient information.","title":"Automated customer relationship management system for The Republican Center for Children with Disabilities (Belarus)"},"strip":{"description":"Belarus has around 45,000 children living with musculoskeletal disorders. Many of them need help with social adaptation and daily rehabilitation procedures from doctors, psychologists and teachers. These services are provided by the Republican Center for Children with Disabilities (the Center). A team of EPAM volunteers consulted the Center, analyzing and describing their internal processes and choosing a customer relationship management system (CRM) to automate them. The system also lets Center employees manage all incoming patient information."},"team":{"description":"Michael Clebanov, Anna Lednik","title":"Our thanks go out to the project team:"},"the_problem":{"description":"The Center accepts thousands of patients each year across Belarus (every disabled child can come for treatment several times a year). But patient information, including treatment applications, checkup data and other information is kept on paper. There’s so much paper, in fact, that a lot of data is lost, slowing down the Center in its work with children and their parents. The EPAM team needed to understand how the Center works, find a way to automate its processes and choose a CRM system to keep up with all the information.","title":"The problem"},"the_process":{"description":"The EPAM volunteers worked in several stages:","title":"The process","the_process_list":[{"title":"Analysis, systemization and flowchart description of all the Center’s internal business processes, from receipt of information on a patient to their treatment and discharge and subsequent monitoring;"},{"title":"Analysis of legal considerations and the Center’s internal work instructions (to determine how and where information could be stored);"},{"title":"Analysis of existing customer relationship management systems the Center could use and selection of the best options."}]},"what_s_next":{"description":"Once the system is implemented, EPAM volunteers will once again join the project. They will work to integrate the Center’s website with the new system to automate work with children’s parents, for example in checking treatment application status.","title":"What’s next"},"what_we_did":{"description":["The EPAM team analyzed the business to determine its internal processes. They described processes in flowcharts and recommended changes, and then proposed options for a customer relationship management system.","After choosing the optimal system, the volunteers and Center representatives looked for contractors to implement it. They found a company that is now doing this on a volunteer basis.","The system will help the Center to automate its processes and manage patient information."],"title":"What we did"}}}]}}}')},zhyO:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),r=a("0qtt"),s=a("2yYn"),c=a("1RvS"),o=function(e){var t=e.content,a=Array.isArray(t.description);return i.a.createElement("article",{className:"container-center container-center--small"},i.a.createElement(c.a,null,i.a.createElement(s.a,{type:"titleGeneral",className:"title-page--x-bold strip strip--half-top clr-dark-primary",text:t.title}),a&&t.description.map((function(e){return i.a.createElement(r.a,{className:"mrg-0",size:"paragraph-large",text:e})})),!a&&i.a.createElement(r.a,{className:"mrg-0",size:"paragraph-large",text:t.description})))}}}]);