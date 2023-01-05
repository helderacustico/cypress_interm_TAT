import { faker } from '@faker-js/faker';

const options = { env: { snapshotOnly: true } }

describe('Crete a Issue', options, () => {

        const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        
        //utiliza rotina via API para otimizar o tempo de execução do teste
        cy.gui_createProject(issue.project)
        

    }) 

    it('sucessfully', () => {

        cy.gui_createIssue(issue)

        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)

    })  


})