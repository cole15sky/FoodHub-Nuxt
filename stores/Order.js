// stores/Order.js
import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    items: [],
    totalPrice: 0,
    totalItems: 0,
  }),
  actions: {
    addItem(item) {
      // Check if item already exists
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        // Add new item with initial quantity
        this.items.push({ ...item, quantity: 1 });
      }
      // Update totals
      this.updateTotals();
    },
    updateTotals() {
      this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      this.totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
  },
});
