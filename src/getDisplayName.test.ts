import getDisplayName from './getDisplayName'

describe('getDisplayName', ()=> {
    describe('when no specified city', () => {
        it('returns question mark and full name', ()=> {
            expect(getDisplayName('Jane', 'Doe')).toBe('[?] Jane Doe')
        })
    })
    describe('when specified city', () => {
        it('returns city and full name', ()=> {
            expect(getDisplayName('John', 'Doe', 'Paris')).toBe('[Paris] John Doe')
        })
    })
    describe('when workstudy curriculum is specified', () => {
        it('returns city and full name followed by - WnS', ()=> {
            expect(getDisplayName('Boon', 'Tobias', 'Paris', 'workstudy')).toBe('[Paris] Boon Tobias - WnS')
        })
    })
    describe('when any other curriculum is specified', () => {
        it('returns city and full name not followed by - WnS', ()=> {
            expect(getDisplayName('Baxter', 'Stockman', 'Paris', 'regular')).toBe('[Paris] Baxter Stockman')
        })
    })
})

git add .
    git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:dldvlpr-poc/Tester-un-composant-React-Typescript-avec-Jest-et-React-Testing-Library.git
git push -u origin main