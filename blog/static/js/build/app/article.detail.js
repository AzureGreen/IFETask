define(["jquery"],function(e){var i=0,t=function(){console.log("no such"),window.history.back(-1)},a=function(a){if(console.log(a),a)i=0;else{var n="?id=";if((i=parseInt(window.location.search.substr(n.length)))<=0)return void t()}console.log(i),e.ajax({url:"assist/getArticle.php?articleid="+i,type:"GET",dataType:"json"}).done(function(i){if(!i)return void t();var a="";a+='<div class="article"><div class="block"><h2 class="title text-center">'+i.title+'</h2><p class="text-center"><i class="fa fa-calendar"></i><time class="date">'+i.date+'</time><i class="fa fa-eye"></i><span>'+i.view+'</span></p><div class="content">'+i.content+'</div><div class="pre-next"><div class="pre">',i.pre.id&&(a+='<a href="article.php?id='+i.pre.id+'"><span>上一篇：'+i.pre.title+"</span></a>"),a+='</div><div class="next">',i.next.id&&(a+='<a href="article.php?id='+i.next.id+'"><span>下一篇：'+i.next.title+"</span></a>"),a+="</div></div></div></div>",e(".article-detail").append(a)}).fail(function(e,i){console.log("ajax: 请求文章详细内容 失败"+i)})};return{showArticleDetail:a}});