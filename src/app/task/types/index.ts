/**
 * @name: index
 * @author: evil
 * @date: 2022-05-02 12:51
 * @description：index
 * @update: 2022-05-02 12:51
 */

export interface taskItem {
  id: number;
  name: string;
  desc: string;
  status: number;
  createTime: string;
  updateTime: string;
  tasks?: task[];
}

export interface task {
  name: string;
  id: number;
}

export type taskList = taskItem[];
