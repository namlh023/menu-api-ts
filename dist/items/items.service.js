// src/items/items.service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * In-Memory Store
 */
let items = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
};
/**
 * Service Methods
 */
export const findAll = () => __awaiter(void 0, void 0, void 0, function* () { return Object.values(items); });
export const find = (id) => __awaiter(void 0, void 0, void 0, function* () { return items[id]; });
export const create = (newItem) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new Date().valueOf();
    items[id] = Object.assign({ id }, newItem);
    return items[id];
});
export const update = (id, itemUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield find(id);
    if (!item) {
        return null;
    }
    items[id] = Object.assign({ id }, itemUpdate);
    return items[id];
});
export const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield find(id);
    if (!item) {
        return null;
    }
    delete items[id];
});
