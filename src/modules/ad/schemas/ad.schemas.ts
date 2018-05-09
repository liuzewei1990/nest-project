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
		updateTime:{
			type:Date,
			default:Date.now
		}
	},
	{
		collection: 'ad',
		versionKey: false,
		timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
		toObject:{
			transform:function(doc, ret, options){
				ret.id = doc.id;
				delete ret._id;
				// ret.ss = "可以添加自定义";
				ret.createTime = moment(ret.createTime).format('YYYY-MM-DD HH:mm:ss');
				return ret;
			}
		}
	}
);

AdSchema.post('find', function(doc) {
	//这里的doc是一个数组
	// console.log(doc)
	console.log("这是一个Schema的find中间件");
});

// console.log(AdSchema.options)
// if (!schema.options.toObject) schema.options.toObject = {};

//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据,没有会自动创建

