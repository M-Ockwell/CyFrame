export { }

declare global {
    namespace Cypress {
        interface Chainable {
            clickById(id: string): Chainable<void>;
            typeById(id: string, value: string): Chainable<void>;
            getById(id: string): Chainable<void>;


            console(t: any): Chainable<void>;
        }
    }
}