var mongoose = require("mongoose");
var MovieSchema = new mongoose.Schema({
	title: String,
	director: String,
	country: String,
	year: String,
	language: String,
	summary: String,
	poster: String,
	flash: String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

MovieSchema.pre('save',function(next){
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	} else {
		this.meta.updateAt = Date.now()
	}
	next()
})

MovieSchema.statics = {
	fetch: function (cb) {
		this
		.find()
		.sort('meta.updateAt')
		.exec(cb)
	},
	fetchById: function (id, cb) {
		this
		.findOne({_id: id})
		.sort('meta.updateAt')
		.exec(cb)
	}

}

module.exports = MovieSchema