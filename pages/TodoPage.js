class TodoPage {
  constructor(page) {
    this.page = page;
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.getByTestId('todo-item');
  }

  async goto() {
    await this.page.goto('/');
  }

  async addTodo(text) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async toggleTodo(text) {
    const item = this.todoItems.filter({ hasText: text });
    await item.getByRole('checkbox').check();
  }

  async filterBy(status) {
    await this.page.getByRole('link', { name: status, exact: true }).click();
  }
}

module.exports = { TodoPage };
