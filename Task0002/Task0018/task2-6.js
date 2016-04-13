window.onload=function(){
	var list={
		queue:[3,2],
		//左侧人
		unshift:function(num){
			list.queue.unshift(num);
			list.plant();
		},
		//右侧入
		push:function(num){
			list.queue.push(num);
			list.plant();
		},
		//左侧出
		shift:function(){
			if(list.queue.length==0){
				alert("queue is empty;");
				return false;
			}else{
				list.queue.shift();
				list.plant();
			}
		},
		//右侧出
		pop:function(){
			if(list.queue.length==0){
				alert("queue is empty;");
				return false;
			}else{
				list.queue.pop();
				list.plant();
			}
		},
		del:function(num){
			list.queue.splice(num,1);
			list.plant();
		},
		plant:function(){
			var str=list.queue.reduce(function(a,b){
				return a+"<div>"+b+"</div>"
			},"");
			container.innerHTML=str;
			addDivEvent();
		},
	};


	var container=document.getElementById("container");
	function addDivEvent(){
		var btn=container.getElementsByTagName("div");
		for(var i=0;i<btn.length;i++){
			btn[i].onclick=function(i){
				return function(){
					return list.del(i);
				}
			}(i);
		}
	}
	var botton=document.querySelectorAll("input");
	botton[1].onclick=function (){
		var num=botton[0].value;
		if(/^\d+$/.test(num)){
			list.unshift(num);
		}else{
			alert("请输入正确的整数");
		}
	}
	botton[2].onclick=function (){
		var num=botton[0].value;
		if(/^\d+$/.test(num)){
			list.push(num);
		}else{
			alert("请输入正确的整数");
		}
	}
	botton[3].onclick=function(){
		list.shift();
	}
	botton[4].onclick=function(){
		list.pop();
	}
	addDivEvent();

}