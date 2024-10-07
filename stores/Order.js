import { defineStore, createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const useOrderStore = defineStore('order', {
  state: () => ({
    items: [],
    totalPrice: 0,
    totalItems: 0,
  }),
  actions: {
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
      this.updateTotals();
    },
    updateQuantity(id, quantity) {
      const item = this.items.find(i => i.id === id);
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity; // Update quantity
        } else {
          this.removeItem(id); // Remove item if quantity is 0
        }
        this.updateTotals();
      }
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id);
      this.updateTotals();
    },
    updateTotals() {
      this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      this.totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    clearCart() {
      this.items = [];
      this.updateTotals();
    },
  },
  persist: true,
});
