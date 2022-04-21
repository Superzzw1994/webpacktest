/**
 * @name: index
 * @author: evil
 * @date: 2022-04-21 18:04
 * @description：index
 * @update: 2022-04-21 18:04
 */
import { defineStore } from "pinia";

export const useRootStore = defineStore({
  id: "root",
  state: () => ({
    count: 0
  })
});
