/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

function $(x){
	return document.getElementById(x);
}

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

// String.prototype.trim=function (){

// }
function addAqiData() {
	var city=$("aqi-city-input").value.trim();
	var air=$("aqi-value-input").value.trim();
	if(!/^[\u4e00-\u9fa5a-z]+$/i.test(city)){
		alert("城市名必须为中英文字符");
		$("aqi-city-input").value="";
		$("aqi-city-input").focus();
		return;
	}
	if(!/^[1-9]\d*$/.test(air)){
		alert("空气质量必须为整数");
		$("aqi-value-input").value="";
		$("aqi-value-input").focus();
		return;
	}
	aqiData[city]=air;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for (var city in aqiData) {
		table+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button onclick=deleteRow(this)>删除</button></td></tr>"
	};
	$("aqi-table").innerHTML=table;
}

function deleteRow(obj){
	var tr=obj.parentNode.parentNode;
	var cityd=tr.firstChild.textContent;
 	delete aqiData[cityd];
	$("aqi-table").lastChild.removeChild(tr);
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  $("add-btn").onclick=addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

window.onload=function (){
	init();
}

