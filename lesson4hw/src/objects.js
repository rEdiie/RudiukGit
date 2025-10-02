const company = {
    name: 'ByteAnt',
    founded: 2010,
    employees: [
        { name: 'Anna', position: 'Manager' },
        { name: 'Eddie', position: 'Developer' }
    ],
    location: {
        country: 'Ukraine',
        city: 'Kyiv'
    },
    showEmployees: function() {
        console.log('List employees:');
        this.employees.forEach(emp => {
            console.log(`- ${emp.name} (${emp.position})`);
        });
    }
};

company.showEmployees();
