import * as mongoose from 'mongoose';

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
    	timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
	}
);
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据,没有会自动创建

