import getDisplay from './getDisplayName'

describe('getDisplay', () => {
    describe('when specified city and student is not from workstudy', () => {
        it('returns city and full name', () => {
            expect(getDisplay('Jane', 'Doe','Paris', false)).toBe('[Paris] Jane Doe')
        })
    })

    describe('when not specified city and student is not from workstudy', () => {
        it('returns brakets with question mark and full name', () => {
            expect(getDisplay('Jane', 'Doe','', false)).toBe('[?] Jane Doe')
        })
    })

    describe('when not specified city and student from workstudy', () => {
        it('returns brakets with question mark and full name with - WnS in the end', () => {
            expect(getDisplay('Jane', 'Doe','', true)).toBe('[?] Jane Doe - WnS')
        })
    })
    
    describe('when specified city and student from workstudy', () => {
        it('returns city, full name and - WnS in the end', () => {
            expect(getDisplay('Jane', 'Doe','Paris', true)).toBe('[Paris] Jane Doe - WnS')
        })
    })
    
})