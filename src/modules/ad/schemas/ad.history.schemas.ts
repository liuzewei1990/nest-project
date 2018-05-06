import * as mongoose from 'mongoose';

export const AdHistorySchema = new mongoose.Schema(
	{
		adNo:{type:String},
		from:{type:String},
		createTime:{type:Date,default:Date.now}
	},
	{
		collection: 'ad_history'
	}
);
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据,没有会自动创建

