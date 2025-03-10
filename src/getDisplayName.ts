const getDisplayName = (firstName: string, lastName: string, city: string = '', wokstudy: boolean = false) => {
    const studentCity = city ? `[${city}]` : '[?]';

    const cursusType = wokstudy ? ' - WnS' : '' ;

    return `${studentCity} ${firstName} ${lastName}${cursusType}` 
}

export default getDisplayName