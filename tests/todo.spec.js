const { test, expect } = require('@playwright/test');
const { TodoPage } = require('../pages/TodoPage');

test.describe('TodoMVC — Page Object Model example', () => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test('adds new todo items', async () => {
    await todoPage.addTodo('Write CV automation demo');
    await todoPage.addTodo('Review Playwright config');

    await expect(todoPage.todoItems).toHaveCount(2);
  });

  test('marks an item as complete', async () => {
    await todoPage.addTodo('Automate regression suite');
    await todoPage.toggleTodo('Automate regression suite');

    await expect(
      todoPage.todoItems.filter({ hasText: 'Automate regression suite' })
    ).toHaveClass(/completed/);
  });

  test('filters active vs completed items', async ({ page }) => {
    await todoPage.addTodo('Active task');
    await todoPage.addTodo('Completed task');
    await todoPage.toggleTodo('Completed task');

    await todoPage.filterBy('Active');
    await expect(todoPage.todoItems).toHaveCount(1);
    await expect(page.getByText('Active task')).toBeVisible();

    await todoPage.filterBy('Completed');
    await expect(todoPage.todoItems).toHaveCount(1);
    await expect(page.getByText('Completed task')).toBeVisible();
  });
});
