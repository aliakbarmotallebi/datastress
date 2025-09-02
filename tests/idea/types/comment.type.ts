import { CreateAtObjType } from "./create-at-obj.type.ts";
import { UserType } from "./user.type.ts";

export type CommentType = {
  id: string;
  text: string;
  node_id: number;
  isUsers: boolean;
  reply_id?: string | null;
  type: string;
  user: UserType;
  createAtObj: CreateAtObjType;
  timestamp: number;
  isExpert: boolean;
};
