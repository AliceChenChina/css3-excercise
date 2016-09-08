// JavaScript Document
$(document).ready(function(){
	    $(".navbox>li").children("a").eq(0).css({"border":"1px solid #dba839","color":"#dba839"}); 
		$(".navbox>li").hover(function(){
			$(this).children("a").css({"border":"1px solid #dba840","color":"#dba840"});
			},function(){ 
			$(this).children("a").css({"border":"none","color":"#000"});
			
		})
		$("")
			})