describe('App.vue', () => {
  let tasks;

  beforeEach(() => {
    tasks = [{
      id: 1,
      name: 'Test task',
      owner_id: 1,
      owner: {
        id: 1,
        name: 'Test user'
      },
      job_state: 'pending',
      created_at: '2022-03-15T10:00:00Z'
    }];

    cy.visit('/');
  });

  it('displays the Task Manager text in the nav bar', () => {
    cy.get('.v-toolbar-title__placeholder').should('contain', 'Task Manager');
  });

  it('displays a task in the TasksList component', () => {
    cy.get('ul').should('exist');
  });
});
