var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var async = require('async');

var app = express();

// userid
var user_id = 'guoguofish';
var start = 0;
var people_url = 'https://www.douban.com/people/' + user_id + '/notes?start=' + start + '&type=note';
var note_urls = [];
var page_count = 0;


function climb_note() {
	if (Math.ceil(start/10.0) == page_count && page_count != 0) {
		console.log(note_urls);

		async.mapLimit(note_urls,10,function(note_url, callback){
			// console.log(item);
			superagent.get(note_url,function(err,res){
				if (err) {
					return console.log('err: climb note');
				}
				var $ = cheerio.load(res.text);
				// var title = $('.note-container h1').text().trim();
				// var createtime = $('.note-container .pl').text().trim();
				// var content = $('#link-report').text();
				// console.log(title);
				// console.log(createtime);
				// console.log(content);
				callback(null,{
					title: $('.note-container h1').text().trim(),
					createtime: $('.note-container .pl').text().trim(),
					content: $('#link-report').text()
				});
			});
		}, function(err,result){
			console.log('final:');
			console.log(result);
		});

		return console.log('url爬取完毕');
	}

	superagent.get(people_url,function(err,res){
		if (err) {
			// console.log(err);
			return console.log('error: climb list');
		}
		
		var $ = cheerio.load(res.text);
		$('.note-container').each(function(index, el) {
			var $element = $(el);
			var url = $element.attr('data-url');
			note_urls.push(url);
		});
		console.log(note_urls);
		start = note_urls.length;
		people_url = 'https://www.douban.com/people/' + user_id + '/notes?start=' + start + '&type=note';
		page_count = $('.thispage').attr('data-total-page');
		if (page_count === undefined) {
			page_count = 1
		}
		console.log('start =' + start +'**' + page_count);
		climb_note();
	});
}


climb_note();