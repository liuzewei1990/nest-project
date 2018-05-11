import * as mongoose from 'mongoose';
import * as moment from 'moment';

export const AdSchema = new mongoose.Schema(
	{
		linkUrl: { type: String },
		base64: { type: String },
		defaultStatus: {
			type: Boolean,
			default: false
		},
		createTime: {
			type: Date,
			default: Date.now
		},
		updateTime: {
			type: Date,
			default: Date.now
		}
	},
	{
		collection: 'ad',
		versionKey: false,
		timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
		// toObject: {
		// 	transform: function (doc, ret, options) {
		// 		// ret.id = doc.id;
		// 		// delete ret._id;
		// 		// ret.ss = "可以添加自定义";
		// 		ret.createTime = moment(ret.createTime).format('YYYY-MM-DD HH:mm:ss');
		// 		ret.updateTime = moment(ret.updateTime).format('YYYY-MM-DD HH:mm:ss');
		// 		return ret;
		// 	}
		// }
	}
);

// AdSchema.set('toJSON', { getters: true, virtuals: true });
AdSchema.set('toObject', { getters: true });


// AdSchema.path("linkUrl").set(v=>{
// 	console.log(v)
// 	return v+"?v=404"
// })
AdSchema.path('createTime').get(function (v) {
	return moment(v).format("YYYY-MM-DD HH:mm:ss");
});
AdSchema.path('updateTime').get(function (v) {
	return moment(v).format("YYYY-MM-DD");
});

// AdSchema.pre("find",(next)=>{
// 	console.log("这是一个pre中间件1");
// 	next()
// })

// AdSchema.pre("find",true,(next,done)=>{
// 	console.log("这是一个pre中间件2");
// 	next()
// 	setTimeout(()=>{
// 		console.log("延迟pre中间件")
// 		done()
// 	},2000)
// })

// AdSchema.pre("find",(next)=>{
// 	console.log("这是一个pre中间件3");
// 	next()
// })

// AdSchema.post('find', function (doc) {
// 	//这里的doc是一个数组
// 	// console.log(doc)
// 	console.log("这是一个Schema的find中间件");
// });

// AdSchema.pre('validate', function() {
// 	console.log('this gets printed first');
//   });
//   AdSchema.post('validate', function() {
// 	console.log('this gets printed second');
//   });
//   AdSchema.pre('save', function() {
// 	console.log('this gets printed third');
//   });
//   AdSchema.post('save', function() {
// 	console.log('this gets printed fourth');
//   });

// AdSchema.pre('save',function (next) {
// 	//这里的doc是一个数组
// 	// console.log(doc)
// 	console.log("这是一个Schema的save中间件pre钩子");
// 	next()
// });

// AdSchema.pre('save',function (next) {
// 	//这里的doc是一个数组
// 	// console.log(doc)
// 	console.log("这是一个Schema的save中间件pre钩子2");
// 	next()
// });

// AdSchema.post('save',function (doc) {
// 	//这里的doc是一个数组
// 	console.log(doc)
// 	console.log("这是一个Schema的save中间件post钩子");
// });

// console.log(AdSchema.options)
// if (!schema.options.toObject) schema.options.toObject = {};

//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据,没有会自动创建

