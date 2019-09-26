/**
 * 包含n个action creator 函数的模块
 * async action：对象{type:'xxx',data:xxx}
 * sync action：函数 dispatch=>{}
 */

import { SET_HEAD_TITLE } from "./action-types";

export const setHeadTitle = headTitle => ({ type: SET_HEAD_TITLE, headTitle });
