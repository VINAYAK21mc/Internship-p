export type reply={
    id:string;
    commentText:string;
    parentId:string;
    replies:reply[];
}
export type comment={
    id:string;
    commentText:string;
    parentId:string;
    replies:reply[];
}