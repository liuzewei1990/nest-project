
import { Document } from "mongoose";

export interface AdInterface extends Document {
  readonly linkUrl: string;

  readonly base64: string;
}